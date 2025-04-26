import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

import Dashboard from "./pages/home/Dashboard";
import NodeDetails from "./pages/home/NodeDetails";
import RechargeFunds from "./pages/invest/RechargeFunds";
import WithdrawReq from "./pages/Withdraw/WithdrawReq";
import History from "./pages/Withdraw/History";
import Trade from "./pages/team/Trade";
import Assets from "./pages/Withdraw/Assets";
import Server from "./pages/profile/Server";
import Team from "./pages/team/Team";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Footer from "./components/Footer";
import TradingChart from "./pages/home/TradingChart";
import Smartrade from "./pages/home/Smartrade";
import { AuthProvider } from "./components/AuthContext";
import { ProtectedRoute, PublicRoute } from './Helper/helper';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const location = useLocation();
    const authRoutes = ["/","/login", "/register"];
    const hideOnNested = location.pathname.includes("/dashboard/TradingChart");
    <Route path="/dashboard/TradingChart/:symbol" element={<TradingChart />} />

    const hideFooter = authRoutes.includes(location.pathname) || hideOnNested;
    return (
        <AuthProvider>

            <div class="uni-body pages-index-index">
                <uni-app class="uni-app--showtabbar uni-app--maxwidth">
                    <div class="ellipse" style={{ height: 60 }}></div>

                    <Routes>
                        {/* Public Routes */}
                        <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />
                        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />

                        {/* Protected Routes */}
                        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                        {/* </Route> */}
                        <Route path="/trade" element={<ProtectedRoute><Trade /></ProtectedRoute>} />
                        <Route path="/assets" element={<ProtectedRoute><Assets /></ProtectedRoute>} />
                        <Route path="/server" element={<ProtectedRoute><Server /></ProtectedRoute>} />
                        <Route path="/Team" element={<ProtectedRoute><Team /></ProtectedRoute>} />
                        <Route path="/NodeDetails" element={<ProtectedRoute><NodeDetails /></ProtectedRoute>} />
                        <Route path="/WithdrawReq" element={<ProtectedRoute><WithdrawReq /></ProtectedRoute>} />
                        <Route path="/History" element={<ProtectedRoute><History /></ProtectedRoute>} />
                        <Route path="/Smartrade" element={<Smartrade />} />
                        <Route path="/RechargeFunds" element={<ProtectedRoute><RechargeFunds /></ProtectedRoute>} />

                        {/* Redirect */}
                        
                        {/* <Route element={<ProtectedRoute><Footer /></ProtectedRoute>} /> */}
                        <Route path="/dashboard/TradingChart/:symbol" element={<TradingChart />} />
                        
                    </Routes>
                    {!hideFooter && <Footer />}                   
                </uni-app>
                <ToastContainer />
            </div>

        </AuthProvider>
    );
} export default App;
