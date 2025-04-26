import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../../components/AuthContext";

import Api from "../../Requests/Api";
import Level from "../../pages/team/Level";

const NodeDetails = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("authToken");

    // Optionally, clear any user-related data (if you have more like user info in localStorage)
    // localStorage.removeItem("userInfo");

    // Redirect to login page
    navigate("/login"); // Or wherever you want the user to be redirected after logout
  };
      




  return (

    <div class="uni-body pages-user-user">
      <uni-app class="uni-app--maxwidth">
        <uni-page data-page="pages/user/user">
          <uni-page-wrapper>
            <uni-page-body>
              <uni-view data-v-3dcfa33c="" class="page">
                <uni-view data-v-3dcfa33c="" class="ellipse">
                </uni-view>
                <uni-view data-v-3dcfa33c="" class="top-box">
                  <uni-view data-v-636c600c="" data-v-3dcfa33c="" class="uni-row" style={{ marginLeft: '0px', marginRight: '0px' }}>
                    <uni-view data-v-35b9a113="" data-v-3dcfa33c="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                      <Link to="/dashboard"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           >

                        <uni-view data-v-1011963f="" class="back"><img data-v-1011963f="" src="/static/img/back.png" alt="" style={{ width: '35px' }} /></uni-view>
                      </Link>                    </uni-view>
                    <uni-view data-v-35b9a113="" data-v-3dcfa33c="" class="uni-col uni-col-12" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                      <uni-view data-v-3dcfa33c="" class="page-title">User</uni-view>
                    </uni-view>
                    <uni-view data-v-35b9a113="" data-v-3dcfa33c="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                      <uni-view data-v-3dcfa33c="" class="set"><img data-v-3dcfa33c="" src="/static/img/setting.png" alt="" style={{ width: '35px' }} /></uni-view>
                    </uni-view>
                  </uni-view>
                </uni-view>
                <uni-view data-v-3dcfa33c="" class="ava-box">
                  <uni-view data-v-3dcfa33c="" class="ava"><img data-v-3dcfa33c="" src="/static/ava/ava4.jpg" alt="" /></uni-view>
                  <uni-view data-v-3dcfa33c="" class="nickname">Riteshk</uni-view>
                  <uni-view data-v-3dcfa33c="" class="uid">UID: 2098141</uni-view>
                </uni-view>
                <uni-view data-v-3dcfa33c="" class="two-group">
                  <uni-view data-v-3dcfa33c="" class="item">
                    <uni-view data-v-3dcfa33c="" class="title">Server Commission</uni-view>
                    <uni-view data-v-3dcfa33c="" translate="no" class="value"><img data-v-3dcfa33c="" src="/static/img/db.png" alt="" />0.0000</uni-view>
                  </uni-view>

                  <uni-view data-v-3dcfa33c="" class="item"> <Link to="/Team" style={{ textDecorationLine: 'none' }}>
                    <uni-view data-v-3dcfa33c="" class="title">My Team</uni-view>
                    <uni-view data-v-3dcfa33c="" class="value"><img data-v-3dcfa33c="" src="/static/img/people.png" alt="" />0<span data-v-3dcfa33c="" style={{ fontSize: '14px', fontWeight: '400', marginLeft: '3px' }}>(0Activated)</span></uni-view>
                  </Link>

                  </uni-view>
                </uni-view>
                <uni-view data-v-3dcfa33c="" class="email-box">
                  <uni-view data-v-3dcfa33c="" class="title">Email Address</uni-view>
                  <uni-view data-v-3dcfa33c="" class="value">****kor55@gmail.com</uni-view>
                </uni-view>
                <uni-view data-v-3dcfa33c="" class="invite-box">
                  <img data-v-3dcfa33c="" src="/static/img/giftbox.png" alt="" />
                  <uni-view data-v-3dcfa33c="" class="invite">
                    <uni-view data-v-3dcfa33c="" class="title">Invite Friends!</uni-view>
                    <uni-view data-v-3dcfa33c="" class="text">Invite friends and earn referral commission</uni-view>
                  </uni-view>
                </uni-view>
                <uni-view data-v-3dcfa33c="" class="kyc-box">
                  <uni-view data-v-3dcfa33c="" class="value"><img data-v-3dcfa33c="" src="/static/img/warn.png" alt="" />KYC Certification</uni-view>
                  <uni-view data-v-3dcfa33c="" class="title">Your account is not verified yet please add add your personal details to verify</uni-view>
                  <uni-view data-v-3dcfa33c="" class="go-kyc">Verify Now</uni-view>
                </uni-view>

                <uni-view data-v-3dcfa33c="" class="invite-box">
                  <img data-v-3dcfa33c="" src="/static/img/wallet.png" alt="" />
                  <uni-view data-v-3dcfa33c="" class="invite">
                    <uni-view data-v-3dcfa33c="" class="title">Wallet</uni-view>
                    <uni-view data-v-3dcfa33c="" class="text">Manage wallet addresses and bank cards</uni-view>
                  </uni-view>
                </uni-view>
                <uni-view data-v-3dcfa33c="" class="invite-box">
                  <img data-v-3dcfa33c="" src="/static/img/service.png" alt="" />
                  <uni-view data-v-3dcfa33c="" class="invite">
                    <uni-view data-v-3dcfa33c="" class="title">Service</uni-view>
                    <uni-view data-v-3dcfa33c="" class="text">If you have any questions, please contact the customer service team in time</uni-view>
                  </uni-view>
                </uni-view>
                <uni-view data-v-3dcfa33c="" class="logout" onClick={handleLogout}>Logout</uni-view>

              </uni-view>
            </uni-page-body>
          </uni-page-wrapper>
        </uni-page>



      </uni-app>
    </div>
  );
};

export default NodeDetails;
