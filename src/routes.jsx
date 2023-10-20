/* eslint-disable import/no-extraneous-dependencies */
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import MainPage from './pages/main'
import Category from './pages/category'
import Favorites from './pages/favorites'
import NotFound from './pages/not-found'
import PageLayout from './pages/layout'
// import LogIn from './pages/login'
// import Registration from './pages/register'
import ProtectedRoute from './components/ProtectedRoute'
import AuthPage from './pages/Auth/AuthPage'

function AppRoutes({ isLoginMode, setIsLoginMode, setUser }) {
const [isLoaded, setIsLoaded] = useState(true)
  const [error, setError] = useState(null)
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <Routes>
      <Route
        path="/Auth"
        element={
          <AuthPage
            isLoginMode={isLoginMode}
            setIsLoginMode={setIsLoginMode}
            setUser={setUser}
          />
        }
      />

      <Route element={<ProtectedRoute />}>
        <Route
          path="/"
          element={
            <PageLayout
              setIsLoaded={setIsLoaded}
              setIsPlaying={setIsPlaying}
              setError={setError}
              isLoaded={isLoaded}
              isPlaying={isPlaying}
              error={error}
            />
          }
        >
          <Route
            path="/"
            element={
              <MainPage
                isLoaded={isLoaded}
                isPlaying={isPlaying}
                error={error}
              />
            }
          />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
