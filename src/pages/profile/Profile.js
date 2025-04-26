import { useState, useEffect } from "react";
import { Lock, KeyRound,Pencil } from "lucide-react"; // Icons
import axios from "axios";

const ProfileSection = () => {
  const [isPasswordPopupOpen, setPasswordPopupOpen] = useState(false);
  const [isProfilePopupOpen, setProfilePopupOpen] = useState(false);
  const [isTrxPasswordPopupOpen, setTrxPasswordPopupOpen] = useState(false);

  const [email, setEmail] = useState("sagartyagi1024@gmail.com");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordPopupToggle = () => {
    setPasswordPopupOpen(!isPasswordPopupOpen);
    setMessage("");
    
    };
    const handleProfilePopupToggle = () => {
    setProfilePopupOpen(!isProfilePopupOpen);
    };
    const handleTrxPasswordPopupToggle = () => {
    setTrxPasswordPopupOpen(!isTrxPasswordPopupOpen); // Toggle the new popup
    };


    
const [name, setName] = useState("");
const token = localStorage.getItem("token");  // Ya jo bhi method use ho
useEffect(() => {
   if (!token) return;

   axios.get("http://localhost:3002/api/auth/profiles", {
       headers: { Authorization: `Bearer ${token}` }
   })
   .then(response => {
       console.log("Profile Data:", response.data);  // Debugging
       setName(response.data.name);
   })
   .catch(error => {
       console.error("Error fetching profile:", error.response?.data);
   });
}, [token]);


const handleSave = () => {
    axios.put("http://localhost:3002/api/auth/profile", { name }, {
        headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
        alert("Profile updated successfully");
        setName(response.data.name); 
        handleProfilePopupToggle(); 
    })
    .catch(error => {
        console.error("Error updating profile:", error.response?.data);
    });
};

 // Send Code API Call
 const sendVerificationCode = async () => {
   

   try {
     
     const response = await axios.post("http://localhost:3002/api/auth/send-code", { email });
     setMessage(response.data.message || "Verification code sent!");
     console.log("response",response);
     
   } catch (error) {
     setMessage("Failed to send code. Please try again.");
     console.log("response","error");
   }
 };

 // Reset Password API Call
 const resetPassword = async (e) => {
   e.preventDefault();
   if (newPassword !== confirmPassword) {
     setMessage("Passwords do not match!");
     return;
   }

   try {
     const response = await axios.post("http://localhost:3002/api/auth/reset-password", {
       email,
       password: newPassword,
       code: verificationCode,
     });

     setMessage(response.data.message || "Password reset successful!");
     setPasswordPopupOpen(false);
   } catch (error) {
     setMessage("Failed to reset password. Please check the code and try again.");
   }
 };


 const handleOutsideClick = (event, setPopupState) => {
    if (event.target.id === "popup-overlay") {
      setPopupState(false);
    }
  };

  return (
<div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
    {/* Left Section - Profile Box (Bigger) */}
    <div className="col-span-12 lg:col-span-8 w-full lg:mt-[100px] relative pb-[46px] text-center pt-[36px] bg-[#FFF] rounded-[16px]">
     
      <div className="w-[100px] h-[100px] rounded-full mx-auto text-[72px] font-semibold"  style={{
          backgroundImage: "linear-gradient(315deg, rgb(0, 147, 233) 0%, rgb(128, 208, 199) 100%)",
        }} >P</div>
      <button className="absolute right-10 top-10"onClick={handleProfilePopupToggle}>
        <img alt="Edit Icon" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" src="upnl/assets/icons/pencil.svg" style={{ color: "transparent" }} />
      </button>
      <div className="mx-auto w-full text-primary text-[28px] font-semibold" style={{ fontFamily: "ClashDisplay-Semibold",zIndex:"-1" }}>
        Ashuxptutor
      </div>
      <div className="mx-auto w-full text-secondary text-sm mb-[24px]">pashutosh563@gmail.com</div>

      {/* Security Buttons */}
      <div className="flex mx-auto w-full justify-center mt-2">
        <a >
          <button className="flex flex-1 justify-center rounded-[30px] max-w-[200px] h-[48px] py-3 px-6 bg-[#F1F1F1]"onClick={handlePasswordPopupToggle}>
            <KeyRound size={20} />
            <span className="ml-2 text-[16px] font-semibold">Password</span>
          </button>
        </a>

        <a >
          <button className="flex flex-1 ml-2 md:ml-4 justify-center rounded-[30px] max-w-[200px] h-[48px] py-3 px-6 bg-[#F1F1F1]"onClick={handleTrxPasswordPopupToggle}>
            <Lock size={20} />
            <span className="ml-2 text-[16px] font-semibold">Security</span>
          </button>
        </a>
      </div>
    </div>

    {/* Right Section - Connection Options (Smaller) */}
    <div className="col-span-12 lg:col-span-4 lg:w-[calc(33.33%+5px)] mt-6 md:mt-0 p-6 rounded-[16px] w-full bg-[#FFF] flex flex-col gap-4">
      {[
        { icon: "icon_telegram_2.svg", title: "Connect Telegram" },
        { icon: "icon_twitter.svg", title: "Connect X (Twitter)" },
        { icon: "icon_discord.svg", title: "Connect Discord" },
        { icon: "icon-wallet.svg", title: "Connect Web3 Wallet" },
      ].map((item, index) => (
        <div key={index} className="flex flex-col w-full p-4 bg-[#F9F9F9] rounded-[16px] h-[137px] border border-gray-200">
          <div className="flex flex-col items-center justify-center w-full h-[72px] space-y-2">
            <div className="relative w-[38px] h-[38px] rounded-full border-[3px] border-white bg-white flex items-center justify-center">
              <img alt={item.title} src={`upnl/assets/icons/${item.icon}`} width="24" height="24" />
            </div>
            <span className="text-[16px] font-semibold" style={{ fontFamily: "Poppins" }}>{item.title}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <button className="bg-[#171717] mt-2 cursor-pointer text-white py-3 px-4 h-[30px] rounded-[20px] flex justify-center items-center">
              <span className="text-[14px]" style={{color:"white"}}>Connect</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  
  
         {/* Change Password Modal */}
     {isPasswordPopupOpen && (
  <div id="popup-overlay" className="fixed inset-0 flex items-center justify-center bg-black1 bg-opacity-50" onClick={(e) => handleOutsideClick(e, setPasswordPopupOpen)}>
      <form>
         <input type="hidden" name="_token" value="KKX0De0b1aF69ZyhV4ctcUqPaDEGxVrpSEIoZILh" />
         <div className="bg-white rounded-[20px] w-[500px] px-8 pt-10 pb-6 relative">
            {/* Close button at the top */}
            <h2 className="text-lg font-semibold text-center">Change Password</h2>
            <div className="grid grid-cols-2 gap-4 mt-8">
            {message && <p className="text-center text-red-500">{message}</p>}
            <div className="text-left">
                  <label className="block text-gray-600 mb-1">Email</label>
                  <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-[12px]"
                      disabled
                    />               </div>
               <div className="text-left">
                  <label className="block text-gray-600 mb-1">New Password</label>
                  <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter new password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-[12px]"
                    />               </div>
               {/* Right Column (Verification Code and Confirm Password) */}
               <div className="text-left">
                  <label className="block text-gray-600 mb-1">Verification Code</label>
                  <div className="relative">
                  <input
                        type="text"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        placeholder="Enter verification code"
                        className="w-full px-3 py-2 border border-gray-300 rounded-[12px] pr-20"
                      />                     <span
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
                        onClick={sendVerificationCode}
                      >                     Get Code
                     </span>
                  </div>
               </div>
               <div className="text-left">
                  <label className="block text-gray-600 mb-1">Confirm Password</label>
                  <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-[12px]"
                    />               </div>
            </div>
            <div className="mt-10">
            <button
                    onClick={resetPassword}
                    className="w-full h-[46px] mb-2 px-4 py-2 rounded-[30px] bg-green-500 text-white"
                  >
                    Confirm
                  </button>
               <button type="submit"  onClick={handlePasswordPopupToggle} className="w-full h-[46px] px-4 py-2 rounded-[30px] bg-gray-300" >
               Cancel
               </button>
            </div>
         </div>
      </form>
   </div>
   )}
     {/* Edit Profile Modal */}
     {isProfilePopupOpen && (
  <div id="popup-overlay" className="fixed inset-0 flex items-center justify-center bg-black1 bg-opacity-50" onClick={(e) => handleOutsideClick(e, setProfilePopupOpen)}>
    <div className="bg-white rounded-[20px] w-[400px] px-8 pt-10 pb-6 relative">
                            <h2 className="text-lg font-semibold">Edit Profile</h2>
                            <div className="w-[100px] my-10 h-[100px] mx-auto cursor-pointer">
                                <div className="w-full h-full rounded-full mx-auto text-[72px] font-semibold bg-green-500">
                                    {name.charAt(0).toUpperCase()} {/* First letter of name */}
                                </div>
                            </div>
                            <div className="mb-4 text-left">
                                <label className="block text-gray-600 mb-1">Name</label>
                                <input
    type="text"
    value={name}  // ✅ Ensure value is set from state
    onChange={(e) => setName(e.target.value)}
    className="w-full px-3 py-2 border border-gray-300 rounded-[12px]"
/>

                            </div>
                            <div className="mt-10">
                                <button onClick={handleSave} className="w-full h-[46px] mb-2 px-4 py-2 rounded-[30px] bg-black text-white">
                                    Save
                                </button>
                                <button onClick={handleProfilePopupToggle} className="w-full h-[46px] px-4 py-2 rounded-[30px] bg-gray-300">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                    )}
   {/* Transaction Password Modal (New Popup) */}
   {isTrxPasswordPopupOpen && (
  <div id="popup-overlay" className="fixed inset-0 flex items-center justify-center bg-black1 bg-opacity-50" onClick={(e) => handleOutsideClick(e, setTrxPasswordPopupOpen)}>
    <div className="bg-white rounded-[20px] w-[400px] px-8 pb-6 text-center">
         {/* Close button at the top */}
         <h2 className="text-lg font-semibold">Change Trx Password</h2>
         <div className="mb-4 text-left">
            <label className="block text-gray-600 mb-1">Old Password</label>
            <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" placeholder="Enter Old Password" />
         </div>
         <div className="mb-4 text-left">
            <label className="block text-gray-600 mb-1">New Transaction Password</label>
            <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" placeholder="Enter New Trx Password" />
         </div>
         <div className="mt-10">
            <button className="w-full h-[46px] mb-2 px-4 py-2 rounded-[30px] bg-green-500 text-white">
            Confirm
            </button>
            <button className="w-full h-[46px] px-4 py-2 rounded-[30px] bg-gray-300" onClick={handleTrxPasswordPopupToggle}>
            Cancel
            </button>
         </div>
      </div>
   </div>
   )}
</div>

    
  );
  
};

export default ProfileSection;
