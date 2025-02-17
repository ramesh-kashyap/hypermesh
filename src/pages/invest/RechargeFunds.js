import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { QRCodeCanvas } from "qrcode.react";
import { Toaster, toast } from "react-hot-toast";

import axios from "axios";
import Api from "../../Requests/Api";
const RechargeFunds = () => {
    const [users, setUsers] = useState([]); // ✅ Always start with an empty array
    const [error, setError] = useState("");
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isBinanceVisible, setBinanceVisible] = useState(false);
    const [isEthereumVisible, setEthereumVisible] = useState(false);
    const [blockchain, setBlockchain] = useState("BSC");
    const [walletAddress, setWalletAddress] = useState("");
    const [walletTrxAddress, setTRONWalletAddress] = useState("");
    const [copied, setCopied] = useState(false);
    const [copied2, setCopied2] = useState(false);
    
    useEffect(() => {
        fetchUsers();
        
    }, []);
    
    const fetchUsers = async () => {
        try {
            const response = await Api.get("auth/deposit-History");
    
            if (response.data && Array.isArray(response.data.data)) {
                setUsers(response.data.data);
            } else {
                setUsers([]); 
            }
    
            console.log(response.data);
    
    
            console.log(response.data.data);
        } catch (err) {
            setError(err.response?.data?.error || "Error fetching income");
        }
    };

   

    const toggleCollapse = async (blockchain,isClose) => {

        if (isClose) {
            try {
                const response = await Api.post('auth/recharge', { blockchain});
                if (response.data.status) 
                    {
                        setBlockchain(response.data.blockchain);
                        setWalletAddress(response.data.wallet);
                   }
                
            } catch (error) {
                console.error("Error generating payment");
            }   
        }
        
        
        setIsCollapsed(!isCollapsed)
    };

    const toggleBinanceVisibility = async (blockchain,isClose) => {

        if (isClose) {
            try {
                const response = await Api.post('auth/recharge', { blockchain});
                if (response.data.status) 
                    {
                        setBlockchain(response.data.blockchain);
                        setTRONWalletAddress(response.data.wallet);
                   }
                
            } catch (error) {
                console.error("Error generating payment");
            }   
        }

        
        setBinanceVisible(!isBinanceVisible);
        setEthereumVisible(false); // Hide Ethereum when Binance is toggled
    };

    const toggleEthereumVisibility = () => {
        setEthereumVisible(!isEthereumVisible);
        setBinanceVisible(false); // Hide Binance when Ethereum is toggled
    };

 

    const copyToClipboard = () => {
        navigator.clipboard.writeText(walletAddress).then(() => {
            setCopied(true);
                toast.success("Copied!");
            setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
        });
    };

    const copyToClipboardTrx = () => {
        navigator.clipboard.writeText(walletTrxAddress).then(() => {
            setCopied2(true);
                toast.success("Copied!");
            setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
        });
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
            weekday: "short", // Includes day of the week (e.g., Mon, Tue)
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false // Ensures 24-hour format
        }).replace(",", ""); // Remove comma for a cleaner format
    };
    return (
        <div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">
            <div className="bg-blue-100 text-blue-800 p-4 rounded-md mb-6">
                <p>Please verify your account to receive free <b>BNB</b> (used for rewards claiming fee). <a className="font-bold" href="/wallet/deposit#">Verify Now!</a></p>
            </div>
            <div>
                <div className="flex justify-between">
                    <span className="text-white text-sm rounded-[22px] h-[33px] px-3 bg-black mb-4 mt-10 flex items-center space-x-2 cursor-pointer">

                        <img alt="Back Icons" loading="lazy" width="17" height="12" src="/upnl/assets/icons/icon-back.svg" style={{ color: '#fff' }} />
                        <Link to='/Wallet'>
                            <span style={{ color: '#fff' }}>Back</span>
                        </Link>
                    </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 gap-6">
                    <div className="lg:col-span-3 xl:col-span-2 bg-white rounded-[16px] p-6">
                        <h2 className="text-xl sm:text-2xl font-bold">Deposit</h2>
                        <br></br>
                        <div className="flex justify-between items-center w-full bg-[#F9F9F9] rounded-[27px] px-[40px] max-sm:px-[20px] py-[4px] max-sm:py-[10px] text-[14px] text-[#999999] my-4 sm:my-6 sm:py-6 max-sm:gap-0">
                            <span className="text-center text-[#171717] cursor-pointer"  onClick={() => toggleBinanceVisibility('BSC', false)} >Select token</span>
                            <img alt="right-arrow" loading="lazy" width="30" height="30" src="/upnl/assets/icons/right-arrow-inactive.svg" style={{ color: 'transparent' }} />
                            <span className="text-center">Deposit details</span>
                        </div>
                        <br />
                        <div>
                            {/* Collapsed Div */}
                            <div className="flex items-center justify-between bg-[#F9F9F9] h-[72px] mb-2 p-[15px] rounded-[16px] cursor-pointer hover:bg-[#ebe8e8]" onClick={() => toggleCollapse('BSC', true)}>
                                <div className="py-4 flex items-center space-x-2 lg:space-x-3 text-sm">
                                    <img alt="BNB logo" loading="lazy" width="40" height="40" src="/upnl/assets/icons/bnb-logo.png" style={{ color: 'transparent', marginLeft: '10px', width: '36px' }} />
                                    <div>
                                        <div className="text-[16px] text-[#171717] font-semibold">USDT (BEP20)</div>
                                        <div className="text-[12px] text-[#999999]">Binance Smart Chain</div>
                                    </div>
                                </div>
                                <img alt="BNB logo" loading="lazy" width="20" height="20" src="/upnl/assets/icons/right-repo.svg" style={{ color: 'transparent' }} />
                            </div>

                            {/* Expanded Div */}
                            {!isCollapsed && (
                                <div className="flex items-center justify-between bg-[#F9F9F9] h-[120px] mb-2 p-[15px] rounded-[16px]  hover:bg-[#ebe8e8]">
                                    <div className="py-4 flex items-start space-x-2 lg:space-x-3 text-sm" style={{ marginLeft: '10px' }}>

                                        <div>
                                            {/* Separator Line with BNB Label */}
                                            <div className="relative py-[20px] md:py-[30px]">
                                                <div className="w-full h-[2px] bg-[#DFDFDF]"></div>
                                                <div className="absolute flex items-center gap-1 translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] bg-white px-2">
                                                    <img
                                                        alt="BNB logo"
                                                        loading="lazy"
                                                        width="30"
                                                        height="30"
                                                        decoding="async"
                                                        src="/upnl/assets/icons/bnb-logo.png"
                                                        style={{ color: "transparent",width:'30px' }}
                                                    />
                                                    <span className="text-[20px] font-bold">BNB CHAIN</span>
                                                </div>
                                            </div>

                                            {/* Deposit Section */}
                                            <div className="flex flex-col items-center">
                                                <div className="grid grid-cols-3 gap-4 w-full mt-5 p-6 bg-[#F9F9F9] rounded-[20px]">
                                                    <div className="col-span-3 text-center text-[#999999] text-[14px]">
                                                    <center>
                                                        Send BNB tokens to the QR code or address below.
                                                        </center>
                                                    </div>

                                                    {/* QR Code */}
                                                    <div className="col-span-2 md:col-span-1">
                                          
                                                    <center>  <QRCodeCanvas value={walletAddress} size={200} align /> </center>
                                                    </div>

                                                    {/* Network & Address Section */}
                                                    
                                                    <div className="col-span-3 md:col-span-2 h-full flex flex-col justify-start gap-4">
                                                        {/* Network Information */}
                                                        <div className="bg-white p-4 w-full rounded-[20px]">
                                                            <p className="text-secondary text-[14px] font-medium pb-[7px]">Network</p>
                                                            <div className="flex items-center justify-start gap-2">
                                                                <img
                                                                    alt="BSC logo"
                                                                    loading="lazy"
                                                                    width="30"
                                                                    height="30"
                                                                    decoding="async"
                                                                    src="/upnl/assets/icons/logo_bnb_2.svg"
                                                                    style={{ color: "transparent" }}
                                                                />
                                                                Binance Smart Chain
                                                            </div>
                                                        </div>

                                                        {/* Wallet Address */}
                                                        <div className="bg-white p-4 w-full rounded-[20px] flex items-center justify-between">
                                                            <div
                                                                className="break-all text-secondary text-[14px] font-medium flex flex-col gap-1"
                                                                style={{ width: "calc(100% - 100px)" }}
                                                            >
                                                                <p>Your Address</p>
                                                                <p className="text-primary">
                                                                    {walletAddress}
                                                                </p>
                                                            </div>
                                                            <button type='button' className="bg-black min-w-[90px] h-[46px] rounded-[30px] text-white px-4 py-2"  onClick={copyToClipboard} style={{ color: "#fff" }}>
                                                            {copied ? "Copied!" : "Copy"}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Warning Section */}
                                            <div className="flex justify-between items-center gap-4 w-full border mt-5 p-3 rounded-[20px]">
                                                <img
                                                    alt="warning logo"
                                                    loading="lazy"
                                                    width="40"
                                                    height="40"
                                                    decoding="async"
                                                    src="/upnl/assets/icons/icon_warning_2.svg"
                                                    style={{ color: "transparent" }}
                                                />
                                                <p className="text-sm text-secondary">
                                                    Important: Keep this page open until your deposit transaction is
                                                    recorded. If it's not recorded, you can use our form to{" "}
                                                    {/* <a href="#" className="text-primary">
                                                        submit it manually
                                                    </a> */}
                                                    .
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* USDT Section */}
                            <div className="flex items-center justify-between bg-[#F9F9F9] h-[72px] mb-2 p-[15px] rounded-[16px] cursor-pointer hover:bg-[#ebe8e8]" onClick={() => toggleBinanceVisibility('TRON', true)}  >
                            <div className="flex items-center justify-between bg-[#F9F9F9] h-[72px] mb-2 p-[15px] rounded-[16px] cursor-pointer hover:bg-[#ebe8e8]" onClick={() => toggleBinanceVisibility('TRON', true)}  >
                                <div className="py-4 flex items-center space-x-2 lg:space-x-3 text-sm">
                                    <img alt="USDT logo" loading="lazy" width="40" height="40" src="/upnl/assets/icons/tron-logo.png" style={{ color: 'transparent', marginLeft: '10px', width: '40px' }} />
                                    <div>
                                        <div className="text-[16px] text-[#171717] font-semibold">USDT (TRC20)</div>
                                        <div className="text-[12px] text-[#999999]">Tron Blockchain</div>
                                    </div>
                                </div>
                                <img alt="USDT logo" loading="lazy" width="20" height="20" src="/upnl/assets/icons/right-repo.svg" style={{ color: 'transparent' }} />
                            </div>

                            {/* Hidden divs for Binance and Ethereum */}
                            {isBinanceVisible && (
                                <div className="flex items-center justify-between bg-[#F9F9F9] h-[120px] mb-2 p-[15px] rounded-[16px] cursor-pointer hover:bg-[#ebe8e8]"  >
                                <div className="flex items-center justify-between bg-[#F9F9F9] h-[120px] mb-2 p-[15px] rounded-[16px] cursor-pointer hover:bg-[#ebe8e8]"  >
                                <div className="py-4 flex items-start space-x-2 lg:space-x-3 text-sm" style={{ marginLeft: '10px' }}>

                                    <div>
                                        {/* Separator Line with BNB Label */}
                                        <div className="relative py-[20px] md:py-[30px]">
                                            <div className="w-full h-[2px] bg-[#DFDFDF]"></div>
                                            <div className="absolute flex items-center gap-1 translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] bg-white px-2">
                                                <img
                                                    alt="BNB logo"
                                                    loading="lazy"
                                                    width="30"
                                                    height="30"
                                                    decoding="async"
                                                    src="/upnl/assets/icons/tron-logo.png" 
                                                    style={{ color: "transparent",width:'37px' }}
                                                />
                                                <span className="text-[20px] font-bold">Tron </span>
                                            </div>
                                        </div>

                                        {/* Deposit Section */}
                                        <div className="flex flex-col items-center">
                                            <div className="grid grid-cols-3 gap-4 w-full mt-5 p-6 bg-[#F9F9F9] rounded-[20px]">
                                                <div className="col-span-3 text-center text-[#999999] text-[14px]">
                                                    Send Tron tokens to the QR code or address below.
                                                </div>

                                                {/* QR Code */}
                                                <div className="col-span-2 md:col-span-1">
                                                <center>  <QRCodeCanvas value={walletTrxAddress} size={200} align /> </center>
                                                <center>  <QRCodeCanvas value={walletTrxAddress} size={200} align /> </center>
                                                </div>

                                                {/* Network & Address Section */}
                                                <div className="col-span-3 md:col-span-2 h-full flex flex-col justify-start gap-4">
                                                    {/* Network Information */}
                                                    <div className="bg-white p-4 w-full rounded-[20px]">
                                                        <p className="text-secondary text-[14px] font-medium pb-[7px]">Network</p>
                                                        <div className="flex items-center justify-start gap-2">
                                                            <img
                                                                alt="BSC logo"
                                                                loading="lazy"
                                                                width="30"
                                                                height="30"
                                                                decoding="async"
                                                                src="/upnl/assets/icons/12114250.png"
                                                                src="/upnl/assets/icons/12114250.png"
                                                                style={{ color: "transparent" }}
                                                            />
                                                            Tron Blockchain
                                                            Tron Blockchain
                                                        </div>
                                                    </div>

                                                    {/* Wallet Address */}
                                                    <div className="bg-white p-4 w-full rounded-[20px] flex items-center justify-between">
                                                        <div
                                                            className="break-all text-secondary text-[14px] font-medium flex flex-col gap-1"
                                                            style={{ width: "calc(100% - 100px)" }}
                                                        >
                                                            <p>Your Address</p>
                                                            <p className="text-primary">
                                                                {walletTrxAddress}
                                                                {walletTrxAddress}
                                                            </p>
                                                        </div>
                                                        <button className="bg-black min-w-[90px] h-[46px] rounded-[30px] text-white px-4 py-2"  onClick={copyToClipboardTrx}  style={{ color: "#fff" }}>
                                                        {copied2 ? "Copied!" : "Copy"}
                                                        <button className="bg-black min-w-[90px] h-[46px] rounded-[30px] text-white px-4 py-2"  onClick={copyToClipboardTrx}  style={{ color: "#fff" }}>
                                                        {copied2 ? "Copied!" : "Copy"}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Warning Section */}
                                        <div className="flex justify-between items-center gap-4 w-full border mt-5 p-3 rounded-[20px]">
                                            <img
                                                alt="warning logo"
                                                loading="lazy"
                                                width="40"
                                                height="40"
                                                decoding="async"
                                                src="/upnl/assets/icons/icon_warning_2.svg"
                                                style={{ color: "transparent" }}
                                            />
                                            <p className="text-sm text-secondary">
                                                Important: Keep this page open until your deposit transaction is
                                                recorded. If it's not recorded, you can use our form to{" "}
                                                <a href="#" className="text-primary">
                                                    submit it manually
                                                </a>
                                                .
                                            </p>
                                        </div>
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
                        {users.length > 0 ? (
            users.map((user, index) => (
                            <div className="flex justify-between items-center text-sm mb-4" key={index}>
                                <div className="flex">
                                    <div className="flex items-center justify-center hover:cursor-pointer rounded-[50%] bg-[#F9F9F9] w-[44px] h-[44px]">
                                        <img alt="IN Icon" loading="lazy" width="28" height="28" src="/upnl/assets/icons/icon_down.svg" style={{ color: 'transparent' }} />
                                    </div>
                                    <div className="ml-3">
                                        <p className="font-medium mb-1">Deposit</p>
                                        <p className="text-secondary font-light text-xs">{formatDate(user.created_at)}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-green-500">+ $<span>{user.amount} </span></p>
                                </div>
                            </div>
                                     ))
                                    ) : (
                                        <p>No users found</p>
                                    )}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RechargeFunds;