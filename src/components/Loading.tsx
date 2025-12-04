export function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] py-12">
      <div className="relative w-20 h-20 mb-6">
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-purple-200"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-600 animate-spin"></div>
        
        {/* Middle Ring */}
        <div className="absolute inset-2 rounded-full border-4 border-blue-200"></div>
        <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-blue-600 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
        
        {/* Inner Dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 animate-pulse"></div>
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-gray-700 font-bold text-lg mb-2">Loading</p>
        <div className="flex gap-1 justify-center">
          <div className="w-2 h-2 rounded-full bg-purple-600 animate-bounce"></div>
          <div className="w-2 h-2 rounded-full bg-purple-600 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 rounded-full bg-purple-600 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
}
