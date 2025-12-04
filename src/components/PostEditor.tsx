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
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fadeInScale">
      <div className="glass-card rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-10">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={post ? "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" : "M12 4v16m8-8H4"} />
                  </svg>
                </div>
                <div>
                  <h2 className="text-4xl font-black gradient-text">
                    {post ? 'Edit Post' : 'Create Post'}
                  </h2>
                  <p className="text-gray-500 text-lg mt-1">
                    {post ? 'Make changes to your post' : 'Share something amazing'}
                  </p>
                </div>
              </div>
            </div>
            
            <button
              onClick={onCancel}
              className="w-12 h-12 rounded-2xl hover:bg-gray-100 flex items-center justify-center transition-all hover:scale-110"
              aria-label="Close"
            >
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Title Input */}
            <div>
              <label htmlFor="title" className="block text-sm font-black text-gray-700 mb-3 uppercase tracking-wider">
                Post Title
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input-modern text-xl font-bold"
                placeholder="Enter a captivating title..."
                required
              />
            </div>

            {/* Body Textarea */}
            <div>
              <label htmlFor="body" className="block text-sm font-black text-gray-700 mb-3 uppercase tracking-wider">
                Post Content
              </label>
              <textarea
                id="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={10}
                className="input-modern text-lg resize-none"
                placeholder="Write your content here..."
                required
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <button
                type="button"
                onClick={onCancel}
                className="flex-1 px-8 py-4 border-2 border-gray-300 rounded-2xl text-gray-700 font-bold hover:bg-gray-50 transition-all hover:scale-105 text-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 btn-primary px-8 py-4 text-lg"
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
