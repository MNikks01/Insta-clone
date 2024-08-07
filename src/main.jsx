import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import Authentication from './pages/Authentication'
import ExplorePage from './pages/ExplorePage'
import ReelsPage from './pages/ReelsPage'
import MessagesPage from './pages/MessagesPage'
import ProfilePage from './pages/ProfilePage'
import NotoficationsPage from './pages/NotoficationsPage'
import CreatePage from './pages/CreatePage'
import ThreadsPage from './pages/ThreadsPage'
import ErrorPage from './pages/ErrorPage.jsx'
import FriendsProfilePage from './pages/FriendsProfilePage.jsx'

const routes = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/home', element: <HomePage /> },
  { path: '/search', element: <SearchPage /> },
  { path: '/login', element: <Authentication /> },
  { path: '/explore', element: <ExplorePage /> },
  { path: '/reels', element: <ReelsPage /> },
  { path: '/messages', element: <MessagesPage /> },
  { path: '/profile', element: <ProfilePage /> },
  { path: '/notifications', element: <NotoficationsPage /> },
  { path: '/create', element: <CreatePage /> },
  { path: '/threads', element: <ThreadsPage /> },
  { path: '/friend/:userId', element: <FriendsProfilePage /> },
  { path: '*', element: <ErrorPage /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)