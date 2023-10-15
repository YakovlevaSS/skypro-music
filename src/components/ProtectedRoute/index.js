/* eslint-disable import/no-extraneous-dependencies */
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from 'react'
import UserContext from "../../Context/UserContext";

function ProtectedRoute ({ redirectPath = "/Auth"}) {
  const { user } = useContext(UserContext)
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />
};

export default ProtectedRoute