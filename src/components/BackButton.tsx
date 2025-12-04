import { useNavigate } from 'react-router-dom';

export function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      className="glass-effect flex items-center px-5 py-3 rounded-xl hover:scale-105 transition-all shadow-md hover:shadow-lg mb-8 group"
      aria-label="Back to users list"
    >
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mr-3 group-hover:rotate-[-5deg] transition-transform">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <span className="font-semibold text-gray-700">Back to Users</span>
    </button>
  );
}
