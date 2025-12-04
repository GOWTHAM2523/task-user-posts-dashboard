import { User } from '../types';

interface UserInfoProps {
  user: User;
}

export function UserInfo({ user }: UserInfoProps) {
  const initial = user.name.charAt(0).toUpperCase();

  return (
    <div className="glass-card rounded-3xl p-8 md:p-10 mb-8 shadow-2xl animate-fadeInScale overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8 pb-8 border-b border-gray-200">
          <div className="relative">
            <div className="w-28 h-28 rounded-3xl gradient-primary flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
              {initial}
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white shadow-lg badge-pulse"></div>
          </div>
          
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 mb-3">
              <span className="text-sm font-bold gradient-text">VERIFIED MEMBER</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-2 leading-tight">{user.name}</h2>
            <p className="text-gray-500 text-lg">Professional Profile</p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 via-purple-50 to-blue-50 p-6 border border-purple-100 hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Email Address</p>
                  <p className="text-xl font-bold text-gray-900 mt-1">{user.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          {user.phone && (
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-blue-50 to-cyan-50 p-6 border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 rounded-2xl gradient-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Phone Number</p>
                    <p className="text-xl font-bold text-gray-900 mt-1">{user.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Website Card */}
          {user.website && (
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-6 border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition-colors"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Website</p>
                    <a 
                      href={`https://${user.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-blue-600 hover:text-blue-700 mt-1 inline-flex items-center gap-2 hover:underline"
                    >
                      {user.website}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Company Card */}
          {user.company && (
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-6 border border-orange-100 hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-colors"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Company</p>
                    <p className="text-xl font-bold text-gray-900 mt-1">{user.company.name}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
