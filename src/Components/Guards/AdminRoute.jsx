import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = () => {
  const { userdata, token } = useSelector((state) => state.auth || {});
  console.log("userdata", userdata);

  const isAuthenticated = token && userdata;
  // Check against the specific admin role
  const isAdmin = userdata?.role === "admin";

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default AdminRoute;
