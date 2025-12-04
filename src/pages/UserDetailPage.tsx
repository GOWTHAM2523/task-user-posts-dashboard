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
    <div className="min-h-screen py-8 md:py-12 relative">
      {/* Floating Orbs */}
      <div className="fixed top-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="fixed bottom-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <BackButton />
        
        <UserInfo user={user} />

        {/* Posts Section Header */}
        <div className="glass-card rounded-3xl p-8 mb-8 shadow-2xl animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-black gradient-text">Posts</h2>
                  <p className="text-gray-500 text-lg mt-1">
                    {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} published
                  </p>
                </div>
              </div>
            </div>
            
            <button
              onClick={handleAddPost}
              className="btn-primary px-8 py-4 flex items-center gap-3 text-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
              </svg>
              <span>Create New Post</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              className="input-modern pl-14 text-lg"
            />
          </div>
        </div>

        {/* Posts List */}
        {filteredPosts.length === 0 ? (
          <div className="glass-card rounded-3xl p-16 text-center shadow-2xl animate-fadeInScale">
            <div className="w-32 h-32 mx-auto mb-6 rounded-3xl gradient-primary flex items-center justify-center animate-float shadow-2xl">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-3xl font-black text-gray-900 mb-3">
              {searchQuery ? 'No Matching Posts' : 'No Posts Yet'}
            </h3>
            <p className="text-gray-600 text-lg font-medium mb-8">
              {searchQuery ? 'Try adjusting your search terms' : 'Start by creating your first post'}
            </p>
            {!searchQuery && (
              <button
                onClick={handleAddPost}
                className="btn-primary px-8 py-4 inline-flex items-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span>Create First Post</span>
              </button>
            )}
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {displayedPosts.map((post, index) => (
                <div 
                  key={post.id} 
                  className="animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'both' }}
                >
                  <PostCard
                    post={post}
                    onEdit={handleEditPost}
                    onDelete={handleDeletePost}
                  />
                </div>
              ))}
            </div>

            {hasMore && (
              <div ref={sentinelRef} className="py-12">
                <Loading />
              </div>
            )}

            {hasMore && (
              <div className="mt-10 text-center">
                <button
                  onClick={loadMore}
                  className="glass-card px-10 py-4 rounded-2xl font-bold text-gray-700 hover:shadow-xl transition-all hover:scale-105"
                >
                  Load More Posts
                </button>
              </div>
            )}

            {!hasMore && displayedPosts.length > 0 && (
              <div className="mt-12 text-center animate-fadeInUp">
                <div className="inline-flex items-center px-8 py-4 glass-card rounded-full shadow-lg">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-bold text-lg">All posts loaded</span>
                </div>
              </div>
            )}
          </>
        )}

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
