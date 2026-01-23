import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
    const user = useSelector((state) => state.auth?.userdata);
    // Check if user object is not empty. API returns {} for empty state in reducer initially?
    // Reducer: userdata: {}
    // So we check if it has keys or specific ID. 
    // Let's assume if it has an email or id it's logged in.
    const isAuthenticated = user && Object.keys(user).length > 0 && user.email;

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
