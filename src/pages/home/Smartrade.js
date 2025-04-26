import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Smartrade = () => {
     const navigate = useNavigate();
   
      const backClick = () => {
        
        navigate('/dashboard/TradingChart');
   
      };
      const [balance, setBalance] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get('http://localhost:8000/api/user/available-balance', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
      }
    })
    .then(response => {
      setBalance(response.data.available_balance);
    })
    .catch(error => {
      console.error('Error fetching balance:', error);
      setError('⚠️ Failed to load balance. Please try again later.');
    });
  }, []);
      
    return (
<div class="uni-body pages-index-symbol">
      <uni-app class="uni-app--maxwidth">
         <uni-page data-page="pages/index/SmartTrade">
            <uni-page-wrapper>
               <uni-page-body>
                  <uni-view data-v-2c1047a8="" class="page">
                     <uni-view data-v-2c1047a8="" class="ellipse"></uni-view>
                     <uni-view data-v-2c1047a8="" class="balance-box">
                        <uni-view data-v-2c1047a8="" class="title">Available Balance</uni-view>
                        {/* <uni-view data-v-2c1047a8="" class="value">
      </uni-view> */}
      {error && (
        <h6 style={{ color: 'red'}}>{error}</h6>
      )}

      {balance !== null ? (
        <p style={{ fontSize: '24px', fontWeight: '600' }}>${balance}</p>
      ) : (
        !error && <p>Loading balance...</p> 
      )}
                     </uni-view>
                     <uni-view data-v-2c1047a8="" class="top-box">
                        <uni-view data-v-636c600c="" data-v-2c1047a8="" class="uni-row" style={{marginLeft: '0px', marginRight: '0px'}}>
                           <uni-view data-v-35b9a113="" data-v-2c1047a8="" class="uni-col uni-col-6" style={{paddingLeft: '0px', paddingRight: '0px'}}>
                              <uni-view data-v-2c1047a8="" class="back" onClick={backClick}><img data-v-2c1047a8="" src="/static/img/back.png" alt="" style={{width: '35px'}}/></uni-view>
                           </uni-view>
                           <uni-view data-v-35b9a113="" data-v-2c1047a8="" class="uni-col uni-col-12" style={{paddingLeft: '0px', paddingRight: '0px'}}>
                              <uni-view data-v-2c1047a8="" class="page-title">Smart Trade</uni-view>
                           </uni-view>
                           <uni-view data-v-35b9a113="" data-v-2c1047a8="" class="uni-col uni-col-6" style={{paddingLeft: '0px', paddingRight: '0px'}}></uni-view>
                        </uni-view>
                     </uni-view>
                     <uni-view data-v-2c1047a8="" class="trade-box">
                        <uni-view data-v-2c1047a8="" class="input-box">
                           <uni-view data-v-2c1047a8="" class="input-item">
                              <uni-view data-v-2c1047a8="" class="input-title">Trading Currency</uni-view>
                              <uni-view data-v-30449abe="" data-v-2c1047a8="" class="uni-easyinput" style={{color: 'rgb(255, 255, 255)'}}>
                                 <uni-view data-v-30449abe="" class="uni-easyinput__content is-input-border is-disabled " style={{borderColor: 'rgba(255, 255, 255, 0.2)', backgroundColor: 'unset'}}>
                                     
                                    <uni-input data-v-30449abe="" class="uni-easyinput__content-input" style={{paddingLeft: '10px'}}>
                                       <div class="uni-input-wrapper">
                                          <div class="uni-input-placeholder uni-easyinput__placeholder-class" data-v-30449abe="" data-v-2c1047a8="" style={{display: 'none'}}> </div>
                                          <input disabled="disabled" maxlength="140" step="" enterkeyhint="done" autocomplete="off" type="text" class="uni-input-input"/> 
                                       </div>
                                    </uni-input>
                                     
                                 </uni-view>
                              </uni-view>
                           </uni-view>
                           <uni-view data-v-2c1047a8="" class="input-item">
                              <uni-view data-v-2c1047a8="" class="input-title">Server</uni-view>
                              <uni-view data-v-2c1047a8="" class="server-click">
                                 <uni-view data-v-2c1047a8="" class="click-layer"></uni-view>
                                 <uni-view data-v-30449abe="" data-v-2c1047a8="" class="uni-easyinput" style={{color: 'rgb(255, 255, 255)'}}>
                                    <uni-view data-v-30449abe="" class="uni-easyinput__content is-input-border is-disabled " style={{borderColor: 'rgba(255, 255, 255, 0.2)', backgroundColor: 'unset'}}>
                                        
                                       <uni-input data-v-30449abe="" class="uni-easyinput__content-input" style={{paddingLeft: '10px'}}>
                                          <div class="uni-input-wrapper">
                                             <div class="uni-input-placeholder uni-easyinput__placeholder-class" data-v-30449abe="" data-v-2c1047a8="">Please select a Server</div>
                                             <input disabled="disabled" maxlength="140" step="" enterkeyhint="done" autocomplete="off" type="text" class="uni-input-input"/> 
                                          </div>
                                       </uni-input>
                                        
                                    </uni-view>
                                 </uni-view>
                              </uni-view>
                           </uni-view>
                             
                        </uni-view>
                        <uni-view data-v-2c1047a8="" class="book-box">
                           <uni-view data-v-2c1047a8="" class="order-book">
                              <uni-view data-v-2c1047a8="" class="buy-orders">
                                 <uni-view data-v-2c1047a8="" class="order">
                                    <uni-view data-v-2c1047a8="" class="depth-bar" style={{width: '7.44699%'}}></uni-view>
                                    <uni-text data-v-2c1047a8="" class="price"><span>1800.5000</span></uni-text>
                                    <uni-text data-v-2c1047a8="" class="amount"><span>4.17</span></uni-text>
                                 </uni-view>
                                 <uni-view data-v-2c1047a8="" class="order">
                                    <uni-view data-v-2c1047a8="" class="depth-bar" style={{width: '100%'}}></uni-view>
                                    <uni-text data-v-2c1047a8="" class="price"><span>1800.6000</span></uni-text>
                                    <uni-text data-v-2c1047a8="" class="amount"><span>55.93</span></uni-text>
                                 </uni-view>
                                 <uni-view data-v-2c1047a8="" class="order">
                                    <uni-view data-v-2c1047a8="" class="depth-bar" style={{width: '2.07959%'}}></uni-view>
                                    <uni-text data-v-2c1047a8="" class="price"><span>1800.7000</span></uni-text>
                                    <uni-text data-v-2c1047a8="" class="amount"><span>1.16</span></uni-text>
                                 </uni-view>
                                 <uni-view data-v-2c1047a8="" class="order">
                                    <uni-view data-v-2c1047a8="" class="depth-bar" style={{width: '14.3526%'}}></uni-view>
                                    <uni-text data-v-2c1047a8="" class="price"><span>1800.9000</span></uni-text>
                                    <uni-text data-v-2c1047a8="" class="amount"><span>8.03</span></uni-text>
                                 </uni-view>
                                 <uni-view data-v-2c1047a8="" class="order">
                                    <uni-view data-v-2c1047a8="" class="depth-bar" style={{width: '3.01874%'}}></uni-view>
                                    <uni-text data-v-2c1047a8="" class="price"><span>1801.0000</span></uni-text>
                                    <uni-text data-v-2c1047a8="" class="amount"><span>1.69</span></uni-text>
                                 </uni-view>
                              </uni-view>
                              <uni-view data-v-2c1047a8="" class="sell-orders">
                                 <uni-view data-v-2c1047a8="" class="order">
                                    <uni-view data-v-2c1047a8="" class="depth-bar" Smartrade></uni-view>
                                    <uni-text data-v-2c1047a8="" class="price"><span>1801.2000</span></uni-text>
                                    <uni-text data-v-2c1047a8="" class="amount"><span>3.03</span></uni-text>
                                 </uni-view>
                                 <uni-view data-v-2c1047a8="" class="order">
                                    <uni-view data-v-2c1047a8="" class="depth-bar" style={{width: '3.31623%'}}></uni-view>
                                    <uni-text data-v-2c1047a8="" class="price"><span>1801.3000</span></uni-text>
                                    <uni-text data-v-2c1047a8="" class="amount"><span>1.85</span></uni-text>
                                 </uni-view>
                                 <uni-view data-v-2c1047a8="" class="order">
                                    <uni-view data-v-2c1047a8="" class="depth-bar" style={{width: '19.1823%'}}></uni-view>
                                    <uni-text data-v-2c1047a8="" class="price"><span>1801.4000</span></uni-text>
                                    <uni-text data-v-2c1047a8="" class="amount"><span>10.73</span></uni-text>
                                 </uni-view>
                                 <uni-view data-v-2c1047a8="" class="order">
                                    <uni-view data-v-2c1047a8="" class="depth-bar" style={{width: '1.98448%'}}></uni-view>
                                    <uni-text data-v-2c1047a8="" class="price"><span>1801.5000</span></uni-text>
                                    <uni-text data-v-2c1047a8="" class="amount"><span>1.11</span></uni-text>
                                 </uni-view>
                                 <uni-view data-v-2c1047a8="" class="order">
                                    <uni-view data-v-2c1047a8="" class="depth-bar" style={{width: '5.51775%'}}></uni-view>
                                    <uni-text data-v-2c1047a8="" class="price"><span>1801.6000</span></uni-text>
                                    <uni-text data-v-2c1047a8="" class="amount"><span>3.09</span></uni-text>
                                 </uni-view>
                              </uni-view>
                           </uni-view>
                            
                        </uni-view>
                     </uni-view>
                     <uni-view data-v-2c1047a8="" class="Info-box">
                        <uni-view data-v-2c1047a8="" class="info-item">
                           <uni-view data-v-2c1047a8="" class="title">Trading Currency</uni-view>
                           <uni-view data-v-2c1047a8="" class="value">ETHUSDT</uni-view>
                        </uni-view>
                        <uni-view data-v-2c1047a8="" class="info-item">
                           <uni-view data-v-2c1047a8="" class="title">Server</uni-view>
                           <uni-view data-v-2c1047a8="" class="value">----</uni-view>
                        </uni-view>
                        <uni-view data-v-2c1047a8="" class="info-item">
                           <uni-view data-v-2c1047a8="" class="title">Amount</uni-view>
                           <uni-view data-v-2c1047a8="" translate="no" class="value">----</uni-view>
                        </uni-view>
                        <uni-view data-v-2c1047a8="" class="info-item">
                           <uni-view data-v-2c1047a8="" class="title">Period (Hour)</uni-view>
                           <uni-view data-v-2c1047a8="" translate="no" class="value">----</uni-view>
                        </uni-view>
                        <uni-view data-v-2c1047a8="" class="info-item">
                           <uni-view data-v-2c1047a8="" class="title">Insurance (0.000%)</uni-view>
                            
                           <uni-view data-v-2c1047a8="" class="value">----</uni-view>
                        </uni-view>
                     </uni-view>
                     <uni-view data-v-2c1047a8="" class="check-box" style={{marginTop: '10px'}}>
                        <uni-checkbox-group data-v-2c1047a8="">
                           <uni-label data-v-2c1047a8="" class="warning-text uni-label-pointer">
                              <uni-checkbox data-v-2c1047a8="" style={{transform: 'scale(0.7)'}}>
                                 <div class="uni-checkbox-wrapper">
                                    <div class="uni-checkbox-input uni-checkbox-input-checked" style={{color: 'rgb(0, 0, 0)'}}></div>
                                 </div>
                              </uni-checkbox>
                              <uni-text data-v-2c1047a8="" class="agreement-tips"><span>I have read and agree to the following agreement:</span></uni-text>
                              <uni-text data-v-2c1047a8="" class="agreement"><span>"FIREFLY STAR LLC User Strategy Insurance Agreement"</span></uni-text>
                              ,
                              <uni-text data-v-2c1047a8="" class="agreement"><span>"Firefly Star LLC Trading Server Usage Agreement"</span></uni-text>
                           </uni-label>
                        </uni-checkbox-group>
                     </uni-view>
                     <uni-view data-v-2c1047a8="" style={{height: '60px'}}></uni-view>
                     <uni-view data-v-2c1047a8="" class="create-btn">Create</uni-view>
                      
                  </uni-view>
               </uni-page-body>
            </uni-page-wrapper>
         </uni-page>
      </uni-app></div>

   );
};

export default Smartrade;
