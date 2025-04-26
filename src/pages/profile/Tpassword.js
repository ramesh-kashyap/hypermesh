import React from 'react';

const Tpassword = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        // For example, you can send a POST request to the server
    };

    return (
        <div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">
            <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 gap-6">
                <div className="lg:col-span-3 xl:col-span-2 flex flex-col">
                    <div className="bg-white rounded-[16px] mt-6 p-6 lg:p-8 flex-1">
                        <center>
                            <h3 className="font-semibold mb-3">Change Transaction Password</h3>
                        </center>
                        <form method="post" action="user/change-trxpasswword" onSubmit={handleSubmit}>
                            <input type="hidden" name="_token" value="KKX0De0b1aF69ZyhV4ctcUqPaDEGxVrpSEIoZILh" />
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                <input type="email" name="email" readOnly value="kumar@gmail.com" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="code" className="block text-gray-700 font-medium mb-2">Verification Code</label>
                                <div className="input-container" style={{ position: 'relative', width: '100%' }}>
                                    <input type="text" name="code" placeholder="Enter verification code" className="w-full px-3 py-2 border border-gray-300 rounded-[12px] pr-20" />
                                    <span className="code-btn" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: 'gray' }}>
                                        Get Code
                                    </span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Transaction Password</label>
                                <input type="password" id="password" name="password" placeholder="Please enter the new password" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password_confirmation" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
                                <input type="password" id="password_confirmation" name="password_confirmation" placeholder="Enter the password again to confirm" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" />
                            </div>
                            <div className="text-right">
                                <button type="submit" style={{ backgroundColor: '#0093E9', backgroundImage: 'linear-gradient(315deg, #0093E9 0%, #80D0C7 100%)' }} className="w-full h-[46px] px-4 py-2 rounded-[30px] text-white">
                                    Confirm
                                </button>
                                <br />
                                <br />
                                <a href="user/profile-setting" className="w-full h-[46px] px-4 py-2 rounded-[30px] bg-gray-300 inline-block text-center">
                                    Cancel
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
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
                    <img alt="profile Icon" loading="lazy" width="20" height="20" src="/upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
                    <span className="text-xs mt-1 text-green-500">Profile</span>
                </a>
            </div>
        </div>
    );
};

export default Tpassword;