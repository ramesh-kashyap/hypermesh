import { useEffect, useState } from "react";
import axios from "axios";
import Api from "../../Requests/Api";
import TelegramConnectModal from "../../components/TelegramConnectModal";
import { encryptID, decryptID } from "../../components/cryptoUtils";
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
   const navigate = useNavigate();
   const [balance, setBalance] = useState([]);
   const [error, setError] = useState("");
   const [showModal, setShowModal] = useState(false);
   const [originalID, setOriginalID] = useState(49);
   const [encryptedID, setEncryptedID] = useState("");
   const [decryptedID, setDecryptedID] = useState("");
   const [username, setUsername] = useState("");
   const [loading, setLoading] = useState(true);

   const handleEncrypt = () => {
      const encrypted = encryptID(originalID);
      setEncryptedID(encrypted);
   };

   const handleAccept = async () => {
      console.log("User accepted Telegram connection.");
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");
      const decryptedID = decryptID(code);

      try {
         const response = await Api.post('auth/connect-telegram', { telegram_id: decryptedID });
         if (response.data.status) {
            toast.success("Telegram Connected successful!");
            // Navigate to a protected route (e.g., /dashboard)
            navigate('/dashboard');
         }
         else {
            toast.error(response.data.message);
         }
      } catch (err) {

         console.log(err);
         setError(err.response?.data?.error || "Error connect telegram");
      }


      setShowModal(false);
   };

   const handleDecline = () => {
      console.log("User declined Telegram connection.");
      setShowModal(false);
   };



   useEffect(() => {
      fetchbalance();
      fetchUserInfo();
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");
      const decryptedID = decryptID(code);
      if (code) {
         setShowModal(true);
      }


   }, []);
   const fetchbalance = async () => {
      try {
         const response = await Api.get('auth/available-balance');
         setBalance(response.data);
      } catch (err) {
         setError(err.response?.data?.error || "Error fetching income");
      }
   };

   const fetchUserInfo = async () => {
      try {
         const response = await Api.get('auth/userinfo');
         if (response.data.status) {
            setUsername(response.data.name);
         }
      } catch (err) {
         console.error("❌ Error fetching user info:", err);
      } finally {
         setLoading(false);
      }
   };



   return (

















      <div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">






         <div class="bg-blue-100 text-blue-800 p-4 rounded-md mb-6"><p>Please verify your account to receive free <b>BNB</b> (used for rewards claiming fee). <a class="font-bold" href="/#">Verify Now!</a></p></div>
         <div className="w-full mt-10 flex flex-col justify-center text-primary">

            {/* model popup/ */}
            <div>
               {showModal && (
                  <TelegramConnectModal
                     username={username}
                     onAccept={handleAccept}
                     onDecline={handleDecline}
                  />
               )}
            </div>



            {/* end model */}
            <div className="max-w-[1920px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               <div className="bg-white pt-3 px-4 pb-4 rounded-[16px] flex flex-col items-left gap-3">
                  <div className="flex items-center gap-3"><div className="w-[42px] h-[42px] flex items-center justify-center rounded-[12px]" style={{
                     background: 'linear-gradient(rgb(237, 255, 248) 0%, rgb(174, 255, 226) 100%)',
                     width: '48px',
                     marginBottom: '-21px'
                  }}>
                     <img alt="Logo MCC 2" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" src="/assets/logo_mcc_2.svg" style={{ color: 'transparent', width: '39px' }} />
                  </div><div className="flex flex-col"><p className="text-base text-primary font-bold" style={{ marginTop: '21px' }}>MCC</p>
                        <p className="text-sm text-secondary font-medium">Token MCC</p></div></div>
                  <div className="text-left"><h3 className="font-semibold text-xs leading-[19.2px] mb-1 mt-3">Today Rewards</h3>
                     <p className="text-[28px] leading-[34px] font-semibold" style={{ fontFamily: 'ClashDisplay-Semibold' }}>
                        <span className="overflow-hidden truncate max-w-[80%]"><span>0</span></span>

                        <span className="text-[14px] leading-[16.8px] text-secondary ml-2" >MCC</span></p>
                  </div>
                  <div className="flex items-center justify-between w-full py-2 px-3 rounded-[12px] bg-[#D5FFF0] border-[#AEFFE2]" style={{ background: ' #b9ffe6' }}>
                     <p className="text-secondary text-xs leading-[19.2px]">Total Rewards</p>
                     <div className="flex text-primary text-xs leading-[19.2px] font-semibold max-w-[50%]">
                        <p className="overflow-hidden truncate"><span>0</span></p>
                        <p className="ml-1">MCC</p>
                     </div></div></div>


               <div class="bg-white pt-3 px-4 pb-4 rounded-[16px] h-full flex flex-col items-left  gap-3">
                  <div class="flex items-center gap-3">
                     <div class="w-[42px] h-[42px] flex items-center justify-center rounded-[12px]" style={{
                        background: 'linear-gradient(rgb(255, 250, 230) 0%, rgb(255, 232, 138) 100%)', width: '48px',
                        marginBottom: '-21px'
                     }}
                     >
                        <img alt="Logo MCP 2" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" src="/assets/logo_point_2.svg" style={{ color: 'transparent', width: '39px' }} />
                     </div><div class="flex flex-col"><p class="text-base text-primary font-bold" style={{ marginTop: '21px' }}>Points</p>
                        <p class="text-sm text-secondary font-medium">MC Points</p></div></div>
                  <div class="text-left">
                     <h3 class="font-semibold text-xs leading-[19.2px] mb-1 mt-3">Today Rewards</h3>
                     <p class="text-[28px] leading-[34px] font-semibold" style={{ fontFamily: 'ClashDisplay-Semibold' }}>
                        <span class="overflow-hidden truncate max-w-[80%]">
                           <span>18</span></span><span class="text-[14px] leading-[16.8px] text-secondary ml-2">Points</span></p>
                  </div>
                  <div class="flex items-center justify-between w-full py-2 px-3 rounded-[12px] bg-[#FFEFB0] border-[#FFE88A]" style={{ background: 'rgb(249 222 133)' }}>
                     <p class="text-secondary text-xs leading-[19.2px]">Total Rewards</p>
                     <div class="flex text-primary text-xs leading-[19.2px] font-semibold max-w-[50%]">
                        <p class="overflow-hidden truncate">
                           <span>118.8</span></p><p class="ml-1">Points</p></div>
                  </div></div>
               <div class="bg-white p-6 max-h-[226px] h-full col-span-full lg:col-span-1 rounded-[16px] flex flex-col justify-between">
                  <div><div class="flex justify-between items-center mb-4">
                     <h3 class="text-[20px] font-medium text-black">Network</h3>
                     <a href="/nodes">
                        <button class="text-sm flex items-center px-3 py-1 rounded-[22px] bg-[#F1F1F1]">Manage <span class="ml-1">→</span>
                        </button></a></div>
                  </div>
                  <div class="space-y-2 h-fit">
                     <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center">
                        <span class="text-xs">POINT Mining Difficulty</span><span class="text-xs">100</span></div>
                     <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center">
                        <span class="text-xs">MCC Mining Difficulty</span><span class="text-xs">900,000</span>
                     </div><div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center">
                        <span class="text-xs">Node online</span><span class="text-xs">0/2</span></div></div></div>
            </div>
         </div>







         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="bg-white p-5 rounded-[16px] mt-6 col-span-1 lg:col-span-8">
               <div className="flex justify-between items-center mb-4">
                  <h3 className="text-md font-semibold text-black">Reward Stats</h3>
                  {/* <div className="flex bg-gray-200 rounded-[16px] h-[30px]">
                     <button
                     className="flex-1 min-w-[87px] px-4 py-1 text-sm font-medium rounded-full text-center bg-black text-white">Daily</button><button
                        className="flex-1 px-4 py-1 text-sm font-medium rounded-full text-center ">Monthly</button></div> */}
               </div>
               <div className="w-full h-72">
                  <div className="recharts-responsive-container" style={{
                     width: '100%',
                     height: '100%',
                     minWidth: '0px'
                  }}>
                     <div className="recharts-wrapper"
                        style={{
                           position: 'relative',
                           cursor: 'default',
                           width: '100%',
                           height: '100%',
                           maxHeight: '288px',
                           maxWidth: '629px'
                        }}>
                        <svg className="recharts-surface" width="629" height="288" viewBox="0 0 629 288"
                           style={{
                              width: '100%',
                              height: '100%'
                           }}>
                           <title></title>
                           <desc></desc>
                           <defs>
                              <clipPath id="recharts1-clip">
                                 <rect x="0" y="15" height="223" width="629"></rect>
                              </clipPath>
                           </defs>
                           <g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
                              <g className="recharts-cartesian-axis-ticks">
                                 <g className="recharts-layer recharts-cartesian-axis-tick">
                                    <g transform="translate(22.464285714285715,246)">
                                       <text x="0" y="0" dy="18"
                                          text-anchor="middle" transform="rotate(0)"
                                          className="text-[9px] text-center 2xl:text-[11px] z-[999]" fill="#666">
                                          <tspan x="0" dy="10">04</tspan>
                                          <tspan x="0" dy="15">Dec</tspan>
                                       </text>
                                    </g>
                                 </g>
                                 <g className="recharts-layer recharts-cartesian-axis-tick">
                                    <g transform="translate(67.39285714285714,246)">
                                       <text x="0" y="0" dy="18"
                                          text-anchor="middle" transform="rotate(0)"
                                          className="text-[9px] text-center 2xl:text-[11px] z-[999]" fill="#666">
                                          <tspan x="0" dy="10">05</tspan>
                                          <tspan x="0" dy="15">Dec</tspan>
                                       </text>
                                    </g>
                                 </g>
                                 <g className="recharts-layer recharts-cartesian-axis-tick">
                                    <g transform="translate(112.32142857142858,246)">
                                       <text x="0" y="0" dy="18"
                                          text-anchor="middle" transform="rotate(0)"
                                          className="text-[9px] text-center 2xl:text-[11px] z-[999]" fill="#666">
                                          <tspan x="0" dy="10">06</tspan>
                                          <tspan x="0" dy="15">Dec</tspan>
                                       </text>
                                    </g>
                                 </g>
                                 <g className="recharts-layer recharts-cartesian-axis-tick">
                                    <g transform="translate(157.25,246)">
                                       <text x="0" y="0" dy="18"
                                          text-anchor="middle" transform="rotate(0)"
                                          className="text-[9px] text-center 2xl:text-[11px] z-[999]" fill="#666">
                                          <tspan x="0" dy="10">07</tspan>
                                          <tspan x="0" dy="15">Dec</tspan>
                                       </text>
                                    </g>
                                 </g>
                                 <g className="recharts-layer recharts-cartesian-axis-tick">
                                    <g transform="translate(202.17857142857144,246)">
                                       <text x="0" y="0" dy="18"
                                          text-anchor="middle" transform="rotate(0)"
                                          className="text-[9px] text-center 2xl:text-[11px] z-[999]" fill="#666">
                                          <tspan x="0" dy="10">08</tspan>
                                          <tspan x="0" dy="15">Dec</tspan>
                                       </text>
                                    </g>
                                 </g>
                                 <g className="recharts-layer recharts-cartesian-axis-tick">
                                    <g transform="translate(247.1071428571429,246)">
                                       <text x="0" y="0" dy="18"
                                          text-anchor="middle" transform="rotate(0)"
                                          className="text-[9px] text-center 2xl:text-[11px] z-[999]" fill="#666">
                                          <tspan x="0" dy="10">09</tspan>
                                          <tspan x="0" dy="15">Dec</tspan>
                                       </text>
                                    </g>
                                 </g>
                                 <g className="recharts-layer recharts-cartesian-axis-tick">
                                    <g transform="translate(292.0357142857143,246)">
                                       <text x="0" y="0" dy="18"
                                          text-anchor="middle" transform="rotate(0)"
                                          className="text-[9px] text-center 2xl:text-[11px] z-[999]" fill="#666">
                                          <tspan x="0" dy="10">10</tspan>
                                          <tspan x="0" dy="15">Dec</tspan>
                                       </text>
                                    </g>
                                 </g>
                                 <g className="recharts-layer recharts-cartesian-axis-tick">
                                    <g transform="translate(336.9642857142857,246)">
                                       <text x="0" y="0" dy="18"
                                          text-anchor="middle" transform="rotate(0)"
                                          className="text-[9px] text-center 2xl:text-[11px] z-[999]" fill="#666">
                                          <tspan x="0" dy="10">11</tspan>
                                          <tspan x="0" dy="15">Dec</tspan>
                                       </text>
                                    </g>
                                 </g>
                                 <g className="recharts-layer recharts-cartesian-axis-tick">
                                    <g transform="translate(381.89285714285717,246)">
                                       <text x="0" y="0" dy="18"
                                          text-anchor="middle" transform="rotate(0)"
                                          className="text-[9px] text-center 2xl:text-[11px] z-[999]" fill="#666">
                                          <tspan x="0" dy="10">12</tspan>
                                          <tspan x="0" dy="15">Dec</tspan>
                                       </text>
                                    </g>
                                 </g>
                                 <g className="recharts-layer recharts-cartesian-axis-tick">
                                    <g transform="translate(426.8214285714286,246)">
                                       <text x="0" y="0" dy="18"
                                          text-anchor="middle" transform="rotate(0)"
                                          className="text-[9px] text-center 2xl:text-[11px] z-[999]" fill="#666">
                                          <tspan x="0" dy="10">13</tspan>
                                          <tspan x="0" dy="15">Dec</tspan>
                                       </text>
                                    </g>
                                 </g>
                                 <g className="recharts-layer recharts-cartesian-axis-tick">
                                    <g transform="translate(471.75000000000006,246)">
                                       <text x="0" y="0" dy="18"
                                          text-anchor="middle" transform="rotate(0)"
                                          className="text-[9px] text-center 2xl:text-[11px] z-[999]" fill="#666">
                                          <tspan x="0" dy="10">14</tspan>
                                          <tspan x="0" dy="15">Dec</tspan>
                                       </text>
                                    </g>
                                 </g>
                                 <g className="recharts-layer recharts-cartesian-axis-tick">
                                    <g transform="translate(516.6785714285714,246)">
                                       <text x="0" y="0" dy="18"
                                          text-anchor="middle" transform="rotate(0)"
                                          className="text-[9px] text-center 2xl:text-[11px] z-[999]" fill="#666">
                                          <tspan x="0" dy="10">15</tspan>
                                          <tspan x="0" dy="15">Dec</tspan>
                                       </text>
                                    </g>
                                 </g>
                                 <g className="recharts-layer recharts-cartesian-axis-tick">
                                    <g transform="translate(561.6071428571428,246)">
                                       <text x="0" y="0" dy="18"
                                          text-anchor="middle" transform="rotate(0)"
                                          className="text-[9px] text-center 2xl:text-[11px] z-[999]" fill="#666">
                                          <tspan x="0" dy="10">16</tspan>
                                          <tspan x="0" dy="15">Dec</tspan>
                                       </text>
                                    </g>
                                 </g>
                                 <g className="recharts-layer recharts-cartesian-axis-tick">
                                    <g transform="translate(606.5357142857142,246)">
                                       <text x="0" y="0" dy="18"
                                          text-anchor="middle" transform="rotate(0)"
                                          className="text-[9px] text-center 2xl:text-[11px] z-[999]" fill="#666">
                                          <tspan x="0" dy="10">17</tspan>
                                          <tspan x="0" dy="15">Dec</tspan>
                                       </text>
                                    </g>
                                 </g>
                              </g>
                           </g>
                           <g className="recharts-layer recharts-bar">
                              <g className="recharts-layer recharts-bar-rectangles">
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                              </g>
                              <g className="recharts-layer"></g>
                           </g>
                           <g className="recharts-layer recharts-bar">
                              <g className="recharts-layer recharts-bar-rectangles">
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                              </g>
                              <g className="recharts-layer"></g>
                           </g>
                           <g className="recharts-layer recharts-bar">
                              <g className="recharts-layer recharts-bar-rectangles">
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle"></g>
                                 <g className="recharts-layer recharts-bar-rectangle">
                                    <path x="594.0714285714286" y="37.3" width="24" height="200.7" radius="5,5,5,5"
                                       fill="#0093E9" stroke-width="1" stroke="#0093E9
                             " className="recharts-rectangle" d="M594.0714285714286,42.3A 5,5,0,0,1,599.0714285714286,37.3L 613.0714285714286,37.3A 5,5,0,0,1,
                             618.0714285714286,42.3L 618.0714285714286,233A 5,5,0,0,1,
                             613.0714285714286,238L 599.0714285714286,238A 5,5,0,0,1,
                             594.0714285714286,233Z"></path>
                                 </g>
                              </g>
                              <g className="recharts-layer"></g>
                              <g className="recharts-layer recharts-label-list">
                                 <text x="606.0714285714286"
                                    y="31.299999999999997" text-anchor="middle" fill="#666" font-size="11"
                                    font-weight="bold" className="z-[999]">25.2</text>
                              </g>
                           </g>
                        </svg>
                        <div tabindex="-1"
                           className="recharts-tooltip-wrapper recharts-tooltip-wrapper-right recharts-tooltip-wrapper-bottom"
                           style={{
                              visibility: 'hidden',
                              pointerEvents: 'none',
                              position: 'absolute',
                              top: '0px',
                              left: '0px',
                              transform: 'translate(77.3929px, 118px)'
                           }}>
                        </div>
                     </div>
                  </div>
               </div>


               {/* <div className="flex space-x-4 mt-6">
                  <div className="flex items-center"><span
                     className="w-[22px] h-[22px] bg-green-500 rounded-full mr-2"></span><span
                        className="text-gray-600">Mining</span></div>
                  <div className="flex items-center"><span
                     className="w-[22px] h-[22px] bg-blue-500 rounded-full mr-2"></span><span
                        className="text-gray-600">Referrals</span></div>
                  <div className="flex items-center"><span
                     className="w-[22px] h-[22px] bg-[#FFCC00] rounded-full mr-2"></span><span
                        className="text-gray-600">Tasks</span></div>
               </div> */}
            </div>
            <div className="col-span-1 lg:col-span-4 bg-white rounded-[16px] mt-6 p-5" >
               <h2 className="text-[20px] font-medium text-primary text-center mb-3">Become Resource
                  Provider
               </h2>
               <div className="space-y-4">
                  <a
                     className="relative min-h-[70px] h-full text-left w-full py-4 text-white font-semibold bg-[#003724] rounded-[16px] flex items-center justify-center space-x-2 overflow-hidden"
                  >
                     <div className="absolute top-[-50px] inset-0 flex items-center justify-center">
                        <div className="w-[140%] h-[150%] rounded-full opacity-30"
                           style={{
                              backgroundColor: "#0093E9",
                              backgroundImage: "linear-gradient(315deg, #0093E9 0%, #80D0C7 100%)"
                           }}>
                        </div>
                     </div>
                     <div className="w-full"><span className="text-[16px] ml-4">Set Up Telegram Node</span>
                     </div><img alt="Set Up Telegram Node" loading="lazy" width="98" height="98" decoding="async"
                        data-nimg="1" src="/upnl/assets/images/telegram-svgrepo-com.svg"
                        style={{
                           color: 'transparent',
                           position: 'absolute',
                           bottom: '0px',
                           right: '10px',
                           marginBottom: '-5px',
                           opacity: '0.2'
                        }} />
                  </a>
                  <a
                     className="relative min-h-[70px] h-full text-left w-full py-4 text-white font-semibold bg-[#003724] rounded-[16px] flex items-center justify-center space-x-2 overflow-hidden"
                  >
                     <div className="absolute top-[-50px] inset-0 flex items-center justify-center">
                        <div className="w-[140%] h-[150%] rounded-full opacity-30"
                           style={{
                              backgroundColor: '#0093E9',
                              backgroundImage: 'linear-gradient(315deg, #0093E9 0%, #80D0C7 100%)'
                           }}>
                        </div>
                     </div>
                     <div className="w-full"><span className="text-[16px] ml-4">Install Browser
                        Extension</span></div><img alt="Install Browser Extension" loading="lazy" width="98"
                           height="98" decoding="async" data-nimg="1"
                           src="/upnl/assets/images/server-square-svgrepo-com.svg"
                           style={{
                              color: 'transparent',
                              position: 'absolute',
                              bottom: '0px',
                              right: '10px',
                              marginBottom: '-5px',
                              opacity: '0.2'
                           }} />
                  </a>
                  <a
                     className="relative min-h-[70px] h-full text-left w-full py-4 text-white font-semibold bg-[#003724] rounded-[16px] flex items-center justify-center space-x-2 overflow-hidden"
                  >
                     <div className="absolute top-[-50px] inset-0 flex items-center justify-center">
                        <div className="w-[140%] h-[150%] rounded-full opacity-30"
                           style={{
                              backgroundColor: '#0093E9',
                              backgroundImage: 'linear-gradient(315deg, #0093E9 0%, #80D0C7 100%)'
                           }}>
                        </div>
                     </div>
                     <div className="w-full"><span className="text-[16px] ml-4">Install Desktop Node</span>
                     </div>
                     <img alt="Install Desktop Node" loading="lazy" width="98" height="98" decoding="async"
                        data-nimg="1" src="/upnl/assets/images/extension-puzzle-sharp-svgrepo-com.svg"
                        style={{
                           color: 'transparent',
                           position: 'absolute',
                           bottom: '0px',
                           right: '10px',
                           marginBottom: '-5px',
                           opacity: '0.2'
                        }} />
                  </a>
                  <div className="w-[140%] h-[150%] rounded-full opacity-30"
                     style={{
                        backgroundColor: '#0093E9',
                        backgroundImage: 'linear-gradient(315deg, #0093E9 0%, #80D0C7 100%)'
                     }}>
                  </div>
               </div>
            </div>

         </div>
      </div>
   );
};

export default Dashboard;