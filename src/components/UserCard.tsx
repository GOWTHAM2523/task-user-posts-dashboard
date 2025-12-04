import { User } from '../types';
import { useNavigate } from 'react-router-dom';

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  const navigate = useNavigate();
  const initial = user.name.charAt(0).toUpperCase();

  return (
    <div
      onClick={() => navigate(`/user/${user.id}`)}
      className="glass-card rounded-3xl p-6 card-elevated cursor-pointer group relative overflow-hidden"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          navigate(`/user/${user.id}`);
        }
      }}
      aria-label={`View details for ${user.name}`}
    >
      {/* Gradient Hover Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Avatar Section */}
        <div className="flex items-start justify-between mb-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center text-white text-3xl font-bold shadow-xl group-hover:scale-110 transition-transform duration-300">
              {initial}
            </div>
            {/* Online Badge */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-4 border-white badge-pulse"></div>
          </div>
          
          {/* Arrow Icon */}
          <div className="w-10 h-10 rounded-xl bg-gray-100 group-hover:gradient-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            <svg className="w-5 h-5 text-gray-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>

        {/* User Info */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-gray-900 group-hover:gradient-text transition-all duration-300 leading-tight">
            {user.name}
          </h3>
          
          {/* Email */}
          <div className="flex items-center gap-3 group/email">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center flex-shrink-0 group-hover/email:scale-110 transition-transform">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-sm text-gray-600 font-medium truncate">{user.email}</span>
          </div>
          
          {/* Company */}
          {user.company && (
            <div className="flex items-center gap-3 group/company">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0 group-hover/company:scale-110 transition-transform">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-sm text-gray-900 font-semibold truncate">{user.company.name}</span>
            </div>
          )}
        </div>

        {/* View Profile Button */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm font-semibold text-indigo-600 group-hover:text-indigo-700">
            <span>View Profile</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
