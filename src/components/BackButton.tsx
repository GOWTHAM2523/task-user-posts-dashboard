import { useNavigate } from 'react-router-dom';

export function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      className="glass-card flex items-center gap-4 px-6 py-4 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 mb-10 group"
      aria-label="Back to users list"
    >
      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <span className="font-bold text-gray-700 text-lg">Back to Users</span>
    </button>
  );
}
