/* eslint-disable import/no-extraneous-dependencies */
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute ({ redirectPath = "/Auth", isAllowed }) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />
};

export default ProtectedRoute