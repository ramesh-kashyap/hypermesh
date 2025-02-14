import { jwtDecode } from 'jwt-decode';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Login from '../src/pages/auth/login';
import Dashboard from '../src/pages/auth/login';
import Register from '../src/pages/auth/register';
 export const GoogleAuthWrapper =()=>{
    return(
    <GoogleOAuthProvider clientId='705111046549-lbh4610l0ddu7opemk0ck1mpccertsa3.apps.googleusercontent.com'>
   <Login/>
  </GoogleOAuthProvider>
  )
  }
  export const GoogleAuthWrapperRegister = () => {
    return (
        <GoogleOAuthProvider clientId='705111046549-lbh4610l0ddu7opemk0ck1mpccertsa3.apps.googleusercontent.com'>
            <Register />
        </GoogleOAuthProvider>
    );
};
export const HandleGoBack = () => {
    const navigate = useNavigate();

    return () => {
        navigate(-1); // This takes the user back to the previous page
    };
};
 export const isAuthenticated = () => {
    const token = localStorage.getItem('authToken');
    if (!token) return false;

    try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        return decoded.exp > currentTime; // Token is valid if not expired
    } catch (err) {
        return false; // Invalid token
    }
};

// Protected Route Component
export const ProtectedRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
};

export const ProtecRegRoute = ({ children }) => {
    // Check if the user has completed registration (via localStorage or sessionStorage)
    const isRegistered = localStorage.getItem('isRegistered');
    const currentPath = window.location.pathname;
    const allowedPaths = ['/forgot', '/register'];
    const isOnAllowedPath = allowedPaths.includes(currentPath);
  
    // Redirect to /register if user is not registered and not on allowed paths
    if (!isRegistered && !isOnAllowedPath) {
      return <Navigate to="/register" replace />;
    }
  };
// Public Route Component
export const PublicRoute = ({ children }) => {
    return isAuthenticated() ? <Navigate to="/" /> : children;
};