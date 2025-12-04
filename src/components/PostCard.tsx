import { Post } from '../types';

interface PostCardProps {
  post: Post;
  onEdit: (post: Post) => void;
  onDelete: (postId: number) => void;
}

export function PostCard({ post, onEdit, onDelete }: PostCardProps) {
  const truncatedBody = post.body.length > 120 
    ? `${post.body.substring(0, 120)}...` 
    : post.body;

  return (
    <div className="glass-card rounded-3xl p-8 group relative overflow-hidden hover:shadow-2xl transition-all duration-500">
      {/* Gradient Left Border */}
      <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500"></div>
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-start gap-6">
          <div className="flex-1 min-w-0">
            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight group-hover:gradient-text transition-all duration-300">
              {post.title}
            </h3>
            
            {/* Body */}
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {truncatedBody}
            </p>

            {/* Meta Info */}
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-medium">Post #{post.id}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 flex-shrink-0">
            <button
              onClick={() => onEdit(post)}
              className="group/btn relative w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-500 hover:to-blue-600 flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-110"
              aria-label="Edit post"
              title="Edit Post"
            >
              <svg className="w-5 h-5 text-blue-600 group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
            
            <button
              onClick={() => onDelete(post.id)}
              className="group/btn relative w-12 h-12 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 hover:from-red-500 hover:to-red-600 flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-110"
              aria-label="Delete post"
              title="Delete Post"
            >
              <svg className="w-5 h-5 text-red-600 group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
