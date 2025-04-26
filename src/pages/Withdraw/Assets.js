import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Assets = () => {
    return (
        <div class="uni-body pages-assets-assets">
            <uni-app class="uni-app--showtabbar uni-app--maxwidth">
                <uni-page
                    data-page="pages/assets/assets">
                    <uni-page-wrapper>
                        <uni-page-body>
                            <uni-view data-v-248ca5b8=""
                                class="page">
                                <uni-view data-v-248ca5b8="" class="ellipse"></uni-view>
                                <uni-view
                                    data-v-248ca5b8="" class="page-title">Asset Management</uni-view>
                                <uni-view
                                    data-v-248ca5b8="" class="balance-card">
                                    <uni-view data-v-248ca5b8="" class="first">
                                        <uni-view
                                            data-v-248ca5b8="" class="balance-title">Your Balance
                                            (USDT)
                                        </uni-view>
                                    </uni-view>
                                    <uni-view data-v-248ca5b8="" class="second">
                                        <uni-view
                                            data-v-248ca5b8="" translate="no" class="balance-num">0.0000</uni-view>
                                        <uni-view
                                            data-v-248ca5b8="" translate="no" class="profit-num">
                                            +0.0000
                                            <uni-view
                                                data-v-248ca5b8=""
                                                class="today">Yesterday</uni-view>
                                        </uni-view>
                                    </uni-view>
                                    <uni-view
                                        data-v-248ca5b8="" class="third">
                                        <uni-view data-v-06ae08d2=""
                                            class="balance-btn">
                                            <Link to="/RechargeFunds" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '500', fontSize: '16px' }}>
                                                Deposit
                                            </Link><img data-v-06ae08d2="" src="/static/img/usdtdown.png"
                                                alt="" />
                                        </uni-view>
                                        <uni-view data-v-248ca5b8="" class="transfer"><img
                                            data-v-248ca5b8="" src="/static/img/transfer.png" alt="" /></uni-view>
                                        <uni-view
                                            data-v-06ae08d2="" class="balance-btn">  <Link to="/WithdrawReq" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '500', fontSize: '16px' }}>
                                                Withdraw
                                            </Link><img data-v-06ae08d2=""
                                                src="/static/img/usdtup.png" alt="" /></uni-view>
                                    </uni-view>
                                </uni-view>
                                <uni-view
                                    data-v-248ca5b8="" class="user-title">Earnings in the past 7 days</uni-view>
                                <uni-view
                                    data-v-248ca5b8="" class="income-box">
                                    <uni-view data-v-c3c2634e="" data-v-248ca5b8=""
                                        style={{ width: '400px', height: '200px', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}
                                        _echarts_instance_="ec_1744619586455">
                                        <div
                                            style={{ position: 'relative', width: '384px', height: '200px', padding: '0px', margin: '0px', borderWidth: '0px', cursor: 'default' }}>
                                            <canvas data-zr-dom-id="zr_0" width="384" height="200"
                                                style={{ position: 'absolute', left: '0px', top: '0px', width: '384px', height: '200px', userSelect: 'none', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', padding: '0px', margin: '0px', borderWidth: '0px' }}></canvas>
                                        </div>
                                    </uni-view>
                                </uni-view>
                                <uni-view data-v-248ca5b8="" class="user-title"
                                    style={{ marginTop: '-30px' }}>Funding Details</uni-view>
                                <uni-view data-v-248ca5b8="" class="list-box">

                                    <uni-view data-v-248ca5b8="" class="item">
                                        <uni-view data-v-248ca5b8="" class="first">
                                            <uni-view data-v-248ca5b8="" class="left">2025-04-21 14:50:13</uni-view>

                                            <uni-view data-v-248ca5b8="" class="right" style={{color: 'rgb(255, 61, 61)'}}>-11.221113</uni-view>
                                        </uni-view>
                                        <uni-view data-v-248ca5b8="" class="layer">
                                            <uni-view data-v-248ca5b8="" class="title">Fund Flows</uni-view>

                                            <uni-view data-v-248ca5b8="" class="value">Create Quantitative Orders</uni-view>

                                        </uni-view>
                                    </uni-view>
                                    <uni-view data-v-248ca5b8="" class="item">
                                        <uni-view data-v-248ca5b8="" class="first">
                                            <uni-view data-v-248ca5b8="" class="left">2025-04-21 14:48:49</uni-view>

                                            <uni-view data-v-248ca5b8="" class="right" style={{color: 'rgb(255, 61, 61)'}}>-10.000000</uni-view>
                                        </uni-view>
                                        <uni-view data-v-248ca5b8="" class="layer">
                                            <uni-view data-v-248ca5b8="" class="title">Fund Flows</uni-view>
                                            <uni-view data-v-248ca5b8="" class="value">Buy Server</uni-view>

                                        </uni-view>
                                    </uni-view>
                                    <uni-view data-v-248ca5b8="" class="item">
                                        <uni-view data-v-248ca5b8="" class="first">
                                            <uni-view data-v-248ca5b8="" class="left">2025-04-21 14:46:49</uni-view>
                                            <uni-view data-v-248ca5b8="" class="right" style={{color: 'rgb(53, 247, 231)'}}>+0.447953</uni-view>

                                        </uni-view>
                                        <uni-view data-v-248ca5b8="" class="layer">
                                            <uni-view data-v-248ca5b8="" class="title">Fund Flows</uni-view>

                                            <uni-view data-v-248ca5b8="" class="value">Rewards</uni-view>

                                        </uni-view>
                                    </uni-view>
                                    <uni-view data-v-248ca5b8="" class="item">
                                        <uni-view data-v-248ca5b8="" class="first">
                                            <uni-view data-v-248ca5b8="" class="left">2025-04-21 14:46:41</uni-view>
                                            <uni-view data-v-248ca5b8="" class="right" style={{color: 'rgb(53, 247, 231)'}}>+0.273160</uni-view>

                                        </uni-view>
                                        <uni-view data-v-248ca5b8="" class="layer">
                                            <uni-view data-v-248ca5b8="" class="title">Fund Flows</uni-view>

                                            <uni-view data-v-248ca5b8="" class="value">Rewards</uni-view>

                                        </uni-view>
                                    </uni-view>
                                    <uni-view data-v-248ca5b8="" class="item">
                                        <uni-view data-v-248ca5b8="" class="first">
                                            <uni-view data-v-248ca5b8="" class="left">2025-04-21 14:45:08</uni-view>
                                            <uni-view data-v-248ca5b8="" class="right" style={{color: 'rgb(53, 247, 231)'}}>+20.500000</uni-view>

                                        </uni-view>
                                        <uni-view data-v-248ca5b8="" class="layer">
                                            <uni-view data-v-248ca5b8="" class="title">Fund Flows</uni-view>

                                            <uni-view data-v-248ca5b8="" class="value">Deposit</uni-view>

                                        </uni-view>
                                    </uni-view>
                                </uni-view>
                                <uni-view data-v-248ca5b8=""
                                    class="list-box">
                                    {/* <uni-view data-v-248ca5b8="" class="nodata"><img data-v-248ca5b8=""
                                        src="{{asset('')}}static/img/nodata.png" alt="" />No
                                        Data
                                    </uni-view> */}
                                </uni-view>
                            </uni-view>
                        </uni-page-body>
                    </uni-page-wrapper>
                </uni-page>

            </uni-app>
        </div>
    );
};

export default Assets;