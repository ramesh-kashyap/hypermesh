import React, { useEffect } from "react";
const Deposit = () => {
useEffect(() => {
// If you need to load external scripts or initialize libraries, you can do so here.
// For example, you might load the QR code library or any analytics scripts.
}, []);
return (
<>
{/* Include additional meta tags, links, and scripts as needed */}
{/* Main page content */}
<div id="next">
   <div className="Toastify"></div>
   <div className="w-full h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-[1920px] flex bg-white shadow-lg">
         {/* Sidebar */}
         {/* Main Content Area */}
         <div className="flex-1 flex flex-col text-black bg-[#F1F1F1] h-screen">
            <div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">
               <div className="bg-blue-100 text-blue-800 p-4 rounded-md mb-6">
                  <p>
                     Please verify your account to receive free <b>BNB</b> (used for rewards claiming fee).{" "}
                     <a className="font-bold" href="/wallet/deposit#">
                     Verify Now!
                     </a>
                  </p>
               </div>
               <div>
                  <div className="flex justify-between">
                     <span className="text-white text-sm rounded-[22px] h-[33px] px-3 bg-black mb-4 mt-10 flex items-center space-x-2 cursor-pointer">
                     <img
                     alt="Back Icons"
                     loading="lazy"
                     width="17"
                     height="12"
                     src="upnl/assets/icons/icon-back.svg"
                     style={{ color: "transparent" }}
                     />
                     <span>Back</span>
                     </span>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 gap-6">
                     {/* Deposit Section */}
                     <div className="lg:col-span-3 xl:col-span-2 bg-white rounded-[16px] p-6">
                        <h2 className="text-xl sm:text-2xl font-bold">Deposit</h2>
                        <div>
                           <div className="relative py-[20px] md:py-[30px]">
                              <div className="w-full h-[2px] bg-[#DFDFDF]"></div>
                              {/* 
                              <div
                                 className="absolute flex items-center gap-1 translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] bg-white px-2"
                                 >
                                 <img
                                 alt="BNB logo"
                                 loading="lazy"
                                 width="30"
                                 height="30"
                                 src="upnl/assets/icons/logo_bnb_2.svg"
                                 style={{ color: "transparent" }}
                                 />
                                 <span className="text-[20px] font-bold">BNB</span>
                              </div>
                              */}
                           </div>
                           <div class="bg-white rounded-lg shadow-lg p-10  w-full">
                              <div className="flex justify-between items-center w-full p-5 bg-[#F9F9F9] rounded-lg px-[40px] max-sm:px-[20px] py-[4px] max-sm:py-[10px] text-[14px] text-[#999999] my-4 sm:my-6 sm:py-6 max-sm:gap-0 p-20">
                                 <span className="text-center text-[#171717] cursor-pointer">Select token</span>
                                 <img
                                 alt="right-arrow"
                                 loading="lazy"
                                 width="30"
                                 height="30"
                                 src="./upnl/assets/icons/right-arrow.svg"
                                 style={{ color: "transparent" }}
                                 />
                                 <span className="text-center text-[#171717] cursor-pointer">Select network</span>
                                 <img
                                 alt="right-arrow"
                                 loading="lazy"
                                 width="30"
                                 height="30"
                                 src="upnl/assets/icons/right-arrow.svg"
                                 style={{ color: "transparent" }}
                                 />
                                 <span className="text-center text-[#171717] cursor-pointer">Deposit details</span>
                              </div>
                              <div  style={{ display: "flex", alignItems: "center", width: "100%", maxWidth: "600px" }}>
      {/* Left Line */}
      <div style={{ className:"bg-[#DFDFDF]", flexGrow: 1, height: "2px", backgroundColor: "#e5e5e5" }}></div>

      {/* USDT Content */}
      <div style={{ display: "flex", alignItems: "center", margin: "0 10px", flexShrink: 0 }}>
        <div style={{ padding: "10px", borderRadius: "50%" }}>
          <img 
            src="./upnl/assets/icons/logo_usdt_2.svg" 
            alt="USDT logo" 
            style={{ width: "24px", height: "24px" }} 
          />
        </div>
        <span style={{ marginLeft: "8px", fontWeight: "bold", color: "black" }}>USDT</span>
      </div>

      {/* Right Line */}
      <div style={{ flexGrow: 1, height: "2px", backgroundColor: "#e5e5e5" }}></div>
    </div>
                              <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-4 rounded-lg">
                                 {/* QR Code */}
                                 <img  style={{width:"150px",height:"150px"}}
                                    src="./upnl/assets/icons/download.png"
                                    alt="QR code for USDT address"
                                    className="w-24 h-24 md:w-36 md:h-36"
                                    />
                                 {/* Address & Copy Button */}
                                 <div className="mt-4 md:mt-0 ml-4 w-full md:w-[300px]">
                                    {/* Ethereum Logo & Label */}
                                    <div className="flex items-center mb-2">
                                       <img
                                          src="./upnl/assets/icons/logo_usdt_2.svg"
                                          alt="Ethereum logo"
                                          className="w-6 h-6"
                                          />
                                       <span className="ml-2 text-gray-700">Ethereum</span>
                                    </div>
                                    {/* Address Box */}
                                    <div className="bg-white p-2 ml-2 rounded-lg shadow-inner flex flex-wrap items-center gap-4">
                                       <div className="flex flex-col w-full md:w-auto">
                                          <p className="text-gray-700 text-sm">Your Address</p>
                                          <p className="text-gray-900 font-mono break-all">
                                             0x90eb978F722D541C830A9
                                          </p>
                                       </div>
                                       <button className="bg-blue-500 text-white py-1 px-4 rounded-lg  md:w-auto">
                                       Copy
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="flex justify-between items-center gap-4 w-full border mt-5 p-3 rounded-[20px]">
                              <img
                              alt="warning logo"
                              loading="lazy"
                              width="40"
                              height="40"
                              src="upnl/assets/icons/icon_warning_2.svg"
                              style={{ color: "transparent" }}
                              />
                              <p className="text-sm text-secondary">
                                 Important: Keep this page open until your deposit transaction is recorded. If it's not recorded, you can use our form to{" "}
                                 <a href="#" className="text-primary">
                                 submit it manually
                                 </a>.
                              </p>
                           </div>
                        </div>
                     </div>
                     {/* History Section */}
                     <div className="bg-white rounded-[16px] p-6 lg:col-span-2 xl:col-span-1">
                        <h3 className="font-semibold mb-3">History</h3>
                        <div className="space-y-4 h-full">
                           <div className="flex h-full justify-center items-center w-full text-secondary">
                              <div className="w-full text-center">
                                 <img
                                 alt="Icon Empty"
                                 loading="lazy"
                                 width="64"
                                 height="40"
                                 className="mx-auto mb-2"
                                 src="./upnl/assets/images/empty_state.svg"
                                 style={{ color: "transparent" }}
                                 />
                                 <span>No transactions found</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* End of Main Content Area */}
         </div>
      </div>
   </div>
</div>
</>
);
};
export default Deposit;