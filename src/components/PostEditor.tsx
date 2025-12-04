import { useState, useEffect } from 'react';
import { Post } from '../types';

interface PostEditorProps {
  post?: Post;
  userId: number;
  onSave: (post: Omit<Post, 'id'> | Post) => void;
  onCancel: () => void;
}

export function PostEditor({ post, userId, onSave, onCancel }: PostEditorProps) {
  const [title, setTitle] = useState(post?.title || '');
  const [body, setBody] = useState(post?.body || '');

  useEffect(() => {
    setTitle(post?.title || '');
    setBody(post?.body || '');
  }, [post]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !body.trim()) {
      return;
    }

    if (post) {
      onSave({ ...post, title: title.trim(), body: body.trim() });
    } else {
      onSave({ userId, title: title.trim(), body: body.trim() });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
      <div className="glass-effect rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto slide-up">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold gradient-text">
                {post ? 'Edit Post' : 'Create New Post'}
              </h2>
              <p className="text-gray-500 mt-1">
                {post ? 'Update your post content' : 'Share your thoughts'}
              </p>
            </div>
            <button
              onClick={onCancel}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                Title
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Enter an engaging title..."
                required
              />
            </div>

            <div className="mb-8">
              <label htmlFor="body" className="block text-sm font-semibold text-gray-700 mb-2">
                Content
              </label>
              <textarea
                id="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={8}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors resize-none"
                placeholder="Write your content here..."
                required
              />
            </div>

            <div className="flex gap-3 justify-end">
              <button
                type="button"
                onClick={onCancel}
                className="px-6 py-3 border-2 border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition-all hover:scale-105"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {post ? 'Save Changes' : 'Create Post'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
