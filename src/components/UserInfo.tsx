import { User } from '../types';

interface UserInfoProps {
  user: User;
}

export function UserInfo({ user }: UserInfoProps) {
  return (
    <div className="glass-effect rounded-2xl p-8 mb-8 shadow-xl slide-up">
      {/* Header with Avatar */}
      <div className="flex items-center mb-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg mr-6">
          {user.name.charAt(0)}
        </div>
        <div>
          <h2 className="text-3xl font-bold gradient-text mb-1">{user.name}</h2>
          <p className="text-gray-500">User Profile</p>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4 border border-purple-100">
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-500">Email Address</p>
          </div>
          <p className="text-gray-900 font-semibold ml-13">{user.email}</p>
        </div>

        {user.phone && (
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-500">Phone Number</p>
            </div>
            <p className="text-gray-900 font-semibold ml-13">{user.phone}</p>
          </div>
        )}

        {user.website && (
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-4 border border-green-100">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-500">Website</p>
            </div>
            <a 
              href={`https://${user.website}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-semibold ml-13 hover:underline transition-colors"
            >
              {user.website}
            </a>
          </div>
        )}

        {user.company && (
          <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl p-4 border border-orange-100">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-500">Company</p>
            </div>
            <p className="text-gray-900 font-semibold ml-13">{user.company.name}</p>
          </div>
        )}
      </div>
    </div>
  );
}
