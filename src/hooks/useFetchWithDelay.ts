import { useState, useEffect } from 'react';
import { FetchResult } from '../types';

interface UseFetchOptions {
  forceError?: boolean;
}

/**
 * Custom hook to fetch data with simulated network delay
 * Supports error simulation for testing
 */
export function useFetchWithDelay<T>(
  fetchFn: (forceError?: boolean) => Promise<T>,
  options: UseFetchOptions = {}
): FetchResult<T> & { refetch: () => void } {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refetchTrigger, setRefetchTrigger] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const result = await fetchFn(options.forceError);
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [refetchTrigger, options.forceError]);

  const refetch = () => setRefetchTrigger(prev => prev + 1);

  return { data, loading, error, refetch };
}
