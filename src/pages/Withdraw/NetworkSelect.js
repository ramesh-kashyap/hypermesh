import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const NetworkSelect = () => {
    return (
        <div id="__next">
            <div className="Toastify"></div>
            <div className="w-full h-screen bg-gray-100 flex justify-center">
                <div className="w-full max-w-[1920px] flex bg-white shadow-lg">
                    <div className="hidden max-h-screen md:flex flex-col text-black transition-all duration-300 justify-between w-[264px]">
                        <div>
                            <div className="flex items-center justify-between border-b border-gray-200">
                                <Link className="flex items-center py-5 pl-[22px] h-[80px]" to="/dashboard" style={{ width: '119px' }}>
                                    <img alt="Logo" loading="lazy" width="163" height="40" src="/upnl/assets/icons/logo.png" style={{ color: 'transparent', width: '150px' }} />
                                </Link>
                            </div>
                            <nav className="my-5 px-5 text-sm font-medium text-[#555]">
                                <div className="text-gray-400 text-xs mb-2">MENU</div>
                                <Link className="flex items-center py-2 px-3 mb-2 rounded-md bg-green-500 text-white" to="/dashboard">
                                    <img alt="overview Icon" loading="lazy" width="16" height="16" src="/upnl/assets/icons/icon-overview_active.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Overview</span>
                                </Link>
                                <Link className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100" to="/Nodepower">
                                    <img alt="my_nodes Icon" loading="lazy" width="16" height="16" src="/upnl/assets/icons/icon-nodes.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Nodes</span>
                                </Link>
                                <Link className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100" to="/Team">
                                    <img alt="referrals Icon" loading="lazy" width="16" height="16" src="/upnl/assets/icons/icon-referrals.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Referrals</span>
                                </Link>
                                <Link className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100" to="/Wallet">
                                    <img alt="wallet Icon" loading="lazy" width="16" height="16" src="/upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Wallet</span>
                                </Link>
                                <Link className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100" to="/Profile">
                                    <img alt="profile Icon" loading="lazy" width="16" height="16" src="/upnl/assets/icons/icon-profile.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Profile</span>
                                </Link>
                            </nav>
                        </div>
                        <footer className="my-5 px-5 text-sm font-medium text-[#555] hidden md:block">
                            <div className="text-gray-400 text-xs mb-2">FOLLOW US</div>
                            <a className="flex items-center py-2 px-3 mb-4 rounded" href="#">
                                <img alt="X.com Icon" loading="lazy" width="16" height="16" src="/upnl/assets/icons/icon_twitter.svg" style={{ color: 'transparent' }} />
                                <span className="ml-4">X.com</span>
                            </a>
                            <a className="flex items-center py-2 px-3 mb-4 rounded" href="#">
                                <img alt="Telegram Icon" loading="lazy" width="16" height="16" src="/upnl/assets/icons/icon_telegram_2.svg" style={{ color: 'transparent' }} />
                                <span className="ml-4">Telegram</span>
                            </a>
                            <a className="flex items-center py-2 px-3 mb-4 rounded" href="#">
                                <img alt="Discord Icon" loading="lazy" width="16" height="16" src="/upnl/assets/icons/icon_discord.svg" style={{ color: 'transparent' }} />
                                <span className="ml-4">Discord</span>
                            </a>
                            <div style={{ borderTop: '1px solid rgb(241, 241, 241)', margin: '20px 0px' }}></div>
                            <div>
                                <a className="flex items-center py-2 px-3 mb-4 rounded" href="logout" onClick={(e) => { e.preventDefault(); document.getElementById('logout-form').submit(); }}>
                                    <img alt="Contact Us Icon" loading="lazy" width="16" height="16" src="/upnl/assets/icons/customer-service.svg" style={{ color: 'transparent' }} />
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
                            <Link className="md:hidden" to="/">
                                <img alt="Logo" loading="lazy" width="163" height="40" className="max-w-[156px]" src="/upnl/assets/icons/logo.png" style={{ color: 'transparent', width: '50px' }} />
                            </Link>
                            <div className="w-full flex flex-row justify-end md:justify-between">
                                <div className="flex items-center h-[38px] text-gray-800 font-medium">
                                    <Link className="hidden md:flex h-[38px] bg-white p-1 rounded-full mr-3" to="/user/team">
                                        <div className="flex items-center rounded-full pl-3 text-sm">
                                            <img alt="User  Avatar" loading="lazy" width="16" height="16" className="mr-3" src="/upnl/assets/icons/icon_user_add.svg" style={{ color: 'transparent' }} />
                                            <span>11223344</span>
                                        </div>
                                    </Link>
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
                            <div className="bg-blue-100 text-blue-800 p-4 rounded-md mb-6">
                                <p>Please verify your account to receive free <b>BNB</b> (used for rewards claiming fee). <Link className="font-bold" to="/wallet/withdraw#">Verify Now!</Link></p>
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <span className="text-white text-sm rounded-[22px] h-[33px] px-3 bg-black mb-4 mt-10 flex items-center space-x-2 cursor-pointer">
                                        <img alt="Back Icons" loading="lazy" width="17" height="12" src="/upnl/assets/icons/icon-back.svg" style={{ color: 'transparent' }} />
                                        <span>Back</span>
                                    </span>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 gap-6">
                                    <div className="lg:col-span-3 xl:col-span-2 bg-white rounded-[16px] p-6">
                                        <h2 className="text-xl sm:text-2xl font-bold">Withdraw</h2>
                                        <div className="flex justify-between items-center w-full bg-[#F9F9F9] rounded-[27px] px-[40px] max-sm:px-[20px] py-[4px] max-sm:py-[10px] text-[14px] text-[#999999] my-4 sm:my-6 sm:py-6 max-sm:gap-0">
                                            <span className="text-center text-[#171717] cursor-pointer">Select token</span>
                                            <img alt="right-arrow" loading="lazy" width="30" height="30" src="/upnl/assets/icons/right-arrow.svg" style={{ color: 'transparent' }} />
                                            <span className="text-center">Withdraw details</span>
                                        </div>
                                        <br /><br />
                                        <div>
                                            <div onClick={() => window.location.href='/Withdraw'} className="flex items-center justify-between bg-[#F9F9F9] h-[72px] mb-2 p-[15px] rounded-[16px] cursor-pointer hover:bg-[#ebe8e8]">
                                                <div className="py-4 flex items-center space-x-2 lg:space-x-3 text-sm">
                                                    <img alt="USDT logo" loading="lazy" width="40" height="40" src="/upnl/assets/icons/logo_usdt_2.svg" style={{ color: 'transparent' }} />
                                                    <div>
                                                        <div className="text-[16px] text-[#171717] font-semibold">USDT</div>
                                                        <div className="text-[12px] text-[#999999]">TetherUS</div>
                                                    </div>
                                                </div>
                                                <img alt="USDT logo" loading="lazy" width="20" height="20" src="/upnl/assets/icons/right-repo.svg" style={{ color: 'transparent' }} />
                                            </div>
                                        </div>
                                        <br /><br />
                                    </div>
                                    <div className="bg-white rounded-[16px] p-6 lg:col-span-2 xl:col-span-1">
                                        <h3 className="font-semibold mb-3">History</h3>
                                        <div className="space-y-4 h-full">
                                            <div className="flex h-full justify-center items-center w-full text-secondary">
                                                <div className="w-full text-center">
                                                    <img alt="Icon Empty" loading="lazy" width="64" height="40" className="mx-auto mb-2" src="/upnl/assets/images/empty_state.svg" style={{ color: 'transparent' }} />
                                                    <span>No transactions found</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fixed bottom-0 w-full bg-white flex md:hidden justify-around shadow-lg">
                    <Link className="flex w-1/5 p-2 sm:p-[12px] flex-col items-center" to="/">
                        <img alt="overview Icon" loading="lazy" width="20" height="20" src="/upnl/assets/icons/icon-overview.svg" style={{ color: 'transparent' }} />
                        <span className="text-xs mt-1 text-gray-400">Overview</span>
                    </Link>
                    <Link className="flex w-1/5 p-2 sm:p-[12px] flex-col items-center" to="/nodes">
                        <img alt="my_nodes Icon" loading="lazy" width="20" height="20" src="/upnl/assets/icons/icon-nodes.svg" style={{ color: 'transparent' }} />
                        <span className="text-xs mt-1 text-gray-400">Nodes</span>
                    </Link>
                    <Link className="flex w-1/5 p-2 sm:p-[12px] flex-col items-center" to="/rewards">
                        <img alt="rewards Icon" loading="lazy" width="20" height="20" src="/upnl/assets/icons/icon-rewards.svg" style={{ color: 'transparent' }} />
                        <span className="text-xs mt-1 text-gray-400">Rewards</span>
                    </Link>
                    <Link className="flex w-1/5 p-2 sm:p-[12px] flex-col items-center" to="/referrals">
                        <img alt="referrals Icon" loading="lazy" width="20" height="20" src="/upnl/assets/icons/icon-referrals.svg" style={{ color: 'transparent' }} />
                        <span className="text-xs mt-1 text-gray-400">Referrals</span>
                    </Link>
                    <Link className="flex w-1/5 p-2 sm:p-[12px] flex-col items-center" to="/wallet">
                        <img alt="wallet Icon" loading="lazy" width="20" height="20" src="/upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
                        <span className="text-xs mt-1 text-gray-400">Wallet</span>
                    </Link>
                  
                </div>
            </div>
        </div>
    );
};

export default NetworkSelect;