import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { User, Post } from '../types';

interface DataContextType {
  users: User[];
  posts: Post[];
  setUsers: (users: User[]) => void;
  setPosts: (posts: Post[]) => void;
  getUserById: (id: number) => User | undefined;
  getPostsByUserId: (userId: number) => Post[];
  addPost: (post: Omit<Post, 'id'>) => void;
  editPost: (post: Post) => void;
  deletePost: (postId: number) => void;
  notification: string | null;
  showNotification: (message: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  const getUserById = useCallback((id: number): User | undefined => {
    return users.find(user => user.id === id);
  }, [users]);

  const getPostsByUserId = useCallback((userId: number): Post[] => {
    return posts.filter(post => post.userId === userId);
  }, [posts]);

  const addPost = useCallback((post: Omit<Post, 'id'>) => {
    const newId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1;
    const newPost: Post = { ...post, id: newId };
    setPosts(prev => [...prev, newPost]);
  }, [posts]);

  const editPost = useCallback((updatedPost: Post) => {
    setPosts(prev => prev.map(post => 
      post.id === updatedPost.id ? updatedPost : post
    ));
  }, []);

  const deletePost = useCallback((postId: number) => {
    setPosts(prev => prev.filter(post => post.id !== postId));
  }, []);

  const showNotification = useCallback((message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  }, []);

  return (
    <DataContext.Provider value={{
      users,
      posts,
      setUsers,
      setPosts,
      getUserById,
      getPostsByUserId,
      addPost,
      editPost,
      deletePost,
      notification,
      showNotification
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within DataProvider');
  }
  return context;
}
