import { User, Post } from '../types';

const SIMULATED_DELAY_MIN = 400;
const SIMULATED_DELAY_MAX = 700;

/**
 * Simulates network delay
 */
const simulateDelay = (): Promise<void> => {
  const delay = Math.floor(Math.random() * (SIMULATED_DELAY_MAX - SIMULATED_DELAY_MIN + 1)) + SIMULATED_DELAY_MIN;
  return new Promise(resolve => setTimeout(resolve, delay));
};

/**
 * Fetch users from local JSON file with simulated delay
 */
export const fetchUsers = async (forceError = false): Promise<User[]> => {
  await simulateDelay();
  
  if (forceError) {
    throw new Error('Simulated error: Failed to fetch users');
  }
  
  const response = await fetch('/data/users.json');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  
  return response.json();
};

/**
 * Fetch posts from local JSON file with simulated delay
 */
export const fetchPosts = async (forceError = false): Promise<Post[]> => {
  await simulateDelay();
  
  if (forceError) {
    throw new Error('Simulated error: Failed to fetch posts');
  }
  
  const response = await fetch('/data/posts.json');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  
  return response.json();
};
