import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { UserInfo } from '../components/UserInfo';
import { PostCard } from '../components/PostCard';
import { PostEditor } from '../components/PostEditor';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import { BackButton } from '../components/BackButton';
import { useData } from '../context/DataContext';
import { useFetchWithDelay } from '../hooks/useFetchWithDelay';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { fetchPosts } from '../utils/api';
import { Post } from '../types';

const POSTS_PER_PAGE = 5;

export function UserDetailPage() {
  const { id } = useParams<{ id: string }>();
  const userId = parseInt(id || '0', 10);
  
  const { getUserById, getPostsByUserId, setPosts, addPost, editPost, deletePost, showNotification } = useData();
  const { data: fetchedPosts, loading, error, refetch } = useFetchWithDelay(fetchPosts);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const user = getUserById(userId);
  const allUserPosts = getPostsByUserId(userId);
  
  const filteredPosts = allUserPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const displayedPosts = filteredPosts.slice(0, currentPage * POSTS_PER_PAGE);
  
  useEffect(() => {
    if (fetchedPosts) {
      setPosts(fetchedPosts);
    }
  }, [fetchedPosts, setPosts]);

  useEffect(() => {
    setHasMore(displayedPosts.length < filteredPosts.length);
  }, [displayedPosts.length, filteredPosts.length]);

  const loadMore = useCallback(() => {
    if (hasMore && !loading) {
      setCurrentPage(prev => prev + 1);
    }
  }, [hasMore, loading]);

  const { sentinelRef } = useInfiniteScroll(loadMore, {
    threshold: 1.0,
    rootMargin: '100px'
  });

  const handleAddPost = () => {
    setEditingPost(undefined);
    setIsEditorOpen(true);
  };

  const handleEditPost = (post: Post) => {
    setEditingPost(post);
    setIsEditorOpen(true);
  };

  const handleSavePost = (post: Omit<Post, 'id'> | Post) => {
    if ('id' in post) {
      editPost(post);
      showNotification('Post updated successfully!');
    } else {
      addPost(post);
      showNotification('Post created successfully!');
    }
    setIsEditorOpen(false);
    setEditingPost(undefined);
  };

  const handleDeletePost = (postId: number) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deletePost(postId);
      showNotification('Post deleted successfully!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <BackButton />
          <div className="glass-effect rounded-2xl p-8 shadow-xl">
            <Loading />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <BackButton />
          <Error message={error} onRetry={refetch} />
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <BackButton />
          <Error message="User not found" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <BackButton />
        
        <UserInfo user={user} />

        {/* Posts Section Header */}
        <div className="glass-effect rounded-2xl p-6 mb-6 shadow-xl">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold gradient-text mb-1">Posts</h2>
              <p className="text-gray-500">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
              </p>
            </div>
            <button
              onClick={handleAddPost}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              New Post
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search posts by title..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>
        </div>

        {/* Posts List */}
        {filteredPosts.length === 0 ? (
          <div className="glass-effect rounded-2xl p-12 text-center shadow-xl">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-gray-600 text-lg font-medium">
              {searchQuery ? 'No posts match your search' : 'No posts yet. Create one to get started!'}
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {displayedPosts.map((post, index) => (
                <div key={post.id} className="fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                  <PostCard
                    post={post}
                    onEdit={handleEditPost}
                    onDelete={handleDeletePost}
                  />
                </div>
              ))}
            </div>

            {hasMore && (
              <div ref={sentinelRef} className="py-8">
                <Loading />
              </div>
            )}

            {hasMore && (
              <div className="mt-6 text-center">
                <button
                  onClick={loadMore}
                  className="px-8 py-3 glass-effect rounded-xl font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                >
                  Load More Posts
                </button>
              </div>
            )}

            {!hasMore && displayedPosts.length > 0 && (
              <div className="mt-8 text-center">
                <div className="inline-flex items-center px-6 py-3 glass-effect rounded-full">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 font-medium">You've reached the end</span>
                </div>
              </div>
            )}
          </> )
        }

        {isEditorOpen && (
          <PostEditor
            post={editingPost}
            userId={userId}
            onSave={handleSavePost}
            onCancel={() => {
              setIsEditorOpen(false);
              setEditingPost(undefined);
            }}
          />
        )}
      </div>
    </div>
  );
}
