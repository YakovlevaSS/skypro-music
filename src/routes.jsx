/* eslint-disable import/no-extraneous-dependencies */
import { Routes, Route } from 'react-router-dom'
import Main from './pages/main'
import Category from './pages/category'
import Favorites from './pages/favorites'
import NotFound from './pages/not-found'
// import LogIn from './pages/login'
// import Registration from './pages/register'
import ProtectedRoute from './components/ProtectedRoute'
import AuthPage from './pages/Auth/AuthPage'

function AppRoutes({ isLoginMode, setUser, user }) {
  return (
    <Routes>
      {/* <Route path="/login" element={<LogIn onAuthButtonClick = {onAuthButtonClick}/>} />
      <Route path="/register" element={<Registration />} /> */}
      <Route
        path="/Auth"
        element={<AuthPage isLoginMode={isLoginMode} setUser={setUser} />}
      />

      <Route element={<ProtectedRoute isAllowed={user} />}>
        <Route path="/" element={<Main/>} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
