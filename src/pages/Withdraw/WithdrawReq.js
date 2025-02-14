import React, { useState } from 'react';

const WithdrawReq = () => {
    const [amount, setAmount] = useState('');
    const [transactionPassword, setTransactionPassword] = useState('');
    const [paymentMode, setPaymentMode] = useState('USDT.TRC20');
    const [alertMessageVisible, setAlertMessageVisible] = useState(false);

    const validateAmount = (value) => {
        const amountValue = parseFloat(value);
        if (amountValue < 50) {
            setAlertMessageVisible(true);
        } else {
            setAlertMessageVisible(false);
        }
        setAmount(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({
            paymentMode,
            transactionPassword,
            amount,
        });
    };

    return (
        <div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">
            <div className="bg-blue-100 text-blue-800 p-4 rounded-md mb-6">
                <p>
                    Please verify your account to receive free <b>BNB</b> (used for rewards claiming fee).{' '}
                    <a className="font-bold" href="/wallet/withdraw#">Verify Now!</a>
                </p>
            </div>
            <div>
                <div className="flex justify-between">
                    <span className="text-white text-sm rounded-[22px] h-[33px] px-3 bg-black mb-4 mt-10 flex items-center space-x-2 cursor-pointer">
                        <img alt="Back Icons" loading="lazy" width="17" height="12" src="/upnl/assets/icons/icon-back.svg" />
                        <span>Back</span>
                    </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 gap-6">
                    <div className="lg:col-span-3 xl:col-span-2 bg-white rounded-[16px] p-6">
                        <h2 className="text-xl sm:text-2xl font-bold">Withdraw</h2>
                        <br /><br />
                        <div className="flex justify-between items-center w-full bg-[#F9F9F9] rounded-[27px] px-[40px] max-sm:px-[20px] py-[4px] max-sm:py-[10px] text-[14px] text-[#999999] my-4 sm:my-6 sm:py-6 max-sm:gap-0">
                            <span className="text-center text-[#171717] cursor-pointer">Select token</span>
                            <img alt="right-arrow" loading="lazy" width="30" height="30" src="/upnl/assets/icons/right-arrow.svg" />
                            <span className="text-center text-[#171717] cursor-pointer">Withdraw details</span>
                        </div>
                        <br />
                        <div className="w-full flex flex-col gap-3 md:gap-5">
                            <div className="relative py-[20px] md:py-[30px]">
                                <div className="w-full h-[2px] bg-[#DFDFDF]"></div>
                                <div className="absolute flex items-center gap-1 translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] bg-white px-2" style={{ marginLeft: '313px' }}>
                                    <img alt="USDT logo" loading="lazy" width="30" height="30" src="/upnl/assets/icons/logo_usdt_2.svg" />
                                    <span className="text-[20px] font-bold">USDT</span>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col gap-4">
                                    <div className="w-full flex flex-col gap-2">
                                        <label className="text-sm font-medium">Network</label>
                                        <div className="flex gap-3 rounded-2xl border border-[#F1F1F1] bg-white w-full items-center h-[65px] p-3 sm:p-5">
                                            <select className="w-full" name="paymentMode" value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)}>
                                                <option value="USDT.TRC20">USDT (TRC20)</option>
                                                <option value="USDT.BEP20">USDT (BEP20)</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-col gap-2">
                                        <label className="text-sm font-medium">Transaction Password</label>
                                        <div className="flex gap-3 rounded-2xl border border-[#F1F1F1] bg-white w-full items-center h-[65px] p-3 sm:p-5">
                                            <input
                                                name="transaction_password"
                                                className="w-full placeholder:text-muted-foreground placeholder:text-[#999999] text-sm md:text-base focus-visible:outline-none"
                                                placeholder="Transaction Password"
                                                type="password"
                                                value={transactionPassword}
                                                onChange={(e) => setTransactionPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="w-full flex flex-col gap-2">
                                            <label className="text-sm font-medium">Amount</label>
                                            <div className="flex gap-3 rounded-2xl border border-[#F1F1F1] bg-white w-full items-center h-[65px] p-3 sm:p-5">
                                                <div>
                                                    <input
                                                        id="amountInput"
                                                        className="w-full placeholder:text-muted-foreground placeholder:text-[#999999] text-sm md:text-base"
                                                        placeholder="Enter amount"
                                                        type="text"
                                                        inputMode="numeric"
                                                        value={amount}
                                                        onChange={(e) => validateAmount(e.target.value)}
                                                    />
                                                    {alertMessageVisible && (
                                                        <p id="alertMessage" style={{ color: 'red', fontSize: '14px' }}>
                                                            Minimum amount is 50 USDT.
                                                        </p>
                                                    )}
                                                </div>
                                                <div className="text-[#00C076] font-semibold cursor-pointer"></div>
                                            </div>
                                        </div>
                                        <div className="flex justify-end items-center pt-2">
                                            <div className="flex items-center gap-1 text-xs text-[#63728E] font-normal">
                                                <p>Available</p>
                                                <div className="flex items-center text-[#0E1A32] h-4"><span>0 USDT</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-[1px] bg-[#F1F1F1]"></div>
                                <div className="flex flex-col gap-2 px-0 sm:px-5">
                                    <div className="flex justify-between items-center">
                                        <p className="text-[#63728E] font-normal text-xs">Withdraw Fee</p>
                                        <div className="flex text-[#0E1A32] font-normal text-xs"><span>5%</span></div>
                                    </div>
                                    <div className="flex justify-between items-center h-6">
                                        <p className="text-[#63728E] font-normal text-xs">Received Amount</p>
                                        <div className="text-[#0E1A32] font-semibold text-base"><span>0 USDT</span></div>
                                    </div>
                                </div>
                                <div className="mt-8 w-full flex justify-end">
                                    <button type="submit" className="bg-black text-white px-4 py-2 rounded-lg submit-btn">
                                        Confirm
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="bg-white rounded-[16px] p-6 lg:col-span-2 xl:col-span-1">
                        <h3 className="font-semibold mb-3">History</h3>
                        <div className="space-y-4 h-full">
                            <div className="flex h-full justify-center items-center w-full text-secondary">
                                <div className="w-full text-center">
                                    <img alt="Icon Empty" loading="lazy" width="64" height="40" src="/upnl/assets/images/empty_state.svg" />
                                    <span>No transactions found</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WithdrawReq;