import { useEffect, useState } from "react";
import axios from "axios";
import Api from "../../Requests/Api";

const Dashboard = () => {
   const [balance, setBalance] = useState([]);
    const [error, setError] = useState("");


    useEffect(() => {
        fetchbalance();
    }, []);
    const fetchbalance = async () => {
    
        try {
          
            const response =await Api.get('auth/available-balance');                
            setBalance(response.data);
            console.log(response.data)
        } catch (err) {
            setError(err.response?.data?.error || "Error fetching income");
        }
    };
    return (
        
        <div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">
        <div className="w-full mt-10 flex flex-col justify-center text-primary">
           <div className="max-w-[1920px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-[16px] flex flex-col items-left">
                 <div className="flex items-center justify-left mb-4">
                    <div className="bg-blue-100 rounded-full p-2"><img alt="Total Rewards Icon" loading="lazy" width="32"
                       height="32" decoding="async" data-nimg="1"
                       src="/upnl/assets/icons/icon_total_rewards.svg" style={{color: 'transparent'}}/>
                    </div>
                 </div>
                 <div className="text-left">
                    <h3 className="font-medium mb-1">My Balance</h3>
                    <div className="flex flex-row md:flex-col xl:flex-row items-baseline">
                       <p className="text-[40px] md:text-[36px] lg:text-[40px] mr-2 font-semibold"
                       style={{
                       fontFamily: 'ClashDisplay-Semibold'
                       }}><span style={{
                       fontSize: '25px'
                       }}> {balance.available_balance} USDT</span></p>
                       <p className="text-secondary"></p>
                    </div>
                 </div>
              </div>


              <div className="bg-white p-6 rounded-[16px] max-h-[226px] h-full flex flex-col items-left">
                 <div className="flex items-center justify-left mb-4">
                    <div className="bg-green-100 rounded-full p-2"><img alt="Today's Rewards Icon" loading="lazy" width="32"
                       height="32" decoding="async" data-nimg="1"
                       src="/upnl/assets/icons/icon_todays_rewards.svg" style={{color: 'transparent'}}/>
                    </div>
                 </div>
                 <div className="text-left">
                    <h3 className="font-medium mb-1"> Total invested </h3>
                    <div className="flex flex-row md:flex-col xl:flex-row items-baseline">
                       <p className="text-[40px] md:text-[36px] lg:text-[40px] font-semibold mr-2"
                       style={{
                       fontFamily: 'ClashDisplay-Semibold'
                       }}>
                       <span  style={{
                       fontSize: '25px'
                       }}> {Number(balance.withdraw)} USDT</span></p>
                       <p className="text-secondary"></p>
                    </div>
                 </div>
              </div>
              <div
                 className="bg-white p-6 max-h-[226px] h-full col-span-full lg:col-span-1 rounded-[16px] flex flex-col justify-between">
                 <div>
                    <div className="flex justify-between items-center mb-4">
                       <h3 className="text-[20px] font-medium text-black"> Total withdrawn</h3>
                       <a
                          ><button
                          className="text-sm flex items-center px-3 py-1 rounded-[22px] bg-[#F1F1F1]"
                          fdprocessedid="bjee6h">Manage <span className="ml-1">→</span></button></a>
                    </div>
                 </div>
                 <p className="text-[40px] md:text-[36px] lg:text-[40px] font-semibold mr-2"
                 style={{
                 fontFamily: 'ClashDisplay-Semibold'
                 }}>
                 <span style={{
                 fontSize: '25px'
                 }}>{Number(balance.withdraw)} USDT</span></p>
              </div>
           </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
           <div className="bg-white p-5 rounded-[16px] mt-6 col-span-1 lg:col-span-8">
              <div className="flex justify-between items-center mb-4">
                 <h3 className="text-md font-semibold text-black">Reward Stats</h3>
                 <div className="flex bg-gray-200 rounded-[16px] h-[30px]"><button
                    className="flex-1 min-w-[87px] px-4 py-1 text-sm font-medium rounded-full text-center bg-black text-white">Daily</button><button
                    className="flex-1 px-4 py-1 text-sm font-medium rounded-full text-center ">Monthly</button></div>
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


               <div className="flex space-x-4 mt-6">
                  <div className="flex items-center"><span
                     className="w-[22px] h-[22px] bg-green-500 rounded-full mr-2"></span><span
                        className="text-gray-600">Mining</span></div>
                  <div className="flex items-center"><span
                     className="w-[22px] h-[22px] bg-blue-500 rounded-full mr-2"></span><span
                        className="text-gray-600">Referrals</span></div>
                  <div className="flex items-center"><span
                     className="w-[22px] h-[22px] bg-[#FFCC00] rounded-full mr-2"></span><span
                        className="text-gray-600">Tasks</span></div>
               </div>
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
            <div className="fixed bottom-0 w-full bg-white flex md:hidden justify-around shadow-lg">
               <a className="flex w-1/5 p-[12px] flex-col items-center" to="/dashboard">
                  <img alt="overview Icon" loading="lazy" width="20" height="20" decoding="async" src="/upnl/assets/icons/icon-overview.svg" style={{ color: 'transparent' }} />
                  <span className="text-xs mt-1 text-gray-400">Overview</span>
               </a>
               <a className="flex w-1/5 p-[12px] flex-col items-center" to="/">
                  <img alt="my_nodes Icon" loading="lazy" width="20" height="20" decoding="async" src="/upnl/assets/icons/icon-nodes.svg" style={{ color: 'transparent' }} />
                  <span className="text-xs mt-1 text-gray-400">Nodes</span>
               </a>
               <a className="flex w-1/5 p-[12px] flex-col items-center" to="/">
                  <img alt="referrals Icon" loading="lazy" width="20" height="20" decoding="async" src="/upnl/assets/icons/icon-referrals.svg" style={{ color: 'transparent' }} />
                  <span className="text-xs mt-1 text-gray-400">Referrals</span>
               </a>
               <a className="flex w-1/5 p-[12px] flex-col items-center" to="/">
                  <img alt="wallet Icon" loading="lazy" width="20" height="20" decoding="async" src="/upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
                  <span className="text-xs mt-1 text-green-500">Wallet</span>
               </a>

            </div>
         </div>
      </div>
   );
};

export default Dashboard;