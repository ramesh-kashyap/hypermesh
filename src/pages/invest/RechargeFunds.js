import React, { useState } from 'react';

const RechargeFunds = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isBinanceVisible, setBinanceVisible] = useState(false);
    const [isEthereumVisible, setEthereumVisible] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const toggleBinanceVisibility = () => {
        setBinanceVisible(!isBinanceVisible);
        setEthereumVisible(false); // Hide Ethereum when Binance is toggled
    };

    const toggleEthereumVisibility = () => {
        setEthereumVisible(!isEthereumVisible);
        setBinanceVisible(false); // Hide Binance when Ethereum is toggled
    };

    return (
        <div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">
            <div className="bg-blue-100 text-blue-800 p-4 rounded-md mb-6">
                <p>Please verify your account to receive free <b>BNB</b> (used for rewards claiming fee). <a className="font-bold" href="/wallet/deposit#">Verify Now!</a></p>
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
                        <h2 className="text-xl sm:text-2xl font-bold">Deposit</h2>
                        <div className="flex justify-between items-center w-full bg-[#F9F9F9] rounded-[27px] px-[40px] max-sm:px-[20px] py-[4px] max-sm:py-[10px] text-[14px] text-[#999999] my-4 sm:my-6 sm:py-6 max-sm:gap-0">
                            <span className="text-center text-[#171717] cursor-pointer" onClick={toggleBinanceVisibility}>Select token</span>
                            <img alt="right-arrow" loading="lazy" width="30" height="30" src="/upnl/assets/icons/right-arrow.svg" style={{ color: 'transparent' }} />
                            <span className="text-center" onClick={toggleEthereumVisibility}>Select network</span>
                            <img alt="right-arrow" loading="lazy" width="30" height="30" src="/upnl/assets/icons/right-arrow-inactive.svg" style={{ color: 'transparent' }} />
                            <span className="text-center">Deposit details</span>
                        </div>
                        <br />
                        <div>
                            {/* Collapsed Div */}
                            <div className="flex items-center justify-between bg-[#F9F9F9] h-[72px] mb-2 p-[15px] rounded-[16px] cursor-pointer hover:bg-[#ebe8e8]" onClick={toggleCollapse}>
                                <div className="py-4 flex items-center space-x-2 lg:space-x-3 text-sm">
                                    <img alt="BNB logo" loading="lazy" width="40" height="40" src="/upnl/assets/icons/logo_bnb_2.svg" style={{ color: 'transparent' }} />
                                    <div>
                                        <div className="text-[16px] text-[#171717] font-semibold">BNB</div>
                                        <div className="text-[12px] text-[#999999]">BNB</div>
                                    </div>
                                </div>
                                <img alt="BNB logo" loading="lazy" width="20" height="20" src="/upnl/assets/icons/right-repo.svg" style={{ color: 'transparent' }} />
                            </div>

                            {/* Expanded Div */}
                            {!isCollapsed && (
                                <div className="flex items-center justify-between bg-[#F9F9F9] h-[120px] mb-2 p-[15px] rounded-[16px] cursor-pointer hover:bg-[#ebe8e8]" onClick={toggleCollapse}>
                                    <div className="py-4 flex items-start space-x-2 lg:space-x-3 text-sm">
                                        <img alt="BSC logo" loading="lazy" width="40" height="40" src="/upnl/assets/icons/logo_bsc_2.svg" style={{ color: 'transparent' }} />
                                        <div>
                                            <div className="text-[16px] text-[#171717] font-semibold mb-2">Binance Smart Chain</div>
                                            <div className="text-[12px] text-[#999999]">1 block confirmations</div>
                                            <div className="text-[12px] text-[#999999]">Estimated time up to 1 minute</div>
                                        </div>
                                    </div>
                                    <img alt="BSC logo" loading="lazy" width="20" height="20" src="/upnl/assets/icons/right-repo.svg" style={{ color: 'transparent' }} />
                                </div>
                            )}

                            {/* USDT Section */}
                            <div className="flex items-center justify-between bg-[#F9F9F9] h-[72px] mb-2 p-[15px] rounded-[16px] cursor-pointer hover:bg-[#ebe8e8]" onClick={toggleBinanceVisibility}>
                                <div className="py-4 flex items-center space-x-2 lg:space-x-3 text-sm">
                                    <img alt="USDT logo" loading="lazy" width="40" height="40" src="/upnl/assets/icons/logo_usdt_2.svg" style={{ color: 'transparent' }} />
                                    <div>
                                        <div className="text-[16px] text-[#171717] font-semibold">USDT</div>
                                        <div className="text-[12px] text-[#999999]">TetherUS</div>
                                    </div>
                                </div>
                                <img alt="USDT logo" loading="lazy" width="20" height="20" src="/upnl/assets/icons/right-repo.svg" style={{ color: 'transparent' }} />
                            </div>

                            {/* Hidden divs for Binance and Ethereum */}
                            {isBinanceVisible && (
                                <div className="flex items-center justify-between bg-[#F9F9F9] h-[120px] mb-2 p-[15px] rounded-[16px] cursor-pointer hover:bg-[#ebe8e8]">
                                    <div className="py-4 flex items-start space-x-2 lg:space-x-3 text-sm">
                                        <img alt="BSC logo" loading="lazy" width="40" height="40" src="/upnl/assets/icons/logo_bsc_2.svg" style={{ color: 'transparent' }} />
                                        <div>
                                            <div className="text-[16px] text-[#171717] font-semibold mb-2">Binance Smart Chain</div>
                                            <div className="text-[12px] text-[#999999]">1 block confirmations</div>
                                            <div className="text-[12px] text-[#999999]">Estimated time up to 1 minute</div>
                                        </div>
                                    </div>
                                    <img alt="BSC logo" loading="lazy" width="20" height="20" src="/upnl/assets/icons/right-repo.svg" style={{ color: 'transparent' }} />
                                </div>
                            )}
                            {isEthereumVisible && (
                                <div className="flex items-center justify-between bg-[#F9F9F9] h-[120px] mb-2 p-[15px] rounded-[16px] cursor-pointer hover:bg-[#ebe8e8]">
                                    <div className="py-4 flex items-start space-x-2 lg:space-x-3 text-sm">
                                        <img alt="ETH logo" loading="lazy" width="40" height="40" src="/upnl/assets/icons/logo_eth_2.svg" style={{ color: 'transparent' }} />
                                        <div>
                                            <div className="text-[16px] text-[#171717] font-semibold mb-2">Ethereum</div>
                                            <div className="text-[12px] text-[#999999]">1 block confirmations</div>
                                            <div className="text-[12px] text-[#999999]">Estimated time up to 2 minute</div>
                                        </div>
                                    </div>
                                    <img alt="ETH logo" loading="lazy" width="20" height="20" src="/upnl/assets/icons/right-repo.svg" style={{ color: 'transparent' }} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="bg-white rounded-[16px] p-6 lg:col-span-2 xl:col-span-1">
                        <h3 className="font-semibold mb-3">History</h3>
                        <div className="space-y-4 h-full">
                            <div className="flex justify-between items-center text-sm mb-4">
                                <div className="flex">
                                    <div className="flex items-center justify-center hover:cursor-pointer rounded-[50%] bg-[#F9F9F9] w-[44px] h-[44px]">
                                        <img alt="IN Icon" loading="lazy" width="28" height="28" src="/upnl/assets/icons/icon_down.svg" style={{ color: 'transparent' }} />
                                    </div>
                                    <div className="ml-3">
                                        <p className="font-medium mb-1">Deposit</p>
                                        <p className="text-secondary font-light text-xs">a month</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-green-500">+<span>0.039 BNB</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RechargeFunds;