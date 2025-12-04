export function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px]">
      <div className="relative">
        {/* Outer Ring */}
        <div className="w-16 h-16 rounded-full border-4 border-purple-200 border-t-purple-600 animate-spin"></div>
        
        {/* Inner Ring */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-10 h-10 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin" style={{ animationDirection: 'reverse' }}></div>
        </div>
      </div>
      <p className="mt-4 text-gray-600 font-medium">Loading...</p>
    </div>
  );
}
