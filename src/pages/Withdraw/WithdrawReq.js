import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

import api from "../../Requests/Api";

const WithdrawComponent = () => {
   return (
    <div class="uni-body pages-user-withdrawal" > <uni-app class="uni-app--maxwidth"><uni-page data-page="pages/user/withdrawal">   <uni-page-wrapper><uni-page-body><uni-view data-v-53c5f33f="" class="page"><uni-view data-v-53c5f33f="" class="ellipse"></uni-view><uni-view data-v-53c5f33f="" class="top-box"><uni-view data-v-636c600c="" data-v-53c5f33f="" class="uni-row" style={{marginLeft: '0px', marginRight: '0px'}}><uni-view data-v-35b9a113="" data-v-53c5f33f="" class="uni-col uni-col-6" style={{paddingLeft: '0px', paddingRight: '0px'}}>
      <Link to="/dashboard">
        <uni-view data-v-53c5f33f="" class="back"><img data-v-53c5f33f="" src="/static/img/back.png" alt="" style={{width: '35px'}} /></uni-view>

      </Link>
    </uni-view><uni-view data-v-35b9a113="" data-v-53c5f33f="" class="uni-col uni-col-12" style={{paddingLeft: '0px', paddingRight: '0px'}}><uni-view data-v-53c5f33f="" class="page-title">Withdrawal</uni-view></uni-view><uni-view data-v-35b9a113="" data-v-53c5f33f="" class="uni-col uni-col-6" style={{paddingLeft: '0px', paddingRight: '0px'}}>
        <Link to="/History">
          <uni-view data-v-53c5f33f="" class="records"><img data-v-53c5f33f="" src="/static/img/records.png" alt="" style={{width: '25px', marginTop: '5px'}} /></uni-view>

        </Link>
      </uni-view></uni-view></uni-view>
      <uni-view data-v-53c5f33f="" class="balance-box"><uni-view data-v-53c5f33f="" translate="no" class="value">0.0000</uni-view><uni-view data-v-53c5f33f="" class="title">Available Balance</uni-view></uni-view>
      <uni-view data-v-53c5f33f="" class="content">
        <uni-view data-v-53c5f33f="" class="input-layer"><uni-view data-v-53c5f33f="" class="input-title">Select Deposit Type</uni-view><uni-view data-v-53c5f33f="" class="select-box"><uni-view data-v-53c5f33f="" class="item"><img data-v-53c5f33f="" src="/static/img/USDT.png" alt="" />TRC20</uni-view><uni-view data-v-53c5f33f="" class="item"><img data-v-53c5f33f="" src="/static/img/USDT.png" alt="" />ERC20</uni-view>

      </uni-view></uni-view>
      <uni-view data-v-53c5f33f="" class="input-layer" style={{marginTop: '10px'}}><uni-view data-v-53c5f33f="" class="input-title">Wallet or Bank Card<uni-view data-v-53c5f33f="" class="right"><img data-v-53c5f33f="" src="  /static/img/add.png" alt="" />Add New</uni-view></uni-view><uni-view data-v-30449abe="" data-v-53c5f33f="" class="uni-easyinput" style={{color: 'rgb(255, 255, 255)'}}><uni-view data-v-30449abe="" class="uni-easyinput__content is-input-border is-disabled " style={{borderColor: 'rgba(255, 255, 255, 0.2)',backgroundColor: 'unset'}}>   <uni-input data-v-30449abe="" class="uni-easyinput__content-input" >
        <div class="uni-input-wrapper">
          <div class="uni-input-placeholder uni-easyinput__placeholder-class" data-v-30449abe="" data-v-53c5f33f=""> </div><input disabled="disabled" maxlength="140" step="" enterkeyhint="done" autocomplete="off" type="" class="uni-input-input" />
        </div>
      </uni-input>   </uni-view></uni-view></uni-view>
      <uni-view data-v-53c5f33f="" class="input-layer" style={{marginTop: '10px'}}><uni-view data-v-53c5f33f="" class="input-title">Amount</uni-view><uni-view data-v-30449abe="" data-v-53c5f33f="" class="uni-easyinput" style={{color: 'rgb(255, 255, 255)'}}><uni-view data-v-30449abe="" class="uni-easyinput__content is-input-border " style={{borderColor: 'rgba(255, 255, 255, 0.2)', backgroundColor: 'unset'}}>   <uni-input data-v-30449abe="" class="uni-easyinput__content-input" style={{paddingLeft: '10px'}}>
        <div class="uni-input-wrapper">
          <div class="uni-input-placeholder uni-easyinput__placeholder-class" data-v-30449abe="" data-v-53c5f33f="">Please Enter Amount</div><input maxlength="140" step="0.000000000000000001" enterkeyhint="done" pattern="[0-9]*" autocomplete="off" type="number" class="uni-input-input" />
        </div>
      </uni-input>   </uni-view></uni-view>    </uni-view>
      <uni-view data-v-53c5f33f="" class="input-layer" style={{marginTop: '10px'}}><uni-view data-v-53c5f33f="" class="input-title">Payment Password</uni-view><uni-view data-v-30449abe="" data-v-53c5f33f="" class="uni-easyinput" style={{color: 'rgb(255, 255, 255)'}}><uni-view data-v-30449abe="" class="uni-easyinput__content is-input-border " style={{borderColor: 'rgba(255, 255, 255, 0.2)',backgroundColor: 'unset'}}>   <uni-input data-v-30449abe="" class="uni-easyinput__content-input" style={{paddingLeft: '10px'}}>
        <div class="uni-input-wrapper">
          <div class="uni-input-placeholder uni-easyinput__placeholder-class" data-v-30449abe="" data-v-53c5f33f="">Please enter your payment password</div><input maxlength="140" step="" enterkeyhint="done" autocomplete="off" type="" class="uni-input-input" />
        </div>
      </uni-input>   </uni-view></uni-view></uni-view>
{/* 
      <uni-view data-v-53c5f33f="" class="input-layer"><uni-view data-v-53c5f33f="" class="input-title">Verification Code</uni-view><uni-view data-v-30449abe="" data-v-53c5f33f="" class="uni-easyinput" style={{color: 'rgb(255, 255, 255)'}}><uni-view data-v-30449abe="" class="uni-easyinput__content is-input-border " style={{borderColor: 'rgba(255, 255, 255, 0.2)', backgroundColor: 'unset'}}>   <uni-input data-v-30449abe="" class="uni-easyinput__content-input" style={{paddingRight: '10px', paddingLeft: '10px'}}>
        <div class="uni-input-wrapper">
          <div class="uni-input-placeholder uni-easyinput__placeholder-class" data-v-30449abe="" data-v-53c5f33f="">Please Enter Verification Code</div><input maxlength="140" step="" enterkeyhint="done" autocomplete="off" type="" class="uni-input-input" />
        </div>
      </uni-input>   <uni-view data-v-53c5f33f="" class="resend">Send</uni-view></uni-view></uni-view></uni-view> */}
      
      <uni-view data-v-53c5f33f="" class="submit">Submit</uni-view></uni-view><uni-view data-v-53c5f33f="" class="tips-box"><uni-view data-v-53c5f33f="" class="title">Withdrawal time</uni-view><uni-view data-v-53c5f33f="" class="text">A maximum of one withdrawal is allowed per day.</uni-view><uni-view data-v-53c5f33f="" class="title">Withdrawal fee</uni-view><uni-view data-v-53c5f33f="" class="text">Bank card cash withdrawal: 10% handling fee is charged.</uni-view><uni-view data-v-53c5f33f="" class="text">Withdrawal of USDT: 8% handling fee will be charged.</uni-view></uni-view></uni-view></uni-page-body></uni-page-wrapper></uni-page>
    </uni-app>
    </div>
  );
};

export default WithdrawComponent;
