import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};