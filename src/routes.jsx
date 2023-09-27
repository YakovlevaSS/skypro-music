import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import { Category } from "./pages/category";
import { Favorites } from "./pages/favorites";
import LogIn from "./pages/login";
import Registration from "./pages/register";
import { NotFound } from "./pages/not-found";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/category" element={<Category />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/register" element={<Registration />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};