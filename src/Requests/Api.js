import axios from "axios";

const Api = axios.create({
    baseURL: 'http://localhost:3002/api/', // Ensure this is your API's base URL
    headers: {
        'Content-Type': 'application/json', // Fixed 'Content-type' to 'Content-Type'
    },
});

// Interceptors for requests
Api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Retrieve token from localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // Add token to Authorization header
        }
        return config;      
    },
    (error) => {
        return Promise.reject(error); // Handle request errors
    }
);

// Interceptors for responses
Api.interceptors.response.use(
    (response) => {
        if (response.data?.redirect) {
            localStorage.removeItem("token"); // Remove expired token
            window.location.href = "/login"; // Redirect to login
        }
        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem("token"); // Remove invalid token
            window.location.href = "/login"; // Redirect to login
        }
        return Promise.reject(error);
    }
);

const Api2 = axios.create({
    baseURL: 'http://localhost:3002', // Make sure this is the correct backend port
  });
export const googleAuth = (code) => Api2.get(`api/google?code=${code}`);
export default Api;
