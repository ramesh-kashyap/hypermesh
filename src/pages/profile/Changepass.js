import React from 'react';

const Changepass = () => {
    return (
        <div id="__next">
            <div className="Toastify"></div>
            <div className="w-full h-screen bg-gray-100 flex justify-center">
                <div className="w-full max-w-[1920px] flex bg-white shadow-lg">
                    <div className="hidden max-h-screen md:flex flex-col text-black transition-all duration-300 justify-between w-[264px]">
                        <div>
                            <div className="flex items-center justify-between border-b border-gray-200">
                                <a className="flex items-center py-5 pl-[22px] h-[80px]" href="/dashboard" style={{ width: '119px' }}>
                                    <img alt="Logo" loading="lazy" width="163" height="40" decoding="async" src="/upnl/assets/icons/logo.png" style={{ color: 'transparent', width: '150px' }} />
                                </a>
                            </div>

                            <nav className="my-5 px-5 text-sm font-medium text-[#555]">
                                <div className="text-gray-400 text-xs mb-2">MENU</div>
                                <a className="flex items-center py-2 px-3 mb-2 rounded-md bg-green-500 text-white" href="/dashboard">
                                    <img alt="overview Icon" loading="lazy" width="16" height="16" decoding="async" src="/upnl/assets/icons/icon-overview_active.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Overview</span>
                                </a>
                                <a className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100" href="/Nodepower">
                                    <img alt="my_nodes Icon" loading="lazy" width="16" height="16" decoding="async" src="/upnl/assets/icons/icon-nodes.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Nodes</span>
                                </a>
                                <a className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100" href="/Team">
                                    <img alt="referrals Icon" loading="lazy" width="16" height="16" decoding="async" src="/upnl/assets/icons/icon-referrals.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Referrals</span>
                                </a>
                                <a className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100" href="/Wallet">
                                    <img alt="wallet Icon" loading="lazy" width="16" height="16" decoding="async" src="/upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Wallet</span>
                                </a>
                                <a className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100" href="/Profile">
                                    <img alt="profile Icon" loading="lazy" width="16" height="16" decoding="async" src="/upnl/assets/icons/icon-profile.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Profile</span>
                                </a>
                            </nav>
                        </div>
                        <footer className="my-5 px-5 text-sm font-medium text-[#555] hidden md:block">
                            <div className="text-gray-400 text-xs mb-2">FOLLOW US</div>
                            <a className="flex items-center py-2 px-3 mb-4 rounded" href="#">
                                <img alt="X.com Icon" loading="lazy" width="16" height="16" decoding="async" src="/upnl/assets/icons/icon_twitter.svg" style={{ color: 'transparent' }} />
                                <span className="ml-4">X.com</span>
                            </a>
                            <a className="flex items-center py-2 px-3 mb-4 rounded" href="#">
                                <img alt="Telegram Icon" loading="lazy" width="16" height="16" decoding="async" src="/upnl/assets/icons/icon_telegram_2.svg" style={{ color: 'transparent' }} />
                                <span className="ml-4">Telegram</span>
                            </a>
                            <a className="flex items-center py-2 px-3 mb-4 rounded" href="#">
                                <img alt="Discord Icon" loading="lazy" width="16" height="16" decoding="async" src="/upnl/assets/icons/icon_discord.svg" style={{ color: 'transparent' }} />
                                <span className="ml-4">Discord</span>
                            </a>
                            <div style={{ borderTop: '1px solid rgb(241, 241, 241)', margin: '20px 0px' }}></div>
                            <div>
                                <a className="flex items-center py-2 px-3 mb-4 rounded" href="logout" onClick={(e) => { e.preventDefault(); document.getElementById('logout-form').submit(); }}>
                                    <img alt="Contact Us Icon" loading="lazy" width="16" height="16" decoding="async" src="/upnl/assets/icons/customer-service.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Log out</span>
                                </a>
                                <form id="logout-form" action="logout" method="POST" className="d-none">
                                    <input type="hidden" name="_token" value="Mp8WGPpkCtxtvkezkpwvKGFaP8ckS5wUjCIsgRln" />
                                </form>
                            </div>
                        </footer>
                    </div>
                    <div className="flex-1 flex flex-col text-black bg-[#F1F1F1] h-screen">
                        <div className="flex items-center justify-between py-2 mt-5 px-4 md:px-10 lg:px-10 xl:px-20">
                            <a className="md:hidden" href="/">
                                <img alt="Logo" loading="lazy" width="163" height="40" decoding="async" className="max-w-[156px]" src="/upnl/assets/icons/logo.png" style={{ color: 'transparent', width: '50px' }} />
                            </a>
                            <div className="w-full flex flex-row justify-end md:justify-between">
                                <div className="flex items-center h-[38px] text-gray-800 font-medium">
                                    <a className="hidden md:flex h-[38px] bg-white p-1 rounded-full mr-3" href="user/team">
                                        <div className="flex items-center rounded-full pl-3 text-sm">
                                            <img alt="User  Avatar" loading="lazy" width="16" height="16" decoding="async" className="mr-3" src="/upnl/assets/icons/icon_user_add.svg" style={{ color: 'transparent' }} />
                                            <span>11223344</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="relative flex items-center space-x-2 font-semibold">
                                    <span className="hidden lg:inline text-xl">Hello, Bernila!</span>
                                    <button>
                                        <div className="flex items-center justify-center w-[40px] h-[38px] rounded-full mx-auto text-[24px] font-semibold" style={{ backgroundColor: '#0093E9', backgroundImage: 'linear-gradient(315deg, #0093E9 0%, #80D0C7 100%)' }}>B</div>
                                    </button>
                                    <div className="hidden md:inline-block">
                                        <div className="relative inline-block text-[16px] font-bold">
                                            <button className="flex p-2 items-center bg-white border justify-center align-center h-[38px] w-[60px] rounded-[20px] hover:bg-gray-200 focus:outline-none">EN</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">
                            <div className="w-full mt-10 flex justify-center text-primary">
                                <div className="max-w-[1920px] w-full">
                                    <div className="w-full relative max-w-[669px] pb-[46px] text-center pt-[36px] bg-[#FFF] rounded-[16px] mx-auto mt-[100px]">
                                        <div className="w-[100px] h-[100px] rounded-full mx-auto text-[72px] font-semibold" style={{ background: '#2da9dd', fontFamily: 'ClashDisplay-Semibold' }}>B</div>
                                        <a href="user/ChangeMail" className="absolute right-10 top-10" id="profileShow">
                                            <img alt="Edit Icon" loading="lazy" width="28" height="28" decoding="async" src="/upnl/assets/icons/icon-referrals.svg" style={{ color: 'transparent' }} />
                                        </a>
                                        <div className="mx-auto w-full text-primary text-[28px] font-semibold" style={{ fontFamily: 'ClashDisplay-Semibold' }}>Bernila!</div>
                                        <div className="mx-auto w-full text-secondary text-sm mb-[60px]">kumar@gmail.com!</div>
                                        <div className="flex flex-wrap md:flex-nowrap mx-auto w-full justify-center">
                                            <button className="rounded-[30px] h-[48px] py-3 px-6 bg-[#F1F1F1] md:mr-2 mb-2" id="show">Login Password</button>
                                            <a className="rounded-[30px] h-[48px] py-3 px-6 bg-[#F1F1F1] md:mr-2 flex items-center justify-center" href="user/tpassword">Change Trx Password</a>
                                        </div>
                                    </div>

                                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" style={{ display: 'none' }} id="popup">
                                        <form method="post" action="user/edit-password">
                                            <input type="hidden" name="_token" value="Mp8WGPpkCtxtvkezkpwvKGFaP8ckS5wUjCIsgRln" />
                                            <div className="bg-white rounded-[20px] w-[400px] px-8 pt-10 pb-6 text-center relative">
                                                <h2 className="text-lg font-semibold">Change Password</h2>
                                                <div className="mb-4 mt-8 text-left">
                                                    <label className="block text-gray-600 mb-1">Email</label>
                                                    <input type="text" placeholder="Please enter the new password" value="kumar@gmail.com" id="emailId" name="emailId" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" />
                                                </div>
                                                <div className="mb-4 mt-8 text-left">
                                                    <label className="block text-gray-600 mb-1">Verification Code</label>
                                                    <div className="input-container" style={{ position: 'relative', width: '100%' }}>
                                                        <input type="text" name="code" placeholder="Enter verification code" className="w-full px-3 py-2 border border-gray-300 rounded-[12px] pr-20" style={{ width: '100%' }} />
                                                        <span className="code-btn" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: 'gray' }}>Get Code</span>
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
                                                    <button className="w-full h-[46px] mb-2 px-4 py-2 rounded-[30px] bg-black text-white">Confirm</button>
                                                    <a href="user/profile-setting" className="w-full h-[46px] px-4 py-2 rounded-[30px] bg-gray-300 inline-block text-center">Cancel</a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" id="popup2" style={{ display: 'none' }}>
                                        <div className="bg-white rounded-[20px] w-[400px] px-8 pt-10 pb-6 text-center relative">
                                            <h2 className="text-lg font-semibold">Edit Profile</h2>
                                            <div className="w-[100px] my-10 h-[100px] mx-auto cursor-pointer">
                                                <div className="w-full h-full rounded-full mx-auto text-[72px] font-semibold" style={{ background: 'rgb(51, 87, 255)', fontFamily: 'ClashDisplay-Semibold' }}>R</div>
                                            </div>
                                            <div className="mb-4 text-left">
                                                <label className="block text-gray-600 mb-1">Name</label>
                                                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" placeholder="Enter Full Name" value="Rajnesh Kumar" />
                                            </div>
                                            <div className="mt-10">
                                                <button className="w-full h-[46px] mb-2 px-4 py-2 rounded-[30px] bg-black text-white">Save</button>
                                                <button className="w-full h-[46px] px-4 py-2 rounded-[30px] bg-gray-300" id="profileHide">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fixed bottom-0 w-full bg-white flex md:hidden justify-around shadow-lg">
                        <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/dashboard">
                            <img alt="overview Icon" loading="lazy" width="20" height="20" decoding="async" src="/upnl/assets/icons/icon-overview.svg" style={{ color: 'transparent' }} />
                            <span className="text-xs mt-1 text-gray-400">Overview</span>
                        </a>
                        <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/node-power">
                            <img alt="my_nodes Icon" loading="lazy" width="20" height="20" decoding="async" src="/upnl/assets/icons/icon-nodes.svg" style={{ color: 'transparent' }} />
                            <span className="text-xs mt-1 text-gray-400">Nodes</span>
                        </a>
                        <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/team">
                            <img alt="referrals Icon" loading="lazy" width="20" height="20" decoding="async" src="/upnl/assets/icons/icon-referrals.svg" style={{ color: 'transparent' }} />
                            <span className="text-xs mt-1 text-gray-400">Referrals</span>
                        </a>
                        <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/wallet">
                            <img alt="wallet Icon" loading="lazy" width="20" height="20" decoding="async" src="/upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
                            <span className="text-xs mt-1 text-green-500">Wallet</span>
                        </a>
                        <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/profile-setting">
                            <img alt="wallet Icon" loading="lazy" width="20" height="20" decoding="async" src="/upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
                            <span className="text-xs mt-1 text-green-500">Profile</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Changepass;