import { User } from '../types';
import { useNavigate } from 'react-router-dom';

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/user/${user.id}`)}
      className="glass-effect rounded-2xl p-6 card-hover cursor-pointer group relative overflow-hidden"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          navigate(`/user/${user.id}`);
        }
      }}
      aria-label={`View details for ${user.name}`}
    >
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Avatar */}
      <div className="relative mb-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
          {user.name.charAt(0)}
        </div>
        <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
          {user.name}
        </h3>
        
        <div className="space-y-2">
          <div className="flex items-center text-gray-600 group-hover:text-gray-800 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-sm truncate">{user.email}</span>
          </div>
          
          {user.company && (
            <div className="flex items-center text-gray-600 group-hover:text-gray-800 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-sm font-medium truncate">{user.company.name}</span>
            </div>
          )}
        </div>
      </div>

      {/* Arrow Indicator */}
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}
