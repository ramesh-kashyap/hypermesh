import React, { useEffect,useState } from "react";
import Api2, { googleAuth } from '../../Requests/Api';
import Api from '../../Requests/Api';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Route, Router,Routes, Link } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
        toast.error("Please enter both email and password");
        setLoading(false);
        return;
    }

    try {
        const response = await Api.post('auth/login', { email, password })
        if (response.data.status) 
          {
            toast.success("Login successful!");
            localStorage.setItem("token", response.data.token); // Save JWT token
            console.log("User Logged In:", response);
            // Navigate to a protected route (e.g., /dashboard)
            navigate('/dashboard');
          }
          else
          {
            toast.error(response.data.message || "Login failed");
          }

      

    } catch (error) {
        toast.error(error.message || "Login failed");
    } finally {
        setLoading(false);
    }
};

    // 🔹 Check for token on page load
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        console.log("✅ Token found, redirecting to Dashboard...");
        navigate("/dashboard"); // Redirect to Dashboard if token exists
      }
    }, [navigate]); // Runs only on component mount
  
  const responseGoogle = async (authResult)=>{
    try{
        console.log(authResult);
        if(authResult['code']){
            const result = await googleAuth(authResult['code']); 
            // console.log(result.data);
            // Extract user information from the result (assuming the backend returns this)
            const { name, email, picture } = result.data.user;

            // Log the user information
            console.log(`User's Name: ${name}`);
            console.log(`User's Email: ${email}`);
            console.log(`User's Profile Image: ${picture}`);

            localStorage.setItem('token', result.data.token);

            // Redirect to dashboard
            navigate('/');
       
        }else {
            // If there's no authorization code, handle the error
            console.error('Authorization code not received');
        }
    }catch(err){
        console.error('Error while requesting google code:', err);
    }
}

    const googleLogin = useGoogleLogin({
        onSuccess: responseGoogle,
        onError: responseGoogle,
        flow: 'auth-code',
      });

      const handleLoginSuccess = async(credentialResponse) => {
        // credentialResponse contains the credential/token information
        console.log('Login Success:', credentialResponse);
        // You might want to send the credentialResponse.credential to your backend for verification

        try {
          // Send the Google credential to your backend
          const response = await axios.post('http://localhost:3002/api/auth/google', {
            token: credentialResponse.credential,
          });
           console.log('reaponse',response);
          // Assuming the backend returns a JSON object with a property `jwtToken`
          const { jwtToken } = response.data;
          console.log('check',jwtToken);
          if (jwtToken) {
            // Save JWT to local storage
            localStorage.setItem('token', jwtToken);
            // Navigate to a protected route (e.g., /dashboard)
            navigate('/dashboard');
          } else {
            console.error('JWT token not found in the response');
          }
        } catch (error) {
          console.error('Error during token generation:', error);
        }

      };


  return (
    <><Toaster position="top-center" />
    <div className="min-h-screen flex flex-col items-center justify-center pt-[100px] bg-gray-50 p-6">
      <div className="absolute top-6 flex justify-between w-full px-6">
        <img
          alt="MeshNode Logo"
          loading="lazy" style={{ width: '139px' }}
          className="hidden sm:flex"
          src="/upnl/assets/icons/logo.png" />
        <img
          alt="Logo"
          loading="lazy" style={{ width: '139px' }}
          className="flex sm:hidden"
          src="/upnl/assets/icons/logo.png" />
        <div className="flex">
        <Link to="/login">
          <button className="w-[80px] md:w-[100px] mr-2 md:mr-4 py-2 px-2 md:px-4 bg-green-500 text-white rounded-[30px] shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
            Log In
          </button>
          </Link>
          <Link to="/register">
          <button className="w-[100px] py-2 px-2 md:px-4 bg-[#171717] text-white rounded-[30px] shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500" style={{color:"#fff"}}>
            Sign Up
          </button>
          </Link>
        </div>
      </div>
      <div className="bg-white max-w-[385px] rounded-[20px] py-6 px-6 md:px-8 w-full shadow-lg">
        <h2 className="text-[28px] font-semibold text-gray-800 text-center mb-2">
          Log In
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Welcome back! Log in to stay updated with all your nodes and rewards.
        </p>
        <form onSubmit={handleLogin}> {/* Prevent default form submission */}
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Email ID
            </label>
            <div className="relative">
              <input type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-[12px] shadow-sm focus:outline-none focus:ring focus:ring-green-500" />
            </div>
          </div>

          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-[12px] shadow-sm focus:outline-none focus:ring focus:ring-green-500" />
            </div>
          </div>
          <div className="flex items-center justify-end">
            <a className="text-sm text-gray-500 hover:text-gray-600" href="/forgot-password">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full h-[46px] py-2 px-4 bg-green-500 font-medium text-white rounded-[30px] shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 mt-4"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        {/* Google Login Button */}
        <div className="mt-6 text-center">
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={responseGoogle}
            flow="auth-code" />
        </div>

        <div className="mt-6 text-center">
          <span className="text-sm text-gray-600">
            Don't have an account?
            <a className="text-gray-800 underline font-semibold" href="/register">
              Sign Up
            </a>
          </span>
        </div>
      </div>
    </div></>
  );
};

export default Login;
