import { Routes, Route } from 'react-router-dom'
import Main from './pages/main'
import { Category } from './pages/category'
import { Favorites } from './pages/favorites'
import { NotFound } from './pages/not-found'
import { LogIn } from './pages/login'
import { Registration } from './pages/register'
import { ProtectedRoute } from './components/ProtectedRoute'

export const AppRoutes = ({ user }) => {
  return (
    <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route path="/register" element={<Registration />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
      <Route path="/" element={<Main />} />
      <Route path="/category/:id" element={<Category />} />
      <Route path="/favorites" element={<Favorites />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
