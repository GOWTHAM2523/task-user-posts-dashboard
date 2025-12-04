interface ErrorProps {
  message: string;
  onRetry?: () => void;
}

export function Error({ message, onRetry }: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] p-6 animate-fadeInScale">
      <div className="glass-card rounded-3xl p-10 max-w-md w-full shadow-2xl text-center">
        {/* Error Icon */}
        <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center shadow-2xl animate-float">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        <h3 className="text-3xl font-black text-gray-900 mb-3">Oops!</h3>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">{message}</p>
        
        {onRetry && (
          <button
            onClick={onRetry}
            className="w-full btn-primary px-8 py-4 text-lg"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}
