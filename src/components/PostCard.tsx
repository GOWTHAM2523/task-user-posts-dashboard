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
    <div className="glass-effect rounded-xl p-6 card-hover group relative overflow-hidden">
      {/* Decorative Gradient Border */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500"></div>
      
      <div className="flex justify-between items-start">
        <div className="flex-1 pr-4">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{truncatedBody}</p>
        </div>

        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={() => onEdit(post)}
            className="p-3 text-blue-600 hover:bg-blue-50 rounded-xl transition-all hover:scale-110 group/edit"
            aria-label="Edit post"
            title="Edit"
          >
            <svg className="w-5 h-5 group-hover/edit:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          <button
            onClick={() => onDelete(post.id)}
            className="p-3 text-red-600 hover:bg-red-50 rounded-xl transition-all hover:scale-110 group/delete"
            aria-label="Delete post"
            title="Delete"
          >
            <svg className="w-5 h-5 group-hover/delete:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
    </div>
  );
}
