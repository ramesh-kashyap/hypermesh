import React from 'react';
import { Link } from "react-router-dom";


const RechargeFunds = () => {
    return (
        <div class="uni-body pages-user-recharge">
            <uni-app class="uni-app--maxwidth">
                <uni-page data-page="pages/user/recharge">
                    <uni-page-wrapper>
                        <uni-page-body>
                            <uni-view data-v-bec7c7ce="" class="page">
                                <uni-view data-v-bec7c7ce="" class="ellipse"></uni-view>
                                <uni-view data-v-bec7c7ce="" class="top-box"><uni-view data-v-636c600c="" data-v-bec7c7ce="" class="uni-row" style={{ marginLeft: '0px', marginRight: '0px' }}><uni-view data-v-35b9a113="" data-v-bec7c7ce="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                    <Link to="/dashboard" >
                                        <uni-view data-v-53c5f33f="" class="back"><img data-v-53c5f33f="" src="/static/img/back.png" alt="" style={{ width: '35px' }} /></uni-view>

                                    </Link>
                                </uni-view><uni-view data-v-35b9a113="" data-v-bec7c7ce="" class="uni-col uni-col-12" style={{ paddingLeft: '0px', paddingRight: '0px' }}><uni-view data-v-bec7c7ce="" class="page-title">Deposit</uni-view></uni-view><uni-view data-v-35b9a113="" data-v-bec7c7ce="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}><uni-view data-v-bec7c7ce="" class="records"><img data-v-bec7c7ce="" src="/static/img/records.png" alt="" style={{ width: '25px', marginTop: '5px' }} /></uni-view></uni-view></uni-view></uni-view><uni-view data-v-bec7c7ce="" class="recharge-box"><uni-view data-v-bec7c7ce="" class="input-layer"><uni-view data-v-bec7c7ce="" class="input-title">Select Deposit Type</uni-view><uni-view data-v-bec7c7ce="" class="select-box"><uni-view data-v-bec7c7ce="" class="item"><img data-v-bec7c7ce="" src="/static/img/USDT.png" alt="" />TRC20</uni-view>
                                    <uni-view data-v-bec7c7ce="" class="item"><img data-v-bec7c7ce="" src="/static/img/USDT.png" alt="" />ERC20</uni-view>
                                    <uni-view data-v-bec7c7ce="" class="item"><img data-v-bec7c7ce="" src="/static/coin/eth.png" alt="" />ETH</uni-view>
                                </uni-view></uni-view><uni-view data-v-bec7c7ce="" class="input-layer" style={{ marginTop: '20px' }}><uni-view data-v-bec7c7ce="" class="input-title">Amount</uni-view>        <uni-view data-v-30449abe="" data-v-bec7c7ce="" class="uni-easyinput" style={{ color: 'rgb(255, 255, 255)' }}><uni-view data-v-30449abe="" class="uni-easyinput__content is-input-border " style={{ borderColor: 'rgba(255, 255, 255, 0.2)', backgroundColor: 'unset' }}>        <uni-input data-v-30449abe="" class="uni-easyinput__content-input" style={{ paddingLeft: '10px' }}>
                                    <div class="uni-input-wrapper">
                                        <div class="uni-input-placeholder uni-easyinput__placeholder-class" data-v-30449abe="" data-v-bec7c7ce="">Please Enter Amount</div><input maxlength="140" step="" enterkeyhint="done" autocomplete="off" type="" class="uni-input-input" />
                                    </div>
                                </uni-input>        </uni-view></uni-view></uni-view>        </uni-view><uni-view data-v-bec7c7ce="" class="submit">Submit</uni-view>    </uni-view></uni-page-body></uni-page-wrapper></uni-page>

            </uni-app>
        </div>
    );
};

export default RechargeFunds;