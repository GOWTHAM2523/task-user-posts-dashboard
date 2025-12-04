import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataProvider, useData } from './context/DataContext';
import { UsersPage } from './pages/UsersPage';
import { UserDetailPage } from './pages/UserDetailPage';

function NotificationToast() {
  const { notification } = useData();

  if (!notification) return null;

  return (
    <div className="notification-toast">
      <div className="glass-effect px-6 py-4 rounded-xl shadow-2xl border border-white/20">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mr-3">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-gray-800 font-semibold">{notification}</span>
        </div>
      </div>
    </div>
  );
}

function AppContent() {
  return (
    <>
      <NotificationToast />
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/user/:id" element={<UserDetailPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
