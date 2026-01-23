import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const GuestRoute = () => {
    const user = useSelector((state) => state.auth?.userdata);
    const isAuthenticated = user && Object.keys(user).length > 0 && user.email;

    return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
};

export default GuestRoute;
