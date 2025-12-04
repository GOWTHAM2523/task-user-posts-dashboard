import { useEffect } from 'react';
import { UserCard } from '../components/UserCard';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import { useData } from '../context/DataContext';
import { useFetchWithDelay } from '../hooks/useFetchWithDelay';
import { fetchUsers } from '../utils/api';

export function UsersPage() {
  const { users, setUsers } = useData();
  const { data, loading, error, refetch } = useFetchWithDelay(fetchUsers);

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data, setUsers]);

  return (
    <div className="min-h-screen py-8 md:py-16 relative">
      {/* Floating Orbs Background */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative glass-card px-8 py-4 rounded-full">
                <span className="text-sm font-bold gradient-text uppercase tracking-wider">User Management Platform</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="text-white drop-shadow-2xl">Discover Our</span>
            <br />
            <span className="gradient-text drop-shadow-lg">Community</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Connect with talented professionals and explore their amazing contributions
          </p>

          {/* Stats Bar */}
          {!loading && !error && (
            <div className="flex justify-center gap-8 mt-12 animate-fadeInScale" style={{ animationDelay: '0.2s' }}>
              <div className="glass-card px-8 py-4 rounded-2xl">
                <div className="text-3xl font-bold gradient-text">{users.length}</div>
                <div className="text-sm text-gray-600 font-medium mt-1">Active Users</div>
              </div>
              <div className="glass-card px-8 py-4 rounded-2xl">
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="text-sm text-gray-600 font-medium mt-1">Engagement</div>
              </div>
            </div>
          )}
        </div>

        {loading ? (
          <div className="glass-card rounded-3xl p-12 shadow-2xl max-w-md mx-auto">
            <Loading />
          </div>
        ) : error ? (
          <div className="max-w-md mx-auto">
            <Error message={error} onRetry={refetch} />
          </div>
        ) : users.length === 0 ? (
          <div className="glass-card rounded-3xl p-16 text-center shadow-2xl max-w-md mx-auto">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center animate-float">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No Users Found</h3>
            <p className="text-gray-600">Start by adding some users to your platform</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {users.map((user, index) => (
              <div 
                key={user.id} 
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              >
                <UserCard user={user} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
