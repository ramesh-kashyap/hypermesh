
import React from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";



const History = () => {

    return (
        <div class=" ">
            <uni-app class="">
                <uni-page data-page="pages/user/withdrawalRecords"> <uni-page-wrapper><uni-page-body><uni-view data-v-b0a5c882="" class="page"><uni-view data-v-b0a5c882="" class="ellipse"></uni-view><uni-view data-v-b0a5c882="" class="top-box"><uni-view data-v-636c600c="" data-v-b0a5c882="" class="uni-row" style={{ marginLeft: '0px', marginRight: '0px' }}><uni-view data-v-35b9a113="" data-v-b0a5c882="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                    <Link to="/dashboard">
                        <uni-view data-v-53c5f33f="" class="back"><img data-v-53c5f33f="" src="/static/img/back.png" alt="" style={{ width: '35px', marginTop: '5px' }} /></uni-view>

                    </Link>
                </uni-view>
                    <uni-view data-v-35b9a113="" data-v-b0a5c882="" class="uni-col uni-col-12" style={{ paddingLeft: '0px', paddingRight: '0px' }}><uni-view data-v-b0a5c882="" class="page-title">Withdrawal Records</uni-view></uni-view><uni-view data-v-35b9a113="" data-v-b0a5c882="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}></uni-view></uni-view></uni-view><uni-view data-v-b0a5c882="" class="top-group"><uni-view data-v-b0a5c882="" class="top-btn selected">USDT</uni-view><uni-view data-v-b0a5c882="" class="top-btn">Fiat Currency</uni-view></uni-view><uni-view data-v-b0a5c882="" class="content"><uni-view data-v-b0a5c882="" class="nodata"><img data-v-b0a5c882="" src="/static/img/nodata.png" alt="" />No Data</uni-view></uni-view>  </uni-view></uni-page-body></uni-page-wrapper></uni-page>
            </uni-app>
        </div>
    );
};

export default History;
