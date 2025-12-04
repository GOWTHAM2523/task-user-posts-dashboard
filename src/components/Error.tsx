interface ErrorProps {
  message: string;
  onRetry?: () => void;
}

export function Error({ message, onRetry }: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] p-6 fade-in">
      <div className="glass-effect rounded-2xl p-8 max-w-md w-full shadow-xl border-2 border-red-100">
        <div className="flex flex-col items-center text-center">
          {/* Error Icon */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Oops!</h3>
          <p className="text-gray-600 mb-6">{message}</p>
          
          {onRetry && (
            <button
              onClick={onRetry}
              className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-600 hover:to-pink-600 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
