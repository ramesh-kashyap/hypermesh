import React, { useEffect, useState } from "react";
import { useNavigate, Link, Outlet  } from "react-router-dom";
import axios from "axios";
import { SlArrowRight } from "react-icons/sl";
import TradingChart from "./TradingChart";

const symbols = ["dogeusdt", "ethusdt", "dotusdt", "nearusdt"];


const Dashboard = () => {
   const [selectedSymbol, setSelectedSymbol] = useState(null);
   const navigate = useNavigate();
   const [user, setUser] = useState(null);

   const [isOpen, setIsOpen] = useState(true); // Modal visibility state

   // Function to close the modal when Decline is clicked
   const closeModal = () => {
      setIsOpen(false);
   };

   // Function to handle Accept action (optional)
   const handleAccept = () => {
      // Logic for Accept (e.g., connect with Telegram)
      console.log("Account connected with Telegram!");
      setIsOpen(false); // Close the modal after accepting
   };
   const [cryptoData, setCryptoData] = useState({});
   const [binanceSymbols, setBinanceSymbols] = useState([]);
   const [showAll, setShowAll] = useState(false); // toggle state
   useEffect(() => {
      const fetchCrypto = async () => {
        try {
          const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 20,
              page: 1,
              sparkline: false
            }
          });
  
          const formatted = {};
          const binanceSyms = [];
  
          res.data.forEach((coin) => {
            const symbol = `${coin.symbol}usdt`.toUpperCase();
            formatted[symbol] = {
              id: coin.id,
              name: coin.name,
              symbol: symbol,
              image: coin.image,
              price: coin.current_price,
              change: coin.price_change_24h,
              percent: coin.price_change_percentage_24h,
              volume: (coin.total_volume / 1_000_000).toFixed(2) + "M"
            };
            binanceSyms.push(symbol.toLowerCase());
          });
  
          setCryptoData(formatted);
          setBinanceSymbols(binanceSyms);
        } catch (error) {
          console.error("CoinGecko fetch error:", error);
        }
      };
  
      fetchCrypto();
    }, []);
  
    useEffect(() => {
      if (binanceSymbols.length === 0) return;
  
      const ws = new WebSocket(
        `wss://stream.binance.com:9443/stream?streams=${binanceSymbols
          .map((s) => `${s}@ticker`)
          .join("/")}`
      );
  
      ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        const data = msg.data;
  
        setCryptoData((prev) => {
          const existing = prev[data.s];
          if (!existing) return prev;
  
          return {
            ...prev,
            [data.s]: {
              ...existing,
              price: parseFloat(data.c),
              change: parseFloat(data.p),
              percent: parseFloat(data.P),
              volume: (parseFloat(data.v) / 1_000_000).toFixed(2) + "M"
            }
          };
        });
      };
  
      return () => ws.close();
    }, [binanceSymbols]);
  
    const allCoins = Object.values(cryptoData);
    const coinsToShow = showAll ? allCoins : allCoins.slice(0, 5);
  
   return (

      <div class="uni-body pages-index-index">
         <uni-app class="uni-app--showtabbar uni-app--maxwidth">
            <uni-page
               data-page="pages/index/index"> <uni-page-wrapper><uni-page-body>
                  <uni-view data-v-06ae08d2=""
                     class="page">
                     <uni-view data-v-06ae08d2="" class="ellipse"></uni-view>
                     <uni-view
                        data-v-06ae08d2="" class="top-box"><uni-view data-v-06ae08d2="" class="left">
                           <Link to="/NodeDetails">
                              <uni-view
                                 data-v-06ae08d2="" class="ava"><img data-v-06ae08d2="" src="/static/ava/ava4.jpg"
                                    alt="" /></uni-view>
                           </Link>
                           <uni-view data-v-06ae08d2="" class="top-text"><uni-view
                              data-v-06ae08d2="" class="name">Riteshk</uni-view><uni-view data-v-06ae08d2=""
                                 class="uid">UID:2098141</uni-view></uni-view></uni-view><uni-view
                                    data-v-06ae08d2="" class="right"><uni-view data-v-06ae08d2="" class="notice"><img
                                       data-v-06ae08d2="" src="/static/img/rewards.png" alt=""
                                       style={{ width: '28px' }} /></uni-view>
                           <a href="{{route('user.notice')}}">
                              <uni-view data-v-06ae08d2="" class="notice"><img
                                 data-v-06ae08d2="" src="/static/img/notice.png" alt="" /><uni-view
                                    data-v-06ae08d2=""
                                    class="red-point"></uni-view></uni-view>
                           </a>
                        </uni-view></uni-view>
                     <uni-view
                        data-v-06ae08d2="" class="balance-card"><uni-view data-v-06ae08d2="" class="first"><uni-view
                           data-v-06ae08d2="" class="balance-title">Your Balance
                           (USDT)</uni-view></uni-view><uni-view data-v-06ae08d2="" class="second"><uni-view
                              data-v-06ae08d2="" translate="no" class="balance-num">0.0000</uni-view><uni-view
                                 data-v-06ae08d2="" translate="no" class="profit-num">+0.0000<uni-view
                                    data-v-06ae08d2=""
                                    class="today">Yesterday</uni-view></uni-view></uni-view><uni-view
                                       data-v-06ae08d2="" class="third">
                           <uni-view data-v-06ae08d2=""
                              class="balance-btn">
                              <Link to="/RechargeFunds" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '500', fontSize: '16px' }}>
                                 Deposit
                              </Link><img data-v-06ae08d2="" src="/static/img/usdtdown.png"
                                 alt="" /></uni-view>
                           <uni-view data-v-06ae08d2="" class="transfer"><img
                              data-v-06ae08d2="" src="/static/img/transfer.png" alt="" /></uni-view>

                           <uni-view
                              data-v-06ae08d2="" class="balance-btn"> <Link to="/withdrawReq" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '500', fontSize: '16px' }}>Withdraw </Link><img data-v-06ae08d2=""
                                 src="/static/img/usdtup.png" alt="" /></uni-view>

                        </uni-view></uni-view>
                     <uni-view
                        data-v-06ae08d2="" class="index-title">My Attention</uni-view>
                     <uni-view data-v-06ae08d2=""
                        class="attention-box"> <uni-view data-v-06ae08d2="" class="attention-item"><uni-view
                           data-v-06ae08d2="" class="coin-layer"><img data-v-06ae08d2=""
                              src="/static/coin/eth.png" alt="" /><uni-view data-v-06ae08d2=""
                                 class="coin-name">ETHUSDT<uni-view data-v-06ae08d2=""
                                    class="coin">135.36M</uni-view></uni-view></uni-view><uni-view
                                       data-v-06ae08d2="" class="price">1632.02</uni-view><uni-view data-v-06ae08d2=""
                                          class="prop-updown">+2.85%</uni-view></uni-view><uni-view data-v-06ae08d2=""
                                             class="attention-item"><uni-view data-v-06ae08d2="" class="coin-layer"><img
                                                data-v-06ae08d2="" src="/static/coin/btc.png" alt="" /><uni-view
                                                   data-v-06ae08d2="" class="coin-name">BTCUSDT<uni-view data-v-06ae08d2=""
                                                      class="coin">471.89M</uni-view></uni-view></uni-view><uni-view
                                                         data-v-06ae08d2="" class="price">84465.10</uni-view><uni-view data-v-06ae08d2=""
                                                            class="prop-updown">+0.75%</uni-view></uni-view><uni-view data-v-06ae08d2=""
                                                               class="attention-item"><uni-view data-v-06ae08d2="" class="coin-layer"><img
                                                                  data-v-06ae08d2="" src="/static/coin/xrp.png" alt="" /><uni-view
                                                                     data-v-06ae08d2="" class="coin-name">XRPUSDT<uni-view data-v-06ae08d2=""
                                                                        class="coin">63.62M</uni-view></uni-view></uni-view><uni-view
                                                                           data-v-06ae08d2="" class="price">2.13</uni-view><uni-view data-v-06ae08d2=""
                                                                              class="prop-down">-0.76%</uni-view></uni-view></uni-view>
                     <uni-view
                        data-v-06ae08d2="" class="new-banner">
                           <uni-swiper data-v-06ae08d2="" style={{ height: '165px' }}>
                           <div class="uni-swiper-wrapper">
                              <div class="uni-swiper-slides">
                                 <div class="uni-swiper-slide-frame"
                                    style={{ width: '100%', height: '100%', transform: 'translate(0%, 0px) translateZ(0px)' }}>
                                    <uni-swiper-item data-v-06ae08d2=""
                                       style={{ position: 'absolute', width: '100%', height: '100%', transform: 'translate(0%, 0px) translateZ(0px)' }}><uni-view
                                          data-v-06ae08d2="" class="banner-item"><img data-v-06ae08d2=""
                                             src="/static/img/Registration.png" alt="" /><uni-view
                                                data-v-06ae08d2="" class="banner-title">Exclusive For New
                                             Users</uni-view><uni-view data-v-06ae08d2=""
                                                class="banner-text">Exclusive for new users – Sign up &amp;
                                             claim your USD rewards!</uni-view><uni-view data-v-06ae08d2=""
                                                class="banner-btn">Get
                                             Rewards</uni-view></uni-view></uni-swiper-item>
                                             <uni-swiper-item
                                                data-v-06ae08d2=""
                                                style={{ position: 'absolute', width: '100%', height: '100%', transform: 'translate(100%, 0px) translateZ(0px)' }}><uni-view
                                                   data-v-06ae08d2="" class="banner-item"><img data-v-06ae08d2=""
                                                      src="/static/img/server-icon.png" alt="" /><uni-view
                                                         data-v-06ae08d2="" class="banner-title">Unlock Smart
                                             Trading</uni-view><uni-view data-v-06ae08d2=""
                                                class="banner-text">Unlock Smart Trading with Firefly Star – Try
                                             228 AI Strategies for Free!</uni-view><uni-view
                                                data-v-06ae08d2="" class="banner-btn">Get
                                             Rewards</uni-view></uni-view></uni-swiper-item>
                                             <uni-swiper-item
                                                data-v-06ae08d2=""
                                                style={{ position: 'absolute', width: '100%', height: '100%', transform: 'translate(200%, 0px) translateZ(0px)' }}><uni-view
                                                   data-v-06ae08d2="" class="banner-item"><img data-v-06ae08d2=""
                                                      src="/static/img/flash.png" alt="" /><uni-view data-v-06ae08d2=""
                                                         class="banner-title">Smart Trading</uni-view><uni-view
                                                            data-v-06ae08d2="" class="banner-text">Smart Trading, Steady
                                             Growth – Build Your Wealth with Confidence!</uni-view><uni-view
                                                data-v-06ae08d2="" class="banner-btn">Get
                                             Rewards</uni-view></uni-view></uni-swiper-item>
                                 </div>
                              </div>
                              <div class="uni-swiper-dots uni-swiper-dots-horizontal">
                                 <div class="uni-swiper-dot uni-swiper-dot-active"></div>
                                 <div class="uni-swiper-dot"></div>
                                 <div class="uni-swiper-dot"></div>
                              </div>
                           </div>
                        </uni-swiper></uni-view>

                     <uni-view data-v-06ae08d2="" class="market-box"><uni-view
                        data-v-06ae08d2="" class="market-title">Market Quotes</uni-view>


                        <div style={{ padding: "2px", color: "#fff", maxWidth: "500px" }}>
                           {coinsToShow.map((coin) => {
                              const isPositive = coin.percent >= 0;

                              return (
                                 <div
                                    key={coin.symbol}
                                    
                                    // onClick={() => setSelectedSymbol(coin.symbol)} 
                                    onClick={() => coin.symbol && navigate(`/dashboard/TradingChart/${coin.symbol.toUpperCase()}`)}
                                    style={{
                                       display: "flex",
                                       alignItems: "center",
                                       justifyContent: "space-between",
                                       background: "#1e1e22",
                                       padding: "12px",
                                       borderRadius: "10px",
                                       marginBottom: "10px"
                                    }}
                                 >
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                       <img
                                          src={coin.image}
                                          alt={coin.name}
                                          style={{
                                             width: "40px",
                                             height: "40px",
                                             borderRadius: "50%",
                                             marginRight: "10px"
                                          }}
                                       />
                                       <div>
                                          <div style={{ fontWeight: "bold" }}>{coin.symbol}</div>
                                          <div style={{ fontSize: "12px", color: "#aaa" }}>{coin.volume}</div>
                                       </div>
                                    </div>

                                    <div style={{ textAlign: "right", marginRight: "10px" }}>
                                       <div>${coin.price?.toFixed(2)}</div>
                                       <div style={{ fontSize: "12px", color: isPositive ? "#0f0" : "#f44" }}>
                                          {coin.change?.toFixed(2)}
                                       </div>
                                    </div>

                                    <div
                                       style={{
                                          backgroundColor: isPositive ? "#00d0aa" : "#f44336",
                                          color: "#fff",
                                          padding: "4px 10px",
                                          borderRadius: "12px",
                                          fontSize: "13px",
                                          minWidth: "60px",
                                          textAlign: "center"
                                       }}
                                    >
                                       {isPositive ? "+" : ""}
                                       {coin.percent?.toFixed(2)}%
                                    </div>
                                 </div>
                              );
                           })}

                           {/* Show More / Less Button */}
                           {allCoins.length > 5 && (
                            
                              <uni-view data-v-06ae08d2="" onClick={() => setShowAll(!showAll)}
                              style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '3px' }}> {showAll ? "Hide " : "More "}<img
                                 data-v-06ae08d2="" src="/static/img/Expand.png" alt=""
                                 style={{ width: '30px', height: '20px' }} /> </uni-view>
                           )}
                        </div>
                        {selectedSymbol && <TradingChart symbol={selectedSymbol} />}


                              
                              </uni-view>
                     <uni-view
                        data-v-06ae08d2="" class="market-title"
                        style={{ marginTop: '10px', marginBottom: '8px' }}>FAQ</uni-view>
                     <uni-view data-v-06ae08d2=""
                        class="content"><uni-view data-v-6fe2d4dd="" data-v-06ae08d2=""
                           class="uni-collapse"><uni-view data-v-9da912bc="" data-v-06ae08d2=""
                              class="uni-collapse-item"><uni-view data-v-9da912bc=""
                                 class="uni-collapse-item__title uni-collapse-item-border"><uni-view
                                    data-v-9da912bc="" class="uni-collapse-item__title-wrap"><uni-view
                                       data-v-9da912bc="" class="uni-collapse-item__title-box"> <uni-text
                                          data-v-9da912bc="" class="uni-collapse-item__title-text"><span>How
                                             to Register and Get
                                             Started?</span></uni-text></uni-view></uni-view><uni-view
                                                data-v-9da912bc=""
                                                class="uni-collapse-item__title-arrow uni-collapse-item--animation"><uni-text
                                                   data-v-45a6b600="" data-v-9da912bc="" class="uni-icons uniui-bottom"
                                                   style={{ color: 'rgb(187, 187, 187)', fontSize: '14px' }}><span></span></uni-text></uni-view></uni-view><uni-view
                                                      data-v-9da912bc="" class="uni-collapse-item__wrap is--transition"
                                                      style={{ height: '0px' }}><uni-view data-v-9da912bc="" id="Uni_e8x9"
                                                         class="uni-collapse-item__wrap-content open"><uni-view data-v-06ae08d2=""
                                                            class="content"><uni-text data-v-06ae08d2="" class="text"><span>Account
                                                               Registration: Visit the official website, fill in your
                                                               information, and complete
                                                               verification.</span></uni-text><uni-text data-v-06ae08d2=""
                                                                  class="text"><span>KYC Verification: Upload identity documents to
                                                                     ensure account security.</span></uni-text><uni-text
                                                                        data-v-06ae08d2="" class="text"><span>Payment Method Binding: Add a
                                                                           crypto wallet or bank card for convenient fund
                                                                           management.</span></uni-text><uni-text data-v-06ae08d2=""
                                                                              class="text"><span>Fund Deposit: Deposit funds into your account via
                                                                                 the bound method to prepare for
                                                                                 trading.</span></uni-text><uni-text data-v-06ae08d2=""
                                                                                    class="text"><span>Server Selection: Choose a server based on your
                                                                                       investment plan, purchase it, and access the trading
                                                                                       interface.</span></uni-text></uni-view></uni-view></uni-view></uni-view></uni-view><uni-view
                                                                                          data-v-6fe2d4dd="" data-v-06ae08d2="" class="uni-collapse">
                           <uni-view data-v-9da912bc=""
                              data-v-06ae08d2="" class="uni-collapse-item"><uni-view data-v-9da912bc=""
                                 class="uni-collapse-item__title uni-collapse-item-border"><uni-view
                                    data-v-9da912bc="" class="uni-collapse-item__title-wrap"><uni-view
                                       data-v-9da912bc="" class="uni-collapse-item__title-box"> <uni-text
                                          data-v-9da912bc="" class="uni-collapse-item__title-text"><span>Why
                                             Choose Firefly Star
                                             LLC?</span></uni-text></uni-view></uni-view><uni-view
                                                data-v-9da912bc=""
                                                class="uni-collapse-item__title-arrow uni-collapse-item--animation"><uni-text
                                                   data-v-45a6b600="" data-v-9da912bc="" class=""
                                                   style={{ color: 'rgb(187, 187, 187)', fontSize: '14px' }}><img src="/static/img/down-arrow.png" alt="" /></uni-text>
                                 </uni-view></uni-view><uni-view
                                    data-v-9da912bc="" class="uni-collapse-item__wrap is--transition"
                                    style={{ height: '0px' }}><uni-view data-v-9da912bc="" id="Uni_hf4k"
                                       class="uni-collapse-item__wrap-content open"><uni-view data-v-06ae08d2=""
                                          class="content"><uni-text data-v-06ae08d2="" class="text"><span>Leading
                                             Quantitative Technology: 228 strategies powered by AI-driven
                                             algorithms for optimized trading.</span></uni-text><uni-text
                                                data-v-06ae08d2="" class="text"><span>Compliant Operations: Licensed
                                                   under the U.S. MSB, ensuring fund
                                                   security.</span></uni-text><uni-text data-v-06ae08d2=""
                                                      class="text"><span>Efficiency and Security: Cold wallet storage and
                                                         2FA authentication to safeguard
                                                         accounts.</span></uni-text><uni-text data-v-06ae08d2=""
                                                            class="text"><span>Flexible Investments: Diverse trading strategies
                                                               with strong liquidity.</span></uni-text><uni-text
                                                                  data-v-06ae08d2="" class="text"><span>Referral Rewards: Earn high
                                                                     commissions through promotions, including product and trading
                                                                     commissions.</span></uni-text><uni-text data-v-06ae08d2=""
                                                                        class="text"><span>User Support: 24/7 customer service and global
                                                                           community
                                                                           engagement.</span></uni-text></uni-view></uni-view></uni-view></uni-view></uni-view><uni-view
                                                                              data-v-6fe2d4dd="" data-v-06ae08d2="" class="uni-collapse"><uni-view data-v-9da912bc=""
                                                                                 data-v-06ae08d2="" class="uni-collapse-item"><uni-view data-v-9da912bc=""
                                                                                    class="uni-collapse-item__title uni-collapse-item-border"><uni-view
                                                                                       data-v-9da912bc="" class="uni-collapse-item__title-wrap"><uni-view
                                                                                          data-v-9da912bc="" class="uni-collapse-item__title-box"> <uni-text
                                                                                             data-v-9da912bc=""
                                                                                             class="uni-collapse-item__title-text"><span>Supported
                                                                                                Cryptocurrencies and Trading
                                                                                                Products?</span></uni-text></uni-view></uni-view><uni-view
                                                                                                   data-v-9da912bc=""
                                                                                                   class="uni-collapse-item__title-arrow uni-collapse-item--animation"><uni-text
                                                                                                      data-v-45a6b600="" data-v-9da912bc="" class="uni-icons uniui-bottom"
                                                                                                      style={{ color: 'rgb(187, 187, 187)', fontSize: '14px' }}><span></span></uni-text></uni-view></uni-view><uni-view
                                                                                                         data-v-9da912bc="" class="uni-collapse-item__wrap is--transition"
                                                                                                         style={{ height: '0px' }}><uni-view data-v-9da912bc="" id="Uni_hrj0"
                                                                                                            class="uni-collapse-item__wrap-content open"><uni-view data-v-06ae08d2=""
                                                                                                               class="content"><uni-text data-v-06ae08d2=""
                                                                                                                  class="text"><span>Supported Assets: 30 major cryptocurrencies, with
                                                                                                                     plans to add forex trading in the
                                                                                                                     future.</span></uni-text><uni-text data-v-06ae08d2=""
                                                                                                                        class="text"><span>Quantitative Trading: 7-day, 3-day, 1-day, 12H,
                                                                                                                           4H strategies.</span></uni-text><uni-text data-v-06ae08d2=""
                                                                                                                              class="text"><span>Second Contracts: Ideal for short-term,
                                                                                                                                 high-frequency trading.</span></uni-text><uni-text
                                                                                                                                    data-v-06ae08d2="" class="text"><span>Copy Trading: Replicate
                                                                                                                                       strategies of top traders.</span></uni-text><uni-text
                                                                                                                                          data-v-06ae08d2="" class="text"><span>Personal API Trading: Use the
                                                                                                                                             platform’s API for trading operations. Trades are executed by
                                                                                                                                             Firefly’s strategy bots and
                                                                                                                                             investors.</span></uni-text></uni-view></uni-view></uni-view></uni-view></uni-view><uni-view
                                                                                                                                                data-v-6fe2d4dd="" data-v-06ae08d2="" class="uni-collapse"><uni-view data-v-9da912bc=""
                                                                                                                                                   data-v-06ae08d2="" class="uni-collapse-item"><uni-view data-v-9da912bc=""
                                                                                                                                                      class="uni-collapse-item__title uni-collapse-item-border"><uni-view
                                                                                                                                                         data-v-9da912bc="" class="uni-collapse-item__title-wrap"><uni-view
                                                                                                                                                            data-v-9da912bc="" class="uni-collapse-item__title-box"> <uni-text
                                                                                                                                                               data-v-9da912bc="" class="uni-collapse-item__title-text"><span>How
                                                                                                                                                                  to Choose the Right
                                                                                                                                                                  Server?</span></uni-text></uni-view></uni-view><uni-view
                                                                                                                                                                     data-v-9da912bc=""
                                                                                                                                                                     class="uni-collapse-item__title-arrow uni-collapse-item--animation"><uni-text
                                                                                                                                                                        data-v-45a6b600="" data-v-9da912bc="" class="uni-icons uniui-bottom"
                                                                                                                                                                        style={{ color: 'rgb(187, 187, 187)', fontSize: '14px' }}><span></span></uni-text></uni-view></uni-view><uni-view
                                                                                                                                                                           data-v-9da912bc="" class="uni-collapse-item__wrap is--transition"
                                                                                                                                                                           style={{ height: '0px' }}><uni-view data-v-9da912bc="" id="Uni_d0kk"
                                                                                                                                                                              class="uni-collapse-item__wrap-content open"><uni-view data-v-06ae08d2=""
                                                                                                                                                                                 class="content"><uni-text data-v-06ae08d2="" class="text"><span>Free
                                                                                                                                                                                    Trial: New users get a 15-day trial with an investment limit of
                                                                                                                                                                                    $10−30.</span></uni-text><uni-text data-v-06ae08d2=""
                                                                                                                                                                                       class="text"><span>Official Servers: S1-S6 levels with varying
                                                                                                                                                                                          investment ranges and returns. Details are available in the
                                                                                                                                                                                          server
                                                                                                                                                                                          marketplace.</span></uni-text></uni-view></uni-view></uni-view></uni-view></uni-view><uni-view
                                                                                                                                                                                             data-v-6fe2d4dd="" data-v-06ae08d2="" class="uni-collapse"><uni-view data-v-9da912bc=""
                                                                                                                                                                                                data-v-06ae08d2="" class="uni-collapse-item"><uni-view data-v-9da912bc=""
                                                                                                                                                                                                   class="uni-collapse-item__title uni-collapse-item-border"><uni-view
                                                                                                                                                                                                      data-v-9da912bc="" class="uni-collapse-item__title-wrap"><uni-view
                                                                                                                                                                                                         data-v-9da912bc="" class="uni-collapse-item__title-box"> <uni-text
                                                                                                                                                                                                            data-v-9da912bc="" class="uni-collapse-item__title-text"><span>How
                                                                                                                                                                                                               is Fund Security
                                                                                                                                                                                                               Ensured?</span></uni-text></uni-view></uni-view><uni-view
                                                                                                                                                                                                                  data-v-9da912bc=""
                                                                                                                                                                                                                  class="uni-collapse-item__title-arrow uni-collapse-item--animation"><uni-text
                                                                                                                                                                                                                     data-v-45a6b600="" data-v-9da912bc="" class="uni-icons uniui-bottom"
                                                                                                                                                                                                                     style={{ color: 'rgb(187, 187, 187)', fontSize: '14px' }}><span></span></uni-text></uni-view></uni-view><uni-view
                                                                                                                                                                                                                        data-v-9da912bc="" class="uni-collapse-item__wrap is--transition"
                                                                                                                                                                                                                        style={{ height: '0px' }}><uni-view data-v-9da912bc="" id="Uni_i4fa"
                                                                                                                                                                                                                           class="uni-collapse-item__wrap-content open"><uni-view data-v-06ae08d2=""
                                                                                                                                                                                                                              class="content"><uni-text data-v-06ae08d2=""
                                                                                                                                                                                                                                 class="text"><span>Compliant Operations: MSB licensing ensures legal
                                                                                                                                                                                                                                    and transparent operations.</span></uni-text><uni-text
                                                                                                                                                                                                                                       data-v-06ae08d2="" class="text"><span>API Trading:
                                                                                                                                                                                                                                          Institutional-grade APIs guarantee secure and efficient
                                                                                                                                                                                                                                          trading.</span></uni-text><uni-text data-v-06ae08d2=""
                                                                                                                                                                                                                                             class="text"><span>Partnerships: API integration with exchanges like
                                                                                                                                                                                                                                                Binance and OKX ensures stable
                                                                                                                                                                                                                                                liquidity.</span></uni-text><uni-text data-v-06ae08d2=""
                                                                                                                                                                                                                                                   class="text"><span>Insurance mechanism: Pay a percentage of the
                                                                                                                                                                                                                                                      investment amount to purchase insurance to reduce market
                                                                                                                                                                                                                                                      risks.</span></uni-text></uni-view></uni-view></uni-view></uni-view></uni-view><uni-view
                                                                                                                                                                                                                                                         data-v-6fe2d4dd="" data-v-06ae08d2="" class="uni-collapse"><uni-view data-v-9da912bc=""
                                                                                                                                                                                                                                                            data-v-06ae08d2="" class="uni-collapse-item"><uni-view data-v-9da912bc=""
                                                                                                                                                                                                                                                               class="uni-collapse-item__title uni-collapse-item-border"><uni-view
                                                                                                                                                                                                                                                                  data-v-9da912bc="" class="uni-collapse-item__title-wrap"><uni-view
                                                                                                                                                                                                                                                                     data-v-9da912bc="" class="uni-collapse-item__title-box"> <uni-text
                                                                                                                                                                                                                                                                        data-v-9da912bc=""
                                                                                                                                                                                                                                                                        class="uni-collapse-item__title-text"><span>Withdrawal
                                                                                                                                                                                                                                                                           Guidelines</span></uni-text></uni-view></uni-view><uni-view
                                                                                                                                                                                                                                                                              data-v-9da912bc=""
                                                                                                                                                                                                                                                                              class="uni-collapse-item__title-arrow uni-collapse-item--animation"><uni-text
                                                                                                                                                                                                                                                                                 data-v-45a6b600="" data-v-9da912bc="" class="uni-icons uniui-bottom"
                                                                                                                                                                                                                                                                                 style={{ color: 'rgb(187, 187, 187)', fontSize: '14px' }}><span></span></uni-text></uni-view></uni-view><uni-view
                                                                                                                                                                                                                                                                                    data-v-9da912bc="" class="uni-collapse-item__wrap is--transition"
                                                                                                                                                                                                                                                                                    style={{ height: '0px' }}><uni-view data-v-9da912bc="" id="Uni_516g"
                                                                                                                                                                                                                                                                                       class="uni-collapse-item__wrap-content open"><uni-view data-v-06ae08d2=""
                                                                                                                                                                                                                                                                                          class="content"><uni-text data-v-06ae08d2="" class="text"><span>Timing:
                                                                                                                                                                                                                                                                                             One withdrawal per day.</span></uni-text><uni-text
                                                                                                                                                                                                                                                                                                data-v-06ae08d2="" class="text"><span>Fees: A flat 8-10% fee
                                                                                                                                                                                                                                                                                                   (covering taxes, exchange settlement, and channel
                                                                                                                                                                                                                                                                                                   fees).</span></uni-text></uni-view></uni-view></uni-view></uni-view></uni-view><uni-view
                                                                                                                                                                                                                                                                                                      data-v-6fe2d4dd="" data-v-06ae08d2="" class="uni-collapse"><uni-view data-v-9da912bc=""
                                                                                                                                                                                                                                                                                                         data-v-06ae08d2="" class="uni-collapse-item"><uni-view data-v-9da912bc=""
                                                                                                                                                                                                                                                                                                            class="uni-collapse-item__title uni-collapse-item-border"><uni-view
                                                                                                                                                                                                                                                                                                               data-v-9da912bc="" class="uni-collapse-item__title-wrap"><uni-view
                                                                                                                                                                                                                                                                                                                  data-v-9da912bc="" class="uni-collapse-item__title-box"> <uni-text
                                                                                                                                                                                                                                                                                                                     data-v-9da912bc="" class="uni-collapse-item__title-text"><span>How
                                                                                                                                                                                                                                                                                                                        Does the Platform Achieve Stable
                                                                                                                                                                                                                                                                                                                        Profits?</span></uni-text></uni-view></uni-view><uni-view
                                                                                                                                                                                                                                                                                                                           data-v-9da912bc=""
                                                                                                                                                                                                                                                                                                                           class="uni-collapse-item__title-arrow uni-collapse-item--animation"><uni-text
                                                                                                                                                                                                                                                                                                                              data-v-45a6b600="" data-v-9da912bc="" class="uni-icons uniui-bottom"
                                                                                                                                                                                                                                                                                                                              style={{ color: 'rgb(187, 187, 187)', fontSize: '14px' }}><span></span></uni-text></uni-view></uni-view><uni-view
                                                                                                                                                                                                                                                                                                                                 data-v-9da912bc="" class="uni-collapse-item__wrap is--transition"
                                                                                                                                                                                                                                                                                                                                 style={{ height: '0px' }}><uni-view data-v-9da912bc="" id="Uni_jk1d"
                                                                                                                                                                                                                                                                                                                                    class="uni-collapse-item__wrap-content open"><uni-view data-v-06ae08d2=""
                                                                                                                                                                                                                                                                                                                                       class="content"><uni-text data-v-06ae08d2="" class="text"><span>AI
                                                                                                                                                                                                                                                                                                                                          Quantitative Trading: 24/7 market monitoring and portfolio
                                                                                                                                                                                                                                                                                                                                          optimization.</span></uni-text><uni-text data-v-06ae08d2=""
                                                                                                                                                                                                                                                                                                                                             class="text"><span>Multi-Strategy Portfolio: Combines short, medium,
                                                                                                                                                                                                                                                                                                                                                and long-term strategies to diversify
                                                                                                                                                                                                                                                                                                                                                risks.</span></uni-text></uni-view></uni-view></uni-view></uni-view></uni-view><uni-view
                                                                                                                                                                                                                                                                                                                                                   data-v-6fe2d4dd="" data-v-06ae08d2="" class="uni-collapse"><uni-view data-v-9da912bc=""
                                                                                                                                                                                                                                                                                                                                                      data-v-06ae08d2="" class="uni-collapse-item"><uni-view data-v-9da912bc=""
                                                                                                                                                                                                                                                                                                                                                         class="uni-collapse-item__title uni-collapse-item-border"><uni-view
                                                                                                                                                                                                                                                                                                                                                            data-v-9da912bc="" class="uni-collapse-item__title-wrap"><uni-view
                                                                                                                                                                                                                                                                                                                                                               data-v-9da912bc="" class="uni-collapse-item__title-box"> <uni-text
                                                                                                                                                                                                                                                                                                                                                                  data-v-9da912bc="" class="uni-collapse-item__title-text"><span>How
                                                                                                                                                                                                                                                                                                                                                                     to Participate in the Referral
                                                                                                                                                                                                                                                                                                                                                                     System?</span></uni-text></uni-view></uni-view><uni-view
                                                                                                                                                                                                                                                                                                                                                                        data-v-9da912bc=""
                                                                                                                                                                                                                                                                                                                                                                        class="uni-collapse-item__title-arrow uni-collapse-item--animation"><uni-text
                                                                                                                                                                                                                                                                                                                                                                           data-v-45a6b600="" data-v-9da912bc="" class="uni-icons uniui-bottom"
                                                                                                                                                                                                                                                                                                                                                                           style={{ color: 'rgb(187, 187, 187)', fontSize: '14px' }}><span></span></uni-text></uni-view></uni-view><uni-view
                                                                                                                                                                                                                                                                                                                                                                              data-v-9da912bc="" class="uni-collapse-item__wrap is--transition"
                                                                                                                                                                                                                                                                                                                                                                              style={{ height: '0px' }}><uni-view data-v-9da912bc="" id="Uni_8pm8"
                                                                                                                                                                                                                                                                                                                                                                                 class="uni-collapse-item__wrap-content open"><uni-view data-v-06ae08d2=""
                                                                                                                                                                                                                                                                                                                                                                                    class="content"><uni-view data-v-06ae08d2="" class="title">Server
                                                                                                                                                                                                                                                                                                                                                                                       Commission Rewards:</uni-view><uni-text data-v-06ae08d2=""
                                                                                                                                                                                                                                                                                                                                                                                          class="text"><span>L1 Referrer: 30%
                                                                                                                                                                                                                                                                                                                                                                                             commission.</span></uni-text><uni-text data-v-06ae08d2=""
                                                                                                                                                                                                                                                                                                                                                                                                class="text"><span>L2 Referrer: 20%
                                                                                                                                                                                                                                                                                                                                                                                                   commission.</span></uni-text><uni-text data-v-06ae08d2=""
                                                                                                                                                                                                                                                                                                                                                                                                      class="text"><span>Example: If a referred user purchases a 100$
                                                                                                                                                                                                                                                                                                                                                                                                         server,L1 earns $30, and L2 earns
                                                                                                                                                                                                                                                                                                                                                                                                         $20.</span></uni-text><uni-text data-v-06ae08d2=""
                                                                                                                                                                                                                                                                                                                                                                                                            class="text"><span>Renewal Rules: Renewals are half-price but do not
                                                                                                                                                                                                                                                                                                                                                                                                               generate additional commissions.</span></uni-text><uni-view
                                                                                                                                                                                                                                                                                                                                                                                                                  data-v-06ae08d2="" class="title">Trading Commission
                                          Rewards:</uni-view><uni-text data-v-06ae08d2=""
                                             class="text"><span>The platform charges 30% of user profits, with
                                                21% allocated for rebates.</span></uni-text><uni-text
                                                   data-v-06ae08d2="" class="text"><span>L1 Referrer: 8%
                                                      rebate.</span></uni-text><uni-text data-v-06ae08d2=""
                                                         class="text"><span>L2 Referrer: 6%
                                                            rebate.</span></uni-text><uni-text data-v-06ae08d2=""
                                                               class="text"><span>L3 Referrer: 4%
                                                                  rebate.</span></uni-text><uni-text data-v-06ae08d2=""
                                                                     class="text"><span>L4 Referrer: 2%
                                                                        rebate.</span></uni-text><uni-text data-v-06ae08d2=""
                                                                           class="text"><span>L5 Referrer: 1%
                                                                              rebate.</span></uni-text><uni-view data-v-06ae08d2=""
                                                                                 style={{ height: '8px' }}></uni-view></uni-view></uni-view></uni-view></uni-view></uni-view><uni-view
                                                                                    data-v-6fe2d4dd="" data-v-06ae08d2="" class="uni-collapse"><uni-view data-v-9da912bc=""
                                                                                       data-v-06ae08d2="" class="uni-collapse-item"><uni-view data-v-9da912bc=""
                                                                                          class="uni-collapse-item__title uni-collapse-item-border"><uni-view
                                                                                             data-v-9da912bc="" class="uni-collapse-item__title-wrap"><uni-view
                                                                                                data-v-9da912bc="" class="uni-collapse-item__title-box"> <uni-text
                                                                                                   data-v-9da912bc=""
                                                                                                   class="uni-collapse-item__title-text"><span>Personal API Trading vs.
                                                                                                      Platform API
                                                                                                      Trading</span></uni-text></uni-view></uni-view><uni-view
                                                                                                         data-v-9da912bc=""
                                                                                                         class="uni-collapse-item__title-arrow uni-collapse-item--animation"><uni-text
                                                                                                            data-v-45a6b600="" data-v-9da912bc="" class="uni-icons uniui-bottom"
                                                                                                            style={{ color: 'rgb(187, 187, 187)', fontSize: '14px' }}><span></span></uni-text></uni-view></uni-view><uni-view
                                                                                                               data-v-9da912bc="" class="uni-collapse-item__wrap is--transition"
                                                                                                               style={{ height: '0px' }}><uni-view data-v-9da912bc="" id="Uni_a9d"
                                                                                                                  class="uni-collapse-item__wrap-content open"><uni-view data-v-06ae08d2=""
                                                                                                                     class="content"><uni-text data-v-06ae08d2="" class="text"><span>Personal
                                                                                                                        API: Users manage trades independently, with a 20% commission on
                                                                                                                        profits.</span></uni-text><uni-text data-v-06ae08d2=""
                                                                                                                           class="text"><span>Platform API: Trades executed by the platform,
                                                                                                                              with a 30% commission on
                                                                                                                              profits.</span></uni-text></uni-view></uni-view></uni-view></uni-view></uni-view><uni-view
                                                                                                                                 data-v-6fe2d4dd="" data-v-06ae08d2="" class="uni-collapse"><uni-view data-v-9da912bc=""
                                                                                                                                    data-v-06ae08d2="" class="uni-collapse-item"><uni-view data-v-9da912bc=""
                                                                                                                                       class="uni-collapse-item__title uni-collapse-item-border"><uni-view
                                                                                                                                          data-v-9da912bc="" class="uni-collapse-item__title-wrap"><uni-view
                                                                                                                                             data-v-9da912bc="" class="uni-collapse-item__title-box"> <uni-text
                                                                                                                                                data-v-9da912bc="" class="uni-collapse-item__title-text"><span>The
                                                                                                                                                   Meaning Behind Firefly Star LLC’s
                                                                                                                                                   Brand</span></uni-text></uni-view></uni-view><uni-view
                                                                                                                                                      data-v-9da912bc=""
                                                                                                                                                      class="uni-collapse-item__title-arrow uni-collapse-item--animation"><uni-text
                                                                                                                                                         data-v-45a6b600="" data-v-9da912bc="" class="uni-icons uniui-bottom"
                                                                                                                                                         style={{ color: 'rgb(187, 187, 187)', fontSize: '14px' }}><span></span></uni-text></uni-view></uni-view><uni-view
                                                                                                                                                            data-v-9da912bc="" class="uni-collapse-item__wrap is--transition"
                                                                                                                                                            style={{ height: '0px' }}><uni-view data-v-9da912bc="" id="Uni_64be"
                                                                                                                                                               class="uni-collapse-item__wrap-content open"><uni-view data-v-06ae08d2=""
                                                                                                                                                                  class="content"><uni-text data-v-06ae08d2="" class="text"><span>Firefly:
                                                                                                                                                                     Symbolizes the gathering of light to illuminate the path to
                                                                                                                                                                     wealth.</span></uni-text><uni-text data-v-06ae08d2=""
                                                                                                                                                                        class="text"><span>Star: Represents direction and guidance, helping
                                                                                                                                                                           investors move
                                                                                                                                                                           forward.</span></uni-text></uni-view></uni-view></uni-view></uni-view></uni-view>
                        <uni-view
                           data-v-6fe2d4dd="" data-v-06ae08d2="" class="uni-collapse"><uni-view data-v-9da912bc=""
                              data-v-06ae08d2="" class="uni-collapse-item"><uni-view data-v-9da912bc=""
                                 class="uni-collapse-item__title uni-collapse-item-border"><uni-view
                                    data-v-9da912bc="" class="uni-collapse-item__title-wrap"><uni-view
                                       data-v-9da912bc="" class="uni-collapse-item__title-box"> <uni-text
                                          data-v-9da912bc="" class="uni-collapse-item__title-text"><span>How
                                             to Stay
                                             Updated?</span></uni-text></uni-view></uni-view>
                                 <uni-view
                                    data-v-9da912bc=""
                                    class="uni-collapse-item__title-arrow uni-collapse-item--animation"><uni-text
                                       data-v-45a6b600="" data-v-9da912bc="" class="uni-icons uniui-bottom"
                                       style={{ color: 'rgb(187, 187, 187)', fontSize: '14px' }}><span></span></uni-text></uni-view>
                              </uni-view>
                              <uni-view
                                 data-v-9da912bc="" class="uni-collapse-item__wrap is--transition"
                                 style={{ height: '0px' }}><uni-view data-v-9da912bc="" id="Uni_la5w"
                                    class="uni-collapse-item__wrap-content open"><uni-view data-v-06ae08d2=""
                                       class="content"><uni-text data-v-06ae08d2="" class="text"><span>Official
                                          Website: Check announcements and rule
                                          updates.</span></uni-text><uni-text data-v-06ae08d2=""
                                             class="text"><span>Customer Service: Reach out via online chat or
                                                email
                                                support.</span></uni-text></uni-view></uni-view></uni-view>
                           </uni-view></uni-view>

                        <uni-view
                           data-v-06ae08d2="" class="title">Policy</uni-view>

                        <uni-view
                           data-v-06ae08d2="" class="policy-item">FIREFLY STAR LLC User Agreement<SlArrowRight size={11} style={{ marginLeft: '5px' }} /></uni-view>
                        <uni-view
                           data-v-06ae08d2="" class="policy-item">Firefly Star LLC Trading Server Usage
                           Agreement<SlArrowRight size={11} style={{ marginLeft: '5px' }} /></uni-view>
                     </uni-view>
                     
                  </uni-view>

               </uni-page-body>
               </uni-page-wrapper>
            </uni-page>

         </uni-app> 
   <Outlet />
   </div>
   );

};
export default Dashboard;

















// binance api implement




// import TradingChart from "./TradingChart";

// const symbols = ["dogeusdt", "ethusdt", "dotusdt", "nearusdt"];

// const [prices, setPrices] = useState({});
// const [selectedSymbol, setSelectedSymbol] = useState(null); // 👈 chart state

// useEffect(() => {
//    const ws = new WebSocket(
//       `wss://stream.binance.com:9443/stream?streams=${symbols
//          .map((s) => `${s}@ticker`)
//          .join("/")}`
//    );

//    ws.onmessage = (event) => {
//       const message = JSON.parse(event.data);
//       const data = message.data;
//       setPrices((prev) => ({
//          ...prev,
//          [data.s]: {
//             symbol: data.s,
//             price: parseFloat(data.c),
//             change: parseFloat(data.p),
//             percent: parseFloat(data.P),
//             volume: (parseFloat(data.v) / 1_000_000).toFixed(2) + "M"
//          }
//       }));
//    };

//    return () => ws.close();
// }, []);

// return (
//    <div style={{ padding: "16px", background: "#141417", color: "#fff", borderRadius: "10px", maxWidth: "600px" }}>
//       {Object.values(prices).map((coin) => {
//          const isPositive = coin.percent >= 0;
//          return (
//             <div
//                key={coin.symbol}
//                onClick={() => setSelectedSymbol(coin.symbol)} // 👈 set chart
//                style={{
//                   cursor: "pointer",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   background: "#1e1e22",
//                   padding: "12px",
//                   borderRadius: "10px",
//                   marginBottom: "10px"
//                }}
//             >
//                <div style={{ display: "flex", alignItems: "center" }}>
//                   <img
//                      src={`https://cryptologos.cc/logos/${coin.symbol.toLowerCase().replace("usdt", "")}-logo.png`}
//                      onError={(e) => (e.target.style.display = "none")}
//                      alt={coin.symbol}
//                      style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }}
//                   />
//                   <div>
//                      <div style={{ fontWeight: "bold" }}>{coin.symbol}</div>
//                      <div style={{ fontSize: "12px", color: "#aaa" }}>{coin.volume}</div>
//                   </div>
//                </div>

//                <div style={{ textAlign: "right", marginRight: "10px" }}>
//                   <div>${coin.price.toFixed(4)}</div>
//                   <div style={{ fontSize: "12px", color: isPositive ? "#0f0" : "#f44" }}>
//                      {coin.change.toFixed(4)}
//                   </div>
//                </div>

//                <div style={{
//                   backgroundColor: isPositive ? "#00d0aa" : "#f44336",
//                   color: "#fff",
//                   padding: "4px 10px",
//                   borderRadius: "12px",
//                   fontSize: "13px",
//                   minWidth: "60px",
//                   textAlign: "center"
//                }}>
//                   {isPositive ? "+" : ""}
//                   {coin.percent.toFixed(2)}%
//                </div>
//             </div>
//          );
//       })}

//       {/* 👇 Show chart below if selected */}
//       {selectedSymbol && <TradingChart symbol={selectedSymbol} />}
//    </div>