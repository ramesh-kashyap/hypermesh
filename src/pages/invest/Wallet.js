import React from 'react';

const Wallet = () => {
    return (
        <div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">
            <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 gap-6">
                <div className="lg:col-span-3 xl:col-span-2 flex flex-col">
                    <div className="bg-white rounded-[16px] p-6 lg:p-8">
                        <h2 className="text-[24px] font-semibold text-primary mb-8">My Balance</h2>
                        <div className="flex flex-col">
                            <div>
                                <p className="text-primary font-medium mb-2">Total Assets</p>
                                <p className="text-[30px] font-bold"><span>1,600.00 USDT</span></p>
                                <p className="text-secondary" style={{ paddingBottom: '10px' }}></p>
                            </div>
                            <div className="flex flex-row gap-2 items-end">
                                <a className="bg-black text-white h-[46px] px-6 py-2 rounded-[30px] flex flex-1 items-center justify-center" href="/RechargeFunds" style={{ color: 'black' }}>Deposit</a>
                                <a href="/withdrawReq">
                                    <button className="border border-black h-[46px] text-black px-6 py-2 rounded-[30px] flex flex-1 items-center justify-center">Withdraw</button>
                                </a>
                                {/* <a href="/Transferfund">
                                    <button className="border border-black h-[46px] text-black px-6 py-2 rounded-[30px] flex flex-1 items-center justify-center"
                                        onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#000000'; e.currentTarget.style.color = 'white'; }}
                                        onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>
                                        Transfer
                                    </button>
                                </a> */}
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-[16px] mt-6 p-6 lg:p-8 flex-1">
                        <h3 className="font-semibold mb-3">Assets</h3>
                        <table className="w-full">
                            <thead>
                                <tr className="text-secondary">
                                    <th className="text-left py-1 font-medium text-[12px]">Asset</th>
                                    <th className="text-right py-1 font-medium text-[12px]">Holdings</th>
                                    <th className="text-right py-1 font-medium text-[12px] hidden md:table-cell">Price</th>
                                    <th className="text-right py-1 font-medium text-[12px]"><span className="hidden md:inline-block">Total USD</span><span className="md:hidden">USD</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: 'POINT', holdings: 0, price: 'Coming Soon', total: 'Coming Soon', logo: 'logo_point_2.svg' },
                                    { name: 'MCC', holdings: 0, price: 'Coming Soon', total: 'Coming Soon', logo: 'logo_mcc_2.svg' },
                                    { name: 'Bitcoin', holdings: 0, price: '$98,482.30', total: '$0', logo: 'logo_btc_2.svg' },
                                    { name: 'USDT', holdings: 0, price: '$1.00', total: '$0', logo: 'logo_usdt_2.svg' },
                                    { name: 'BNB', holdings: 0, price: '$729.03', total: '$0', logo: 'logo_bnb_2.svg' },
                                ].map((asset, index) => (
                                    <tr className="border-t h-[72px]" key={index}>
                                        <td className="py-4 flex items-center space-x-2 lg:space-x-3 text-sm">
                                            <img alt={`${asset.name} logo`} loading="lazy" width="40" height="40" src={`upnl/assets/icons/${asset.logo}`} style={{ color: 'transparent' }} />
                                            <span>{asset.name}</span>
                                        </td>
                                        <td className="py-4 text-right text-sm"><span>{asset.holdings}</span></td>
                                        <td className="py-4 text-primary text-right text-sm hidden md:table-cell"><span className="text-secondary">{asset.price}</span></td>
                                        <td className="py-4 text-primary text-right text-sm">
                                            <div className="flex flex-col md:flex-row justify-end gap-1">
                                                <p><span>{asset.total}</span></p>
                                                <p className="block md:hidden text-secondary text-sm"><span>Price: {asset.price}</span></p>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="bg-white rounded-[16px] p-6 lg:col-span-2 xl:col-span-1">
                    <h3 className="font-semibold mb-3">History</h3>
                    <div className="space-y-4 h-full">
                        {[
                            { type: 'Deposit', amount: '+400', date: 'Wed, 18 Dec 2024 17:23:57', detailLink: '6762b7d5f05e8bbe38097901' },
                            { type: 'Deposit', amount: '+400', date: 'Wed, 18 Dec 2024 17:23:36', detailLink: '6762b7c0fcc1b0419704e35f' },
                            { type: 'Deposit', amount: '+400', date: 'Wed, 18 Dec 2024 15:40:33', detailLink: '67629f98eda21072d60ba436' },
                            { type: 'Deposit', amount: '+400', date: 'Wed, 18 Dec 2024 15:39:59', detailLink: '67629f77ce38d251870c3c07' },
                            { type: 'Deposit', amount: '+20', date: 'Wed, 18 Dec 2024 13:37:02', detailLink: '676282a651258d221d0d7a1c' },
                        ].map((history, index) => (
                            <div className="flex justify-between items-center text-sm mb-4" key={index}>
                                <div className="flex">
                                    <div className="flex items-center justify-center rounded-[50%] bg-[#F9F9F9] w-[44px] h-[44px]">
                                        <img alt="IN Icon" loading="lazy" width="28" height="28" src="/upnl/assets/icons/icon_down.svg" style={{ color: 'transparent' }} />
                                    </div>
                                    <div className="ml-3">
                                        <p className="font-medium">
                                            {history.type}
                                            <a target="_blank" href={`user/viewdetail/${history.detailLink}`} style={{ marginLeft: '10px', color: '#ffffff', textTransform: 'lowercase' }}>
                                                <i className="fa fa-share-alt" aria-hidden="true"></i>
                                            </a>
                                        </p>
                                        <p className="text-secondary font-light text-sm">{history.date}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-green-500"><span>{history.amount}</span></p>
                                </div>
                            </div>
                        ))}
                       
                    </div>
                </div>
            </div>
            {/* <div className="fixed bottom-0 w-full bg-white flex md:hidden justify-around shadow-lg">
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
                    <img alt="wallet Icon" loading="lazy" width="20" height="20" className="green-filter" src="/upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
                    <span className="text-xs mt-1 text-green-500">Wallet</span>
                </a>
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/profile-setting">
                    <img alt="wallet Icon" loading="lazy" width="20" height="20" className="green-filter" src="/upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
                    <span className="text-xs mt-1 text-green-500">Profile</span>
                </a>
            </div> */}
        </div>
    );
};

export default Wallet;