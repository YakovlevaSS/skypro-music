/* eslint-disable import/no-extraneous-dependencies */
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { useGetAllTracksQuery } from './services/player'
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
  const [isPlaying, setIsPlaying] = useState(true)
  const {isLoading } = useGetAllTracksQuery()


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
            isLoading ={isLoading }
              setIsPlaying={setIsPlaying}
              isPlaying={isPlaying}
            />
          }
        >
          <Route
            path="/"
            element={
              <MainPage
              isLoading ={isLoading }
                isPlaying={isPlaying}
              />
            }
          />
          <Route path="/category/:id" element={<Category />} />
          <Route
            path="/favorites"
            element={
              <Favorites
              isLoading ={isLoading }
                isPlaying={isPlaying}
              />
            }
          />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
