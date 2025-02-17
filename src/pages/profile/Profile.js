import React, { useState, useEffect } from "react";
import Api from "../../Requests/Api";
import { Toaster, toast } from "react-hot-toast";
import { sendOtp, resetPassword } from "../../Requests/Api"; // Ensure the correct path
import { Toaster, toast } from "react-hot-toast";
import { sendOtp, resetPassword } from "../../Requests/Api"; // Ensure the correct path

const Profile = () => {
    const [isPasswordPopupOpen, setPasswordPopupOpen] = useState(false);
    const [isProfilePopupOpen, setProfilePopupOpen] = useState(false);
    const [isTrxPasswordPopupOpen, setTrxPasswordPopupOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [newName, setNewName] = useState(""); // ✅ New Name State
    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleTrxPasswordPopupToggle = () => {
        setTrxPasswordPopupOpen(!isTrxPasswordPopupOpen);
    };

    const handlePasswordPopupToggle = () => {
        setPasswordPopupOpen(!isPasswordPopupOpen);
    };

    const handleProfilePopupToggle = () => {
        setProfilePopupOpen(!isProfilePopupOpen);
    };

// Function to handle outside click and close popup
const handleOutsideClick = (event, setPopupState) => {
  if (event.target.id === "popup-overlay") {
    setPopupState(false);
  }
};

    const handleSendOtp = async () => {
        try {
            const response = await sendOtp(email);
    
            setMessage(response.message);
            setError("");
            toast.success("Send Otp Successfully");

        } catch (err) {
            console.error("Error in handleSendOtp:", err);
            setError(err.message);
            toast.error("Failed to Send OTP: " + err.message);

        }
    };
    

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            toast.error("Passwords do not match");  // 🔹 Show popup message
            return;
        }
        try {
            const response = await resetPassword(email, code, password);
            setMessage(response.message);
            setError("");
            toast.success("Password Updated Successfully");
        
        } catch (err) {
            setError(err.message);
            toast.error("Failed to update Pssword: " + err.message);

        }
    };

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await Api.get("auth/profile");
                if (response.data) {
                    setUser(response.data);
                    setNewName(response.data.name); 
                }
            } catch (error) {
                console.error("Error fetching user profile:", error);
            }
        };

        fetchUserProfile();
    }, []);

    const handleUpdateProfile = async () => {
        try {
            setLoading(true);
            const response = await Api.put("auth/Update-Profile", { name: newName });

            if (response.data) {
                setUser((prevUser) => ({ ...prevUser, name: newName })); // ✅ UI Update
                 toast.success("Profile Updated Successfully");
                 
            }
        } catch (error) {
            console.error("Error updating profile:", error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <><Toaster position="top-center" /><div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">
            <div className="w-full mt-10 flex justify-center text-primary">
                <div className="max-w-[1920px] w-full">
                    <div className="w-full relative max-w-[669px] pb-[46px] text-center pt-[36px] bg-[#FFF] rounded-[16px] mx-auto mt-[100px]">
                        <div className="w-[100px] h-[100px] rounded-full mx-auto text-[72px] font-semibold" style={{ background: '#2da9dd', fontFamily: 'ClashDisplay-Semibold' }}>
                            B
                        </div>
                        <a className="absolute right-10 top-10" id="profileShow" onClick={handleProfilePopupToggle}>
                            <img alt="Edit Icon" loading="lazy" width="28" height="28" src="/upnl/assets/icons/icon-referrals.svg" style={{ color: 'transparent' }} />
                        </a>
                        <div className="mx-auto w-full text-primary text-[28px] font-semibold" style={{ fontFamily: 'ClashDisplay-Semibold' }}>
                            Raju                        </div>
                        <div className="mx-auto w-full text-secondary text-sm mb-[60px]">
                            {email}
                        </div>
                        <div className="flex flex-wrap md:flex-nowrap mx-auto w-full justify-center">
                            <button className="rounded-[30px] h-[48px] py-3 px-6 bg-[#F1F1F1] md:mr-2 mb-2" onClick={handlePasswordPopupToggle}>
                                Login Password
                            </button>
                            <a className="rounded-[30px] h-[48px] py-3 px-6 bg-[#F1F1F1] md:mr-2 flex items-center justify-center" onClick={handleTrxPasswordPopupToggle}>
                                Change Trx Password
                            </a>
                        </div>
                    </div>










                   
                    {isPasswordPopupOpen && (

                        <div id="popup-overlay"  onClick={(e) => handleOutsideClick(e, setPasswordPopupOpen)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">

                            <form>
                                <input type="hidden" name="_token" value="KKX0De0b1aF69ZyhV4ctcUqPaDEGxVrpSEIoZILh" />
                                <div className="bg-white rounded-[20px] w-[400px] px-8 pt-10 pb-6 text-center relative">

                                    <h2 className="text-lg font-semibold">Change Password</h2>
                                    <div className="mb-4 mt-8 text-left">
                                        <label className="block text-gray-600 mb-1">Email</label>
                                        <input type="email" placeholder="Please enter the email" value={email} onChange={(e) => setEmail(e.target.value)} id="emailId" name="emailId" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" />
                                        <input type="email" placeholder="Please enter the email" value={email} onChange={(e) => setEmail(e.target.value)} id="emailId" name="emailId" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" />
                                    </div>
                                    <div className="mb-4 mt-8 text-left">
                                        <label className="block text-gray-600 mb-1">Verification Code</label>
                                        <div className="input-container" style={{ position: 'relative', width: '100%' }}>
                                            <input type="text" name="code"  value={code}    onChange={(e) => setCode(e.target.value)} placeholder="Enter verification code" className="w-full px-3 py-2 border border-gray-300 rounded-[12px] pr-20" />
                                            <span className="code-btn"  onClick={handleSendOtp} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: 'gray' }}>
                                                Get Code
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mb-4 mt-4 text-left">
                                        <label className="block text-gray-600 mb-1">New Password</label>
                                        <input type="password"   value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Please enter the new password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" />
                                    </div>
                                    <div className="mb-4 mt-4 text-left">
                                        <label className="block text-gray-600 mb-1">Confirm Password</label>
                                        <input type="password" placeholder="Enter the password again to confirm" value={confirmPassword}   onChange={(e) => setConfirmPassword(e.target.value)} name="password_confirmation" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" />
                                    </div>
                                    <div className="mt-10">
                                        <button  onClick={handleResetPassword} className="w-full h-[46px] mb-2 px-4 py-2 rounded-[30px] bg-blue-500 text-white">Confirm</button>
                                        <a href="/Profile" className="w-full h-[46px] px-4 py-2 rounded-[30px] bg-gray-300 inline-block text-center">Cancel</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )}


                    {isTrxPasswordPopupOpen && (
                        <div id="popup-overlay"  onClick={(e) => handleOutsideClick(e, setTrxPasswordPopupOpen)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <form>
                                <input type="hidden" name="_token" value="KKX0De0b1aF69ZyhV4ctcUqPaDEGxVrpSEIoZILh" />
                                <div className="bg-white rounded-[20px] w-[400px] px-8 pt-10 pb-6 text-center relative">
                                    <h2 className="text-lg font-semibold">Change Transaction Password</h2>
                                    <div className="mb-4 mt-8 text-left">
                                        <label className="block text-gray-600 mb-1">Email</label>
                                        <input type="text" placeholder="Please enter the new password" value="kumar@gmail.com" id="emailId" name="emailId" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" />
                                    </div>
                                    <div className="mb-4 mt-8 text-left">
                                        <label className="block text-gray-600 mb-1">Verification Code</label>
                                        <div className="input-container" style={{ position: 'relative', width: '100%' }}>
                                            <input type="text" name="code" placeholder="Enter verification code" className="w-full px-3 py-2 border border-gray-300 rounded-[12px] pr-20" />
                                            <span className="code-btn" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: 'gray' }}>
                                                Get Code
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mb-4 mt-4 text-left">
                                        <label className="block text-gray-600 mb-1">New Password</label>
                                        <input type="password" placeholder="Please enter the new password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" />
                                    </div>
                                    <div className="mb-4 mt-4 text-left">
                                        <label className="block text-gray-600 mb-1">Confirm Password</label>
                                        <input type="password" placeholder="Enter the password again to confirm" name="password_confirmation" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" />
                                    </div>
                                    <div className="mt-10">
                                        <button className="w-full h-[46px] mb-2 px-4 py-2 rounded-[30px] bg-blue-500 text-white">Confirm</button>
                                        <a href="/profile" className="w-full h-[46px] px-4 py-2 rounded-[30px] bg-gray-300 inline-block text-center">Cancel</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )}
                    {isTrxPasswordPopupOpen && (
                        <div id="popup-overlay"  onClick={(e) => handleOutsideClick(e, setTrxPasswordPopupOpen)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <form>
                                <input type="hidden" name="_token" value="KKX0De0b1aF69ZyhV4ctcUqPaDEGxVrpSEIoZILh" />
                                <div className="bg-white rounded-[20px] w-[400px] px-8 pt-10 pb-6 text-center relative">
                                    <h2 className="text-lg font-semibold">Change Transaction Password</h2>
                                    <div className="mb-4 mt-8 text-left">
                                        <label className="block text-gray-600 mb-1">Email</label>
                                        <input type="text" placeholder="Please enter the new password" value="kumar@gmail.com" id="emailId" name="emailId" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" />
                                    </div>
                                    <div className="mb-4 mt-8 text-left">
                                        <label className="block text-gray-600 mb-1">Verification Code</label>
                                        <div className="input-container" style={{ position: 'relative', width: '100%' }}>
                                            <input type="text" name="code" placeholder="Enter verification code" className="w-full px-3 py-2 border border-gray-300 rounded-[12px] pr-20" />
                                            <span className="code-btn" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: 'gray' }}>
                                                Get Code
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mb-4 mt-4 text-left">
                                        <label className="block text-gray-600 mb-1">New Password</label>
                                        <input type="password" placeholder="Please enter the new password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" />
                                    </div>
                                    <div className="mb-4 mt-4 text-left">
                                        <label className="block text-gray-600 mb-1">Confirm Password</label>
                                        <input type="password" placeholder="Enter the password again to confirm" name="password_confirmation" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" />
                                    </div>
                                    <div className="mt-10">
                                        <button className="w-full h-[46px] mb-2 px-4 py-2 rounded-[30px] bg-blue-500 text-white">Confirm</button>
                                        <a href="/profile" className="w-full h-[46px] px-4 py-2 rounded-[30px] bg-gray-300 inline-block text-center">Cancel</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* Edit Profile Modal */}
                    {isProfilePopupOpen && (
                        <div id="popup-overlay"  onClick={(e) => handleOutsideClick(e, setProfilePopupOpen)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white rounded-[20px] w-[400px] px-8 pt-10 pb-6 text-center relative">
                                <h2 className="text-lg font-semibold">Edit Profile</h2>
                                <div className="w-[100px] my-10 h-[100px] mx-auto cursor-pointer">
                                    <div className="w-full h-full rounded-full mx-auto text-[72px] font-semibold"
                                        style={{ background: 'rgb(45, 169, 221)', fontFamily: 'ClashDisplay-Semibold' }}>
                                        {user.name?.charAt(0).toUpperCase() || "U"}
                                    </div>
                                </div>
                                <div className="mb-4 text-left">
                                    <label className="block text-gray-600 mb-1">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-[12px]"
                                        placeholder="Enter Full Name"
                                        value={newName}
                                        onChange={(e) => setNewName(e.target.value)} />
                                </div>
                                <div className="mt-10">
                                    <button onClick={handleUpdateProfile} disabled={loading} className="w-full h-[46px] mb-2 px-4 py-2 rounded-[30px] bg-blue-500 text-white">
                                        Save
                                    </button>
                                    <button
                                        className="w-full h-[46px] px-4 py-2 rounded-[30px] bg-gray-300"
                                        onClick={handleProfilePopupToggle}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Navigation Bar */}
            <div className="fixed bottom-0 w-full bg-white flex md:hidden justify-around shadow-lg">
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/dashboard">
                    <img alt="overview Icon" loading="lazy" width="20" height="20" src="/upnl/assets/icons/icon-overview.svg" style={{ color: 'transparent' }} />
                    <span className="text-xs mt-1 text-gray-400">Overview</span>
                </a>
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/node-power">
                    <img alt="my_nodes Icon" loading="lazy" width="20" height="20" src="/upnl/assets/icons/icon-nodes.svg" style={{ color: 'transparent' }} />
                    <span className="text-xs mt-1 text-gray-400">Nodes</span>
                </a>
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/team">
                    <img alt="referrals Icon" loading="lazy" width="20" height="20" src="/upnl/assets/icons/icon-referrals.svg" style={{ color: 'transparent' }} />
                    <span className="text-xs mt-1 text-gray-400">Referrals</span>
                </a>
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/wallet">
                    <img alt="wallet Icon" loading="lazy" width="20" height="20" src="/upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
                    <span className="text-xs mt-1 text-green-500">Wallet</span>
                </a>
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/profile-setting">
                    <img alt="wallet Icon" loading="lazy" width="20" height="20" src="/upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
                    <span className="text-xs mt-1 text-green-500">Profile</span>
                </a>
            </div>
        </div></>
    );
};

export default Profile;