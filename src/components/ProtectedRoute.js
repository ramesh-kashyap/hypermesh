import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token"); // ✅ Check if a token exists

    // alert(token);

    // If the user is not authenticated, redirect to login page
    if (!token) {
        return <Navigate to="/login" />;
    }

    return children; // ✅ Allow access to the protected component
};

export default ProtectedRoute;
