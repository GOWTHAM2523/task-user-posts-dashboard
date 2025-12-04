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
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 fade-in">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            User Directory
          </h1>
          <p className="text-xl text-white/90 drop-shadow">
            Discover and connect with our community
          </p>
        </div>

        {loading ? (
          <div className="glass-effect rounded-2xl p-8 shadow-xl">
            <Loading />
          </div>
        ) : error ? (
          <Error message={error} onRetry={refetch} />
        ) : users.length === 0 ? (
          <div className="glass-effect rounded-2xl p-12 text-center shadow-xl">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <p className="text-gray-600 text-lg">No users found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user, index) => (
              <div
                key={user.id}
                className="fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
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
