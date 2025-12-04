import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataProvider, useData } from './context/DataContext';
import { UsersPage } from './pages/UsersPage';
import { UserDetailPage } from './pages/UserDetailPage';

function NotificationToast() {
  const { notification } = useData();

  if (!notification) return null;

  return (
    <div className="toast-notification">
      <div className="glass-card px-8 py-5 rounded-2xl shadow-2xl border-l-4 border-green-500">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-gray-800 font-bold text-lg">{notification}</span>
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
