export interface Company {
  name: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  website?: string;
  company?: Company;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface FetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}
