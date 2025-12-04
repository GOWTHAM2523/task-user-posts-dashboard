import { useEffect, useRef, useState } from 'react';

interface UseInfiniteScrollOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Custom hook for infinite scroll using IntersectionObserver
 * Watches a sentinel element and triggers callback when visible
 */
export function useInfiniteScroll(
  callback: () => void,
  options: UseInfiniteScrollOptions = {}
) {
  const { threshold = 1.0, rootMargin = '0px' } = options;
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
        
        if (entry.isIntersecting) {
          callback();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, [callback, threshold, rootMargin]);

  return { sentinelRef, isIntersecting };
}
