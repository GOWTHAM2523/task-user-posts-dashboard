# 🚀 React TypeScript User Posts Dashboard

A **production-ready**, modern React application built with TypeScript, Vite, and TailwindCSS that displays users and their posts with full CRUD operations, infinite scroll pagination, and a stunning glassmorphism UI.

![Dashboard Preview](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

---

## ✨ Features

### 🎯 Core Features
- ✅ **Users List Page** (`/`) - Display all users with name, email, and company information
- ✅ **User Detail Page** (`/user/:id`) - View comprehensive user profile and their posts
- ✅ **Infinite Scroll Pagination** - Automatically load posts in batches of 5 as you scroll
- ✅ **CRUD Operations** - Create, Read, Update, Delete posts (stored in local state)
- ✅ **Simulated Network Delay** - Realistic loading states with 400-700ms delay
- ✅ **Error Handling** - Comprehensive error states with retry functionality
- ✅ **Responsive Design** - Mobile-first, works perfectly on all screen sizes

### 🎨 Bonus Features
- ✨ **Real-time Search** - Filter posts by title with instant results
- ✨ **Context API** - Global state management for users and posts
- ✨ **Toast Notifications** - Beautiful success messages for all operations
- ✨ **Accessibility** - Full keyboard navigation and ARIA labels
- ✨ **TypeScript** - 100% type-safe with no `any` types
- ✨ **Glass Morphism UI** - Modern, professional design with smooth animations
- ✨ **Dark Theme** - Eye-friendly dark background with gradient overlays

---

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.2 | UI Framework |
| **TypeScript** | 5.2 | Type Safety |
| **Vite** | 5.1 | Build Tool & Dev Server |
| **React Router** | 6.22 | Client-side Routing |
| **TailwindCSS** | 3.4 | Utility-first CSS |
| **Context API** | Built-in | State Management |
| **Custom Hooks** | - | Reusable Logic |

---

## 📁 Project Structure

```
c:\project
├── public/
│   ├── data/
│   │   ├── users.json          # Sample user data (5 users)
│   │   └── posts.json          # Sample post data (24 posts)
│   ├── favicon.png             # App favicon (user + document icon)
│   ├── vite.svg                # SVG icon
│   └── site.webmanifest        # PWA manifest
│
├── src/
│   ├── components/
│   │   ├── BackButton.tsx      # Navigation back to users list
│   │   ├── Error.tsx           # Error state with retry button
│   │   ├── Loading.tsx         # Animated loading spinner
│   │   ├── PostCard.tsx        # Individual post display with actions
│   │   ├── PostEditor.tsx      # Modal for add/edit post
│   │   ├── UserCard.tsx        # User card on list page
│   │   └── UserInfo.tsx        # User profile header on detail page
│   │
│   ├── context/
│   │   └── DataContext.tsx     # Global state (users, posts, CRUD methods)
│   │
│   ├── hooks/
│   │   ├── useFetchWithDelay.ts    # Fetch data with simulated delay
│   │   └── useInfiniteScroll.ts    # IntersectionObserver for pagination
│   │
│   ├── pages/
│   │   ├── UsersPage.tsx       # Users list page (/)
│   │   └── UserDetailPage.tsx  # User detail page (/user/:id)
│   │
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces (User, Post, etc.)
│   │
│   ├── utils/
│   │   └── api.ts              # API helpers (fetchUsers, fetchPosts)
│   │
│   ├── App.tsx                 # Main app with routing
│   ├── main.tsx                # App entry point
│   └── index.css               # Global styles + Tailwind + animations
│
├── index.html                  # HTML template with meta tags
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── tsconfig.node.json          # TypeScript config for Node
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.ts              # Vite build configuration
├── .eslintrc.cjs               # ESLint rules
└── README.md                   # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.x or higher
- **npm** 9.x or higher

### Installation

1. **Clone or download the project**
   ```bash
   cd c:\project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Scripts

```bash
# Development
npm run dev              # Start dev server (localhost:5173)

# Production
npm run build            # Build for production (dist/)
npm run preview          # Preview production build

# Linting
npm run lint             # Check code quality with ESLint
```

---

## 🎮 How It Works

### 1️⃣ Data Loading
- JSON files are stored in `public/data`
- Fetched using `fetch()` API on component mount
- Simulated network delay (400-700ms) for realistic UX
- Loaded data stored in Context API for global access

### 2️⃣ Users List Page (`/`)

**📍 Route:** `/`  
**📄 Component:** `UsersPage.tsx`

**🔄 Flow:**
1. Fetch users from `/data/users.json`
2. Show loading spinner during fetch
3. Display users as cards in grid layout
4. Click any user → Navigate to `/user/:id`

**Features:**
- Responsive grid (1-4 columns based on screen size)
- Animated card entrance with stagger effect
- Hover effects with scale and shadow
- Online status badge
- Click or keyboard navigation

### 3️⃣ User Detail Page (`/user/:id`)

**📍 Route:** `/user/:id`  
**📄 Component:** `UserDetailPage.tsx`

**🔄 Flow:**
1. Extract user ID from URL params
2. Fetch all posts from `/data/posts.json`
3. Filter posts by `userId`
4. Display user info + paginated posts
5. Enable search, add, edit, delete operations

**Features:**
- **User Profile Card:** Shows name, email, phone, website, company
- **Search Bar:** Real-time filtering by post title
- **Post Count:** Dynamic count of filtered posts
- **Infinite Scroll:**
  - Initially shows 5 posts
  - Loads 5 more when scrolling to bottom
  - Uses IntersectionObserver API
  - Fallback "Load More" button
- **CRUD Operations:**
  - ➕ Add: Opens modal, creates post with new ID
  - ✏️ Edit: Opens modal with existing data, updates in-place
  - 🗑️ Delete: Confirms, then removes from state
- **State Management:** All changes are local (not persisted to files)

### 4️⃣ Post Operations (CRUD)

**Create:**
```
Click "Create New Post" button
→ Opens PostEditor modal
→ Enter title and body
→ Click "Create Post"
→ New post added with ID = max(existingIds) + 1
→ Toast notification shown
→ Modal closes
```

**Update:**
```
Click edit icon on post card
→ Opens PostEditor modal with existing data
→ Modify title and/or body
→ Click "Save Changes"
→ Post updated in state
→ Toast notification shown
→ Modal closes
```

**Delete:**
```
Click delete icon on post card
→ Confirmation dialog appears
→ Click "OK"
→ Post removed from state
→ Toast notification shown
→ UI updates instantly
```

### 5️⃣ Infinite Scroll Implementation

**Technical Details:**
1. Set page size = 5 posts
2. Display `posts.slice(0, currentPage * 5)`
3. Add invisible sentinel div at list bottom
4. Use IntersectionObserver to watch sentinel
5. When sentinel visible → increment currentPage
6. Re-render with more posts
7. Repeat until all posts loaded

**User Experience:**
- Smooth, automatic loading as you scroll
- Loading spinner appears while "fetching" next page
- "Load More" button as backup
- "All posts loaded" message when done

### 6️⃣ State Management (Context API)

```typescript
// DataContext provides:
interface DataContextType {
  users: User[]                    // All users
  posts: Post[]                    // All posts
  setUsers: (users) => void        // Load users
  setPosts: (posts) => void        // Load posts
  getUserById: (id) => User        // Get single user
  getPostsByUserId: (id) => Post[] // Filter posts by user
  addPost: (post) => void          // Create post (local)
  editPost: (post) => void         // Update post (local)
  deletePost: (id) => void         // Delete post (local)
  showNotification: (msg) => void  // Show toast
  notification: string | null      // Current notification
}
```

**Implementation:**
- Wraps entire app in `<DataProvider>`
- Uses React `useState` for data storage
- Uses `useContext` hook to access in components
- Provides CRUD methods for posts
- Manages notification state for toasts

### 7️⃣ Custom Hooks

**`useFetchWithDelay`**
```typescript
// Purpose: Simulates API call with network delay
const { data, loading, error, refetch } = useFetchWithDelay(fetchUsers);

// Parameters:
// - fetchFn: Async function to fetch data
// - options: { forceError?: boolean }

// Returns:
// - data: Fetched data (null while loading)
// - loading: Boolean loading state
// - error: Error message (null if success)
// - refetch: Function to retry fetch

// Implementation:
// - Wraps fetch function in useEffect
// - Adds setTimeout for 400-700ms random delay
// - Manages loading/error states with useState
// - Supports error simulation for testing
```

**`useInfiniteScroll`**
```typescript
// Purpose: Detects when user scrolls to bottom
const { sentinelRef, isIntersecting } = useInfiniteScroll(loadMore);

// Parameters:
// - callback: Function to call when sentinel visible
// - options: { threshold, rootMargin }

// Returns:
// - sentinelRef: Ref to attach to sentinel div
// - isIntersecting: Boolean if sentinel is visible

// Implementation:
// - Uses IntersectionObserver API
// - Watches sentinel element at list bottom
// - Calls callback when threshold reached
// - Cleans up observer on unmount
```

### 8️⃣ Routing (React Router v6)

```typescript
// React Router v6 setup:
/                  → UsersPage (list all users)
/user/:id         → UserDetailPage (show user + posts)

// Navigation:
// - Click user card → navigate('/user/:id')
// - Click back button → navigate('/')
// - Browser back/forward → works correctly
// - Direct URL access → works (e.g., /user/3)
```

---

## 🎨 UI/UX Highlights

### Design System
- **Colors:** Purple/Blue gradient theme (#667eea → #764ba2)
- **Typography:** Inter font family (400-900 weights)
- **Spacing:** Consistent 4px/8px/16px/24px grid
- **Border Radius:** 12px-32px for modern look
- **Shadows:** Layered shadows for depth perception

### Animations
- ✨ Fade-in-up on page load
- 🎭 Staggered entrance for cards (0.1s delay each)
- 🎪 Hover scale effects (1.02-1.05x)
- 🌊 Smooth transitions (300-500ms cubic-bezier)
- 🎨 Gradient shimmer on buttons
- 🎯 Floating orb backgrounds (3s ease-in-out)

### Glass Morphism
```css
.glass-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
```

---

## 🧪 Testing the App

### Test Scenarios

**Load Users**
- ✅ Visit `/` → See 5 users
- ✅ Loading spinner appears first
- ✅ Cards animate in with stagger

**View User Details**
- ✅ Click any user → Navigate to `/user/:id`
- ✅ See user info (email, phone, website, company)
- ✅ See user's posts (initially 5)

**Search Posts**
- ✅ Type in search bar
- ✅ Posts filter instantly
- ✅ Post count updates
- ✅ Pagination resets to page 1

**Infinite Scroll**
- ✅ Scroll to bottom of posts
- ✅ Loading spinner appears
- ✅ 5 more posts load automatically
- ✅ Repeat until all posts shown
- ✅ "All posts loaded" message appears

**Create Post**
- ✅ Click "Create New Post"
- ✅ Modal opens with empty form
- ✅ Fill title and body
- ✅ Click "Create Post"
- ✅ Toast shows "Post created successfully!"
- ✅ New post appears at bottom of list
- ✅ Modal closes

**Edit Post**
- ✅ Click edit icon on any post
- ✅ Modal opens with existing data
- ✅ Change title or body
- ✅ Click "Save Changes"
- ✅ Toast shows "Post updated successfully!"
- ✅ Post updates in place
- ✅ Modal closes

**Delete Post**
- ✅ Click delete icon on any post
- ✅ Confirmation dialog appears
- ✅ Click "OK"
- ✅ Toast shows "Post deleted successfully!"
- ✅ Post disappears from list
- ✅ Post count updates

**Error Handling**
- ✅ Simulate error (modify fetch URL)
- ✅ Error message displays
- ✅ "Try Again" button appears
- ✅ Click retry → Refetches data

**Back Navigation**
- ✅ Click "Back to Users" button
- ✅ Returns to users list
- ✅ State preserved (no refetch)

**Responsive Design**
- ✅ Test on mobile (320px+)
- ✅ Test on tablet (768px+)
- ✅ Test on desktop (1024px+)
- ✅ All features work on all sizes

---

## 🔧 Configuration

### Vite Configuration
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  publicDir: 'public' // Serves /data folder as static assets
})
```

### TypeScript Configuration
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "strict": true,
    "jsx": "react-jsx",
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

### Data Format

**User:**
```json
{
  "id": 1,
  "name": "Leanne Graham",
  "email": "Sincere@april.biz",
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona"
  }
}
```

**Post:**
```json
{
  "userId": 1,
  "id": 1,
  "title": "First Post from Leanne",
  "body": "This is the body of the first post..."
}
```

---

## 🚫 Limitations

⚠️ **No Persistence:** Changes are not saved to JSON files  
⚠️ **Local State Only:** Refresh page resets all changes  
⚠️ **No Backend:** This is a frontend-only demo  
⚠️ **Simulated API:** Delays are artificial (setTimeout)  
⚠️ **No Authentication:** No user login/logout

---

## 🎯 Key Learnings

This project demonstrates:

✅ React 18 functional components and hooks  
✅ TypeScript strict mode and type safety  
✅ Context API for state management  
✅ Custom hooks for reusable logic  
✅ IntersectionObserver for infinite scroll  
✅ React Router v6 for navigation  
✅ TailwindCSS utility-first styling  
✅ Responsive design principles  
✅ Accessibility best practices (ARIA, keyboard)  
✅ Modern UI/UX patterns (glassmorphism, animations)

---

## 🐛 Troubleshooting

**Issue:** Data not loading  
**Solution:** Ensure `/data` folder is in `public` directory

**Issue:** Favicon not showing  
**Solution:** Clear browser cache (Ctrl+F5) or hard reload

**Issue:** TypeScript errors  
**Solution:** Run `npm install` and restart dev server

**Issue:** Styles not applying  
**Solution:** Restart dev server, check Tailwind config

**Issue:** Infinite scroll not working  
**Solution:** Check browser console, ensure IntersectionObserver is supported

---

## 🤝 Contributing

This is a demo project for learning purposes. Feel free to:

- Fork and modify
- Use as portfolio project
- Learn from the code structure
- Share with others

---

## 📄 License

MIT License - Feel free to use this project for learning and portfolio purposes.

---

## 👨‍💻 Author

Built with ❤️ using React, TypeScript, and modern web technologies.

**Project Goal:** Demonstrate modern React development practices and create a production-ready dashboard application suitable for job interviews and portfolio showcases.

---

## 🌟 Features Checklist

- ✅ Users list page with cards
- ✅ User detail page with profile
- ✅ Posts display with pagination
- ✅ Infinite scroll (IntersectionObserver)
- ✅ Create post functionality
- ✅ Edit post functionality
- ✅ Delete post functionality
- ✅ Search posts by title
- ✅ Loading states with spinners
- ✅ Error states with retry
- ✅ Toast notifications
- ✅ Context API state management
- ✅ Custom hooks (fetch, scroll)
- ✅ React Router navigation
- ✅ TypeScript strict mode
- ✅ Responsive design
- ✅ Accessibility (ARIA, keyboard)
- ✅ Glass morphism UI
- ✅ Dark theme with gradients
- ✅ Smooth animations
- ✅ Professional design

---

## 🎓 Perfect for

✅ Learning React + TypeScript  
✅ Portfolio projects  
✅ Interview preparation  
✅ Code reference  
✅ UI/UX study  
✅ Frontend job applications

---

## 📞 Support

If you have questions or need help:

- Check the code comments in each file
- Review the TypeScript types in `src/types/index.ts`
- Inspect the console for error messages
- Test with different browsers

---

⭐ **Ready to explore?** Run `npm run dev` and visit `http://localhost:5173` 🚀