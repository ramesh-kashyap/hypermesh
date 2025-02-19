import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Team from './pages/team/Team';
import Level from './pages/team/Level';
import Investment from './pages/invest/Investment';
import { Toaster } from "react-hot-toast";

import Node from './pages/team/Node';
import Profile from './pages/profile/Profile';
import Tpassword from './pages/profile/Tpassword';
import Email from './pages/profile/Email';
import SelectNetwork from './pages/Withdraw/SelectNetwork';
import WithdrawReq from './pages/Withdraw/WithdrawReq';
import Wallet from './pages/invest/Wallet';
import RechargeFunds from './pages/invest/RechargeFunds';
import Transferfund from './pages/invest/Transferfund';
import PublicRoute from './components/PublicRoute'; 
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/home/dashboard';
import Content from './pages/home/Content';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';


import NodeDetails from './pages/home/NodeDetails';
import ForgotPassword from "./pages/auth/ForgotPassword"; // Import Forgot Password Page
import ResetPassword from "./pages/auth/ResetPassword"; // Import Forgot Password Page



function Layout({ children }) {
    const location = useLocation();
    const hideLayout = location.pathname === "/login" || location.pathname === "/register"|| location.pathname === "/forgot-password";

    return (
        <div id="__next">
            <Toaster position="top-center" />
            <div className="w-full h-screen flex justify-center">
                <div className="w-full max-w-[1920px] flex bg-white shadow-lg">
                    {!hideLayout && <Sidebar />}
                    <div className="flex-1 flex flex-col text-black bg-[#F1F1F1] h-screen">
                        {!hideLayout && <Header />  }
                        {!hideLayout && <Footer />  }


                        <Routes>
                            
                            
                        <Route path="/" element={<Navigate to="/login" />} />
                        <Route path="/connect" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                        <Route path="/Node" element={<ProtectedRoute><Node /></ProtectedRoute>} />


                            <Route path="/nodedetails" element={<ProtectedRoute><NodeDetails /></ProtectedRoute>} />
                            <Route path="/Team" element={<ProtectedRoute><Team /></ProtectedRoute>} />
                            <Route path="/Level" element={<ProtectedRoute><Level /></ProtectedRoute>} />
                            <Route path="/Investment" element={<ProtectedRoute><Investment/></ProtectedRoute>} />

                            <Route path="/Wallet" element={<ProtectedRoute><Wallet /></ProtectedRoute>} />
                            <Route path="/Profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                            <Route path="/Tpassword" element={<ProtectedRoute><Tpassword /></ProtectedRoute>} />
                            <Route path="/Email" element={<ProtectedRoute><Email /></ProtectedRoute>} />
                            <Route path="/RechargeFunds" element={<ProtectedRoute><RechargeFunds/></ProtectedRoute>} />
                            <Route path="/SelectNetwork" element={<ProtectedRoute><SelectNetwork/></ProtectedRoute>} />
                            <Route path="/WithdrawReq" element={<ProtectedRoute><WithdrawReq/></ProtectedRoute>} />
                            <Route path="/Transferfund" element={<ProtectedRoute><Transferfund/></ProtectedRoute>} />
                            <Route path="/content" element={<ProtectedRoute><Content/></ProtectedRoute>} />


                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/forgot-password" element={<ForgotPassword />} />
                            <Route path="/reset-password/:token" element={<ResetPassword />} />

                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Layout />
        </Router>
    );
}

export default App;
