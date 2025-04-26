import React,{useState} from "react";
import Slider from "react-slick";
// App.js ya index.js me
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Server = () => {
  const [activeTab, setActiveTab] = useState("running");

   const slides = [
      {
        title: "S1-IntelliCalc Trial Edition (One-Time Only)",
        heading: "Benefits",

        text: "Amount that can be invested: 10.00-30.00",
        text1: "Optional investment period (hours): 4,8",
        price: "Free",
      },
      {
        title: "S2-IntelliCalc Starter Edition",
        heading: "Benefits",
        text: "Renew at half price",
        text1: "Amount that can be invested: 30.00-100.00",
        text2: "Optional investment period (hours): 8,12",
        text3: "Low risk, high return",
        text4: "Access to faster customer service",
        text5: "Faster Response time",
        price: "4.00",

      },
      {
        title: "S3-IntelliCalc Core Edition",
        heading: "Benefits",

        text: "Renew at half price",
        text1: "Amount that can be invested: 100.00-500.00",
        price: "10.0",

      },
      {
         title: "S4-IntelliCalc Breakthrough Edition",
         heading: "Benefits",
        text: "Renew at half price",

         text1: "RAmount that can be invested: 500.00-2500.00",
         price: "40.0",
 
       },
    ];
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    };
    return (
        <div class="uni-body pages-server-server">
        <uni-app class="uni-app--showtabbar uni-app--maxwidth">
           <uni-page
              data-page="pages/server/server">
             
              <uni-page-wrapper>
                 <uni-page-body>
                    <uni-view data-v-7542ab04=""
                       class="page">
                       <uni-view data-v-7542ab04="" class="ellipse"></uni-view>
                       <uni-view
                          data-v-7542ab04="" class="page-title">Server</uni-view>
                       <uni-view data-v-7542ab04=""
                          class="top-card">
                          <img data-v-7542ab04="" src="/static/img/server-icon.png" alt=""/>
                          <uni-view
                             data-v-7542ab04="" class="title">Start Trading Now!</uni-view>
                          <uni-view
                             data-v-7542ab04="" class="text">Buying a higher-tier server will give you a better
                             experience and greater advantages
                          </uni-view>
                       </uni-view>
                       <uni-view data-v-7cdca4f6="" class="top-group" style={{marginTop:'10px'}}>
                  <uni-view
                    data-v-7cdca4f6=""
                    class="top-btn selected"
                    onClick={() => setActiveTab("running")}
                    style={{
                      backgroundColor:
                        activeTab === "running"
                          ? "rgb(53, 247, 231)"
                          : "hsla(0, 0%, 100%, 0.05)",
                      color:
                        activeTab === "running" ? "#000" : "rgb(255, 255, 255)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    BUY
                  </uni-view>

                  <uni-view
                    data-v-7cdca4f6=""
                    class="top-btn selected"
                    onClick={() => setActiveTab("completed")}
                    style={{
                      backgroundColor:
                        activeTab === "completed"
                          ? "rgb(53, 247, 231)"
                          : "hsla(0, 0%, 100%, 0.05)",
                      color:
                        activeTab === "completed"
                          ? "#000"
                          : "rgb(255, 255, 255)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Renewal
                  </uni-view>
                  
                </uni-view>
                       <uni-view data-v-7542ab04=""
                          class="container" >
                {activeTab === "running" ? (
                           
                          <uni-swiper data-v-7542ab04="" class="swiper">
                             <div class="uni-swiper-wrapper">
                                <div class="uni-swiper-slides">
                                   <div class="uni-swiper-slide-frame"
                                      style={{width: '100%', height: '340px', transform: 'translate(0%, 0px) translateZ(0px)'}}>
                                    
                                    <uni-swiper-item
   data-v-7542ab04=""class="product-card" style={{marginTop:'10px',borderRadius:'10px', backgroundColor:'hsla(0, 0%, 100%, .101960784313725'}} 
   >
   <Slider {...settings}>
      {slides.map((slide, index) => (
      <uni-view data-v-b19b400c=""  >
         <uni-view
            data-v-b19b400c="" class="box">
            <uni-view data-v-b19b400c=""  
               class="left"><img data-v-b19b400c=""
               src="/static/img/cardleft.pn"
               alt=""/></uni-view>
            <uni-view data-v-b19b400c=""
               class="mid">
               <uni-view data-v-b19b400c=""
                  class="card-header">
                  <uni-view data-v-b19b400c=""style={{ marginTop:'20px'}}
                     class="title">{slide.title}
                  </uni-view>
                  <uni-text data-v-b19b400c=""
                     class="price">
                       {slide.price === "Free" ? (
                        "Free"
                          ) : (
                               <>
                           {slide.price}
                        <span style={{fontSize: '14px', lineHeight: '17px', color: 'rgba(255, 255, 255, 0.5)'}}>/month</span>
                              </>
                                  )}

                  </uni-text>
               </uni-view>
               <uni-view
                  data-v-b19b400c=""
                  class="card-title">{slide.heading}</uni-view>
               <uni-view
                  data-v-b19b400c="" class="card-body">
                  <uni-view
                     data-v-b19b400c="" class="benefit-item">
                     <img
                     data-v-b19b400c="" src="/static/img/check.png"
                     alt=""
                     style={{width: '20px', marginRight: '5px'}}/>
                     <uni-text
                        data-v-b19b400c=""
                        class="benefit-text"><span>{slide.text}</span>
                     </uni-text>
                  </uni-view>
               
               </uni-view>
               <uni-view
                  data-v-b19b400c="" class="card-body">
                  <uni-view
                     data-v-b19b400c="" class="benefit-item">
                     <img
                     data-v-b19b400c="" src="/static/img/check.png"
                     alt=""
                     style={{width: '20px', marginRight: '5px'}}/>
                     <uni-text
                        data-v-b19b400c=""
                        class="benefit-text"><span>{slide.text1}</span>

                     </uni-text>
                  </uni-view>
               
               </uni-view>
               {/* <uni-view
                  data-v-b19b400c="" class="card-body">
                  <uni-view
                     data-v-b19b400c="" class="benefit-item">
                     <img
                     data-v-b19b400c="" src="/static/img/check.png"
                     alt=""
                     style={{width: '20px', marginRight: '5px'}}/>
                     <uni-text
                        data-v-b19b400c=""
                        class="benefit-text"><span>{slide.text2}</span>

                     </uni-text>
                  </uni-view>
               
               </uni-view> */}
               <uni-view
                  data-v-b19b400c="" class="card-footer">
                  <uni-button
                     data-v-b19b400c=""
                     class="subscribe-button">Buy</uni-button>
               </uni-view>
            </uni-view>
            <uni-view
               data-v-b19b400c="" class="right"><img data-v-b19b400c=""
               src="{{asset('')}}static/img/cardright.png"
               alt=""/></uni-view>
         </uni-view>
      </uni-view>
      ))}
   </Slider>
   </uni-swiper-item>
       
                                     
                                   </div>
                                </div>
                             </div>
                          </uni-swiper>
                ) : (
   
<uni-page-body>
   <uni-view data-v-7542ab04="" class="page">
     
      <uni-view data-v-7542ab04="" class="content">
   <uni-view data-v-7542ab04="" class="list-box">
      <uni-view data-v-7542ab04="" class="server-item">
         <img data-v-7542ab04="" src="/static/img/S1.png" alt=""/>
         <uni-view data-v-7542ab04="" class="item-no">
            SEO1Hu1dPpXdQLE28
            <uni-view data-v-7542ab04="" class="expired-time">2025-04-29 13:22:47</uni-view>
         </uni-view>
         <uni-view data-v-7542ab04="" class="renew unrenew">Renewal</uni-view>
      </uni-view>
      <uni-view data-v-7542ab04="" class="server-item">
         <img data-v-7542ab04="" src="/static/img/S3.png" alt=""/>
         <uni-view data-v-7542ab04="" class="item-no">
            SEOCtJaEFSVFm1X3B
            <uni-view data-v-7542ab04="" class="expired-time">2025-05-21 14:48:49</uni-view>
         </uni-view>
         <uni-view data-v-7542ab04="" class="renew">Renewal</uni-view>
      </uni-view>
   </uni-view>
</uni-view>
    
   </uni-view>
</uni-page-body>

                
               //    <uni-view data-v-7cdca4f6="" class="history-box" >
               //    <uni-view data-v-7cdca4f6="" class="nodata">
               //      <img
               //        data-v-7cdca4f6=""
               //        src="/static/img/nodata.png"
               //        alt=""
               //      />
               //      No Data
               //    </uni-view>
               //  </uni-view>
              )}
                       </uni-view>
                  
                    </uni-view>
                 </uni-page-body>
              </uni-page-wrapper>
           </uni-page>
      
      
        </uni-app>


        
       </div>
    );
};

export default Server;









// ======================


// const SimpleSlider = () => {

//   return (
   

//    <uni-swiper-item
//    data-v-7542ab04=""
//    style={{position: 'absolute', width: '100%', height: '100%', transform: 'translate(100%, 0px) translateZ(0px)'}}>
//    <Slider {...settings}>
//       {slides.map((slide, index) => (
//       <uni-view
//          data-v-b19b400c="" data-v-7542ab04="" class="product-card">
//          <uni-view
//             data-v-b19b400c="" class="box">
//             <uni-view data-v-b19b400c=""
//                class="left"><img data-v-b19b400c=""
//                src="/static/img/cardleft.png"
//                alt=""/></uni-view>
//             <uni-view data-v-b19b400c=""
//                class="mid">
//                <uni-view data-v-b19b400c=""
//                   class="card-header">
//                   <uni-view data-v-b19b400c=""
//                      class="title">{slide.title}
//                   </uni-view>
//                   <uni-text data-v-b19b400c=""
//                      class="price"><span>4.00<span data-v-b19b400c=""
//                      style={{fontSize: '14px', lineHeight: '17px', color: 'rgba(255, 255, 255, 0.5)'}}>/month</span></span>
//                   </uni-text>
//                </uni-view>
//                <uni-view
//                   data-v-b19b400c=""
//                   class="card-title">Benefits</uni-view>
//                <uni-view
//                   data-v-b19b400c="" class="card-body">
//                   <uni-view
//                      data-v-b19b400c="" class="benefit-item">
//                      <img
//                      data-v-b19b400c="" src="/static/img/check.png"
//                      alt=""
//                      style={{width: '20px', marginRight: '5px'}}/>
//                      <uni-text
//                         data-v-b19b400c=""
//                         class="benefit-text"><span>Renew at half
//                         price</span>
//                      </uni-text>
//                   </uni-view>
//                   <uni-view
//                      data-v-b19b400c="" class="benefit-item">
//                      <img
//                      data-v-b19b400c="" src="/static/img/check.png"
//                      alt=""
//                      style={{width: '20px', marginRight: '5px'}}/>
//                      <uni-text
//                         data-v-b19b400c=""
//                         class="benefit-text"><span>Amount that can be
//                         invested:
//                         30.00-100.00</span>
//                      </uni-text>
//                   </uni-view>
//                   <uni-view
//                      data-v-b19b400c="" class="benefit-item">
//                      <img
//                      data-v-b19b400c="" src="/static/img/check.png"
//                      alt=""
//                      style={{width: '20px', marginRight: '5px'}}/>
//                      <uni-text
//                         data-v-b19b400c=""
//                         class="benefit-text"><span>Optional investment
//                         period (hours):
//                         8,12</span>
//                      </uni-text>
//                   </uni-view>
//                   <uni-view
//                      data-v-b19b400c="" class="benefit-item">
//                      <img
//                      data-v-b19b400c="" src="/static/img/check.png"
//                      alt=""
//                      style={{width: '20px', marginRight: '5px'}}/>
//                      <uni-text
//                         data-v-b19b400c=""
//                         class="benefit-text"><span>Low risk, high
//                         return</span>
//                      </uni-text>
//                   </uni-view>
//                   <uni-view
//                      data-v-b19b400c="" class="benefit-item">
//                      <img
//                      data-v-b19b400c="" src="/static/img/check.png"
//                      alt=""
//                      style={{width: '20px', marginRight: '5px'}}/>
//                      <uni-text
//                         data-v-b19b400c=""
//                         class="benefit-text"><span>Access to faster
//                         customer
//                         service</span>
//                      </uni-text>
//                   </uni-view>
//                   <uni-view
//                      data-v-b19b400c="" class="benefit-item">
//                      <img
//                      data-v-b19b400c="" src="/static/img/check.png"
//                      alt=""
//                      style={{width: '20px', marginRight: '5px'}}/>
//                      <uni-text
//                         data-v-b19b400c=""
//                         class="benefit-text"><span>Faster response
//                         time</span>
//                      </uni-text>
//                   </uni-view>
//                </uni-view>
//                <uni-view
//                   data-v-b19b400c="" class="card-footer">
//                   <uni-button
//                      data-v-b19b400c=""
//                      class="subscribe-button">Buy</uni-button>
//                </uni-view>
//             </uni-view>
//             <uni-view
//                data-v-b19b400c="" class="right"><img data-v-b19b400c=""
//                src="{{asset('')}}static/img/cardright.png"
//                alt=""/></uni-view>
//          </uni-view>
//       </uni-view>
//       ))}
//    </Slider>
//    </uni-swiper-item>
       
      
//   );
// };

// export default SimpleSlider;

// =========================







// <uni-swiper-item
// data-v-7542ab04=""
// style={{position: 'absolute', width: '100%', height: '100%', transform: 'translate(100%, 0px) translateZ(0px)'}}>
// <uni-view
//    data-v-b19b400c="" data-v-7542ab04="" class="product-card">
//    <uni-view
//       data-v-b19b400c="" class="box">
//       <uni-view data-v-b19b400c=""
//          class="left"><img data-v-b19b400c=""
//          src="/static/img/cardleft.png"
//          alt=""/></uni-view>
//       <uni-view data-v-b19b400c=""
//          class="mid">
//          <uni-view data-v-b19b400c=""
//             class="card-header">
//             <uni-view data-v-b19b400c=""
//                class="title">S2-IntelliCalc Starter
//                Edition
//             </uni-view>
//             <uni-text data-v-b19b400c=""
//                class="price"><span>4.00<span data-v-b19b400c=""
//                style={{fontSize: '14px', lineHeight: '17px', color: 'rgba(255, 255, 255, 0.5)'}}>/month</span></span></uni-text>
             
//          </uni-view>
//          <uni-view
//             data-v-b19b400c=""
//             class="card-title">Benefits</uni-view>
//          <uni-view
//             data-v-b19b400c="" class="card-body">
//             <uni-view
//                data-v-b19b400c="" class="benefit-item">
//                <img
//                   data-v-b19b400c="" src="/static/img/check.png"
//                   alt=""
//                   style={{width: '20px', marginRight: '5px'}}/>
//                <uni-text
//                   data-v-b19b400c=""
//                   class="benefit-text"><span>Renew at half
//                   price</span>
//                </uni-text>
//             </uni-view>
//             <uni-view
//                data-v-b19b400c="" class="benefit-item">
//                <img
//                   data-v-b19b400c="" src="/static/img/check.png"
//                   alt=""
//                   style={{width: '20px', marginRight: '5px'}}/>
//                <uni-text
//                   data-v-b19b400c=""
//                   class="benefit-text"><span>Amount that can be
//                   invested:
//                   30.00-100.00</span>
//                </uni-text>
//             </uni-view>
//             <uni-view
//                data-v-b19b400c="" class="benefit-item">
//                <img
//                   data-v-b19b400c="" src="/static/img/check.png"
//                   alt=""
//                   style={{width: '20px', marginRight: '5px'}}/>
//                <uni-text
//                   data-v-b19b400c=""
//                   class="benefit-text"><span>Optional investment
//                   period (hours):
//                   8,12</span>
//                </uni-text>
//             </uni-view>
//             <uni-view
//                data-v-b19b400c="" class="benefit-item">
//                <img
//                   data-v-b19b400c="" src="/static/img/check.png"
//                   alt=""
//                   style={{width: '20px', marginRight: '5px'}}/>
//                <uni-text
//                   data-v-b19b400c=""
//                   class="benefit-text"><span>Low risk, high
//                   return</span>
//                </uni-text>
//             </uni-view>
//             <uni-view
//                data-v-b19b400c="" class="benefit-item">
//                <img
//                   data-v-b19b400c="" src="/static/img/check.png"
//                   alt=""
//                   style={{width: '20px', marginRight: '5px'}}/>
//                <uni-text
//                   data-v-b19b400c=""
//                   class="benefit-text"><span>Access to faster
//                   customer
//                   service</span>
//                </uni-text>
//             </uni-view>
//             <uni-view
//                data-v-b19b400c="" class="benefit-item">
//                <img
//                   data-v-b19b400c="" src="/static/img/check.png"
//                   alt=""
//                    style={{width: '20px', marginRight: '5px'}}/>
//                <uni-text
//                   data-v-b19b400c=""
//                   class="benefit-text"><span>Faster response
//                   time</span>
//                </uni-text>
//             </uni-view>
//          </uni-view>
//          <uni-view
//             data-v-b19b400c="" class="card-footer">
//             <uni-button
//                data-v-b19b400c=""
//                class="subscribe-button">Buy</uni-button>
//          </uni-view>
//       </uni-view>
//       <uni-view
//          data-v-b19b400c="" class="right"><img data-v-b19b400c=""
//          src="{{asset('')}}static/img/cardright.png"
//          alt=""/></uni-view>
//    </uni-view>
// </uni-view>
// </uni-swiper-item>
// <uni-swiper-item
// data-v-7542ab04=""
// style={{position: 'absolute', width: '100%', height: '100%', transform: 'translate(200%, 0px) translateZ(0px)'}}>
// <uni-view
//    data-v-b19b400c="" data-v-7542ab04="" class="product-card">
//    <uni-view
//       data-v-b19b400c="" class="box">
//       <uni-view data-v-b19b400c=""
//          class="left"><img data-v-b19b400c=""
//          src="/static/img/cardleft.png"
//          alt=""/></uni-view>
//       <uni-view data-v-b19b400c=""
//          class="mid">
//          <uni-view data-v-b19b400c=""
//             class="card-header">
//             <uni-view data-v-b19b400c=""
//                class="title">S3-IntelliCalc Core
//                Edition
//             </uni-view>
//             <uni-text data-v-b19b400c=""
//                class="price"><span>10.00<span data-v-b19b400c=""
//                style={{fontSize: '14px', lineHeight: '17px', color: 'rgba(255, 255, 255, 0.5)'}}>/month</span></span></uni-text>
             
//          </uni-view>
//          <uni-view
//             data-v-b19b400c=""
//             class="card-title">Benefits</uni-view>
//          <uni-view
//             data-v-b19b400c="" class="card-body">
//             <uni-view
//                data-v-b19b400c="" class="benefit-item">
//                <img
//                   data-v-b19b400c="" src="/static/img/check.png"
//                   alt=""
//                    style={{width: '20px', marginRight: '5px'}}/>
//                <uni-text
//                   data-v-b19b400c=""
//                   class="benefit-text"><span>Renew at half
//                   price</span>
//                </uni-text>
//             </uni-view>
//             <uni-view
//                data-v-b19b400c="" class="benefit-item">
//                <img
//                   data-v-b19b400c="" src="/static/img/check.png"
//                   alt=""
//                    style={{width: '20px', marginRight: '5px'}}/>
//                <uni-text
//                   data-v-b19b400c=""
//                   class="benefit-text"><span>Amount that can be
//                   invested:
//                   100.00-500.00</span>
//                </uni-text>
//             </uni-view>
//             <uni-view
//                data-v-b19b400c="" class="benefit-item">
//                <img
//                   data-v-b19b400c="" src="/static/img/check.png"
//                   alt=""
//                    style={{width: '20px', marginRight: '5px'}}/>
//                <uni-text
//                   data-v-b19b400c=""
//                   class="benefit-text"><span>Optional investment
//                   period (hours):
//                   12,24</span>
//                </uni-text>
//             </uni-view>
//             <uni-view
//                data-v-b19b400c="" class="benefit-item">
//                <img
//                   data-v-b19b400c="" src="/static/img/check.png"
//                   alt=""
//                    style={{width: '20px', marginRight: '5px'}}/>
//                <uni-text
//                   data-v-b19b400c=""
//                   class="benefit-text"><span>Low risk, high
//                   return</span>
//                </uni-text>
//             </uni-view>
//             <uni-view
//                data-v-b19b400c="" class="benefit-item">
//                <img
//                   data-v-b19b400c="" src="/static/img/check.png"
//                   alt=""
//                    style={{width: '20px', marginRight: '5px'}}/>
//                <uni-text
//                   data-v-b19b400c=""
//                   class="benefit-text"><span>Access to faster
//                   customer
//                   service</span>
//                </uni-text>
//             </uni-view>
//             <uni-view
//                data-v-b19b400c="" class="benefit-item">
//                <img
//                   data-v-b19b400c="" src="/static/img/check.png"
//                   alt=""
//                    style={{width: '20px', marginRight: '5px'}}/>
//                <uni-text
//                   data-v-b19b400c=""
//                   class="benefit-text"><span>Faster response
//                   time</span>
//                </uni-text>
//             </uni-view>
//          </uni-view>
//          <uni-view
//             data-v-b19b400c="" class="card-footer">
//             <uni-button
//                data-v-b19b400c=""
//                class="subscribe-button">Buy</uni-button>
//          </uni-view>
//       </uni-view>
//       <uni-view
//          data-v-b19b400c="" class="right"><img data-v-b19b400c=""
//          src="{{asset('')}}static/img/cardright.png"
//          alt=""/></uni-view>
//    </uni-view>
// </uni-view>
// </uni-swiper-item>
// <uni-swiper-item
// data-v-7542ab04=""
// style={{position: 'absolute', width: '100%', height: '100%', transform: 'translate(300%, 0px) translateZ(0px)'}}>
// <uni-view
//    data-v-b19b400c="" data-v-7542ab04="" class="product-card">
//    <uni-view
//       data-v-b19b400c="" class="box">
//       <uni-view data-v-b19b400c=""
//          class="left"><img data-v-b19b400c=""
//          src="/static/img/cardleft.png"
//          alt=""/></uni-view>
//       <uni-view data-v-b19b400c=""
//          class="mid">
//          <uni-view data-v-b19b400c=""
//             class="card-header">
//             <uni-view data-v-b19b400c=""
//                class="title">S4-IntelliCalc Breakthrough
//                Edition
//             </uni-view>
//             <uni-text data-v-b19b400c=""
//                class="price"><span>40.00<span data-v-b19b400c=""
//                style={{fontSize: '14px', lineHeight: '17px', color: 'rgba(255, 255, 255, 0.5)'}}>/month</span></span></uni-text>
             
//          </uni-view>
//          <uni-view
//             data-v-b19b400c=""
//             class="card-title">Benefits</uni-view>
//          <uni-view
//             data-v-b19b400c="" class="card-body">
//             <uni-view
//                data-v-b19b400c="" class="benefit-item">
//                <img
//                   data-v-b19b400c="" src="/static/img/check.png"
//                   alt=""
//                    style={{width: '20px', marginRight: '5px'}}/>
//                <uni-text
//                   data-v-b19b400c=""
//                   class="benefit-text"><span>Renew at half
//                   price</span>
//                </uni-text>
//             </uni-view>
//             <uni-view
//                data-v-b19b400c="" class="benefit-item">
//                <img
//                   data-v-b19b400c="" src="/static/img/check.png"
//                   alt=""
//                    style={{width: '20px', marginRight: '5px'}}/>
//                <uni-text
//                   data-v-b19b400c=""
//                   class="benefit-text"><span>Amount that can be
//                   invested:
//                   500.00-2500.00</span>
//                </uni-text>
//             </uni-view>
//             <uni-view
//                data-v-b19b400c="" class="benefit-item">
//                <img
//                   data-v-b19b400c="" src="/static/img/check.png"
//                   alt=""
//                    style={{width: '20px', marginRight: '5px'}}/>
//                <uni-text
//                   data-v-b19b400c=""
//                   class="benefit-text"><span>Optional investment
//                   period (hours):
//                   24,48</span>
//                </uni-text>
//             </uni-view>
//             <uni-view
//                data-v-b19b400c="" class="benefit-item">
//                <img
//                   data-v-b19b400c="" src="/static/img/check.png"
//                   alt=""
//                    style={{width: '20px', marginRight: '5px'}}/>
//                <uni-text
//                   data-v-b19b400c=""
//                   class="benefit-text"><span>Low risk, high
//                   return</span>
//                </uni-text>
//             </uni-view>
//             <uni-view
//                data-v-b19b400c="" class="benefit-item">
//                <img
//                   data-v-b19b400c="" src="/static/img/check.png"
//                   alt=""
//                    style={{width: '20px', marginRight: '5px'}}/>
//                <uni-text
//                   data-v-b19b400c=""
//                   class="benefit-text"><span>Access to faster
//                   customer
//                   service</span>
//                </uni-text>
//             </uni-view>
//             <uni-view
//                data-v-b19b400c="" class="benefit-item">
//                <img
//                   data-v-b19b400c="" src="/static/img/check.png"
//                   alt=""
//                    style={{width: '20px', marginRight: '5px'}}/>
//                <uni-text
//                   data-v-b19b400c=""
//                   class="benefit-text"><span>Faster response
//                   time</span>
//                </uni-text>
//             </uni-view>
//          </uni-view>
//          <uni-view
//             data-v-b19b400c="" class="card-footer">
//             <uni-button
//                data-v-b19b400c=""
//                class="subscribe-button">Buy</uni-button>
//          </uni-view>
//       </uni-view>
//       <uni-view
//          data-v-b19b400c="" class="right"><img data-v-b19b400c=""
//          src="/static/img/cardright.png"
//          alt=""/></uni-view>
//    </uni-view>
// </uni-view>
// </uni-swiper-item>
// <uni-swiper-item
// data-v-7542ab04=""
// style={{position: 'absolute', width: '100%', height: '100%', transform: 'translate(400%, 0px) translateZ(0px)'}}>
// <uni-view
//    data-v-b19b400c="" data-v-7542ab04="" class="product-card">
//    <uni-view
//       data-v-b19b400c="" class="box">
//       <uni-view data-v-b19b400c=""
//          class="left"><img data-v-b19b400c=""
//          src="/static/img/cardleft.png"
//          alt=""/></uni-view>
//       <uni-view data-v-b19b400c=""
//          class="mid">
//          <uni-view data-v-b19b400c=""
//             class="card-header">
//             <uni-view data-v-b19b400c=""
//                class="title">S5-IntelliCalc Pinnacle
//                Edition
//             </uni-view>
//             <uni-text data-v-b19b400c=""
//                class="price"><span>150.00<span data-v-b19b400c=""
//                style={{fontSize: '14px;', lineHeight: '17px', color: 'rgba(255, 255, 255, 0.5)'}}>/month</span></span></uni-text>
             
//          </uni-view>
//          <uni-view
//             data-v-b19b400c=""
//             class="card-title">Benefits</uni-view>
//          <uni-view
//             data-v-b19b400c="" class="card-body">
//             <uni-view
//                data-v-b19b400c="" class="benefit-item">
//                <img
//                   data-v-b19b400c="" src="/static/img/check.png"
//                   alt=""
//                    style={{width: '20px', marginRight: '5px'}}/>
//                <uni-text
//                   data-v-b19b400c=""
//                   class="benefit-text"><span>Renew at half
//                   price</span>
//                </uni-text>
//             </uni-view>
//             <uni-view
//                data-v-b19b400c="" class="benefit-item">
//                <img
//                   data-v-b19b400c="" src="/static/img/check.png"
//                   alt=""
//                    style={{width: '20px', marginRight: '5px'}}/>
//                <uni-text
//                   data-v-b19b400c=""
//                   class="benefit-text"><span>Amount that can be
//                   invested:
//                   2500.00-10000.00</span>
//                </uni-text>
//             </uni-view>
//             <uni-view
//                data-v-b19b400c="" class="benefit-item">
//                <img
//                   data-v-b19b400c="" src="/static/img/check.png"
//                   alt=""
//                    style={{width: '20px', marginRight: '5px'}}/>
//                <uni-text
//                   data-v-b19b400c=""
//                   class="benefit-text"><span>Optional investment
//                   period (hours):
//                   24,72,120,168</span>
//                </uni-text>
//             </uni-view>
//             <uni-view
//                data-v-b19b400c="" class="benefit-item">
//                <img
//                   data-v-b19b400c="" src="/static/img/check.png"
//                   alt=""
//                    style={{width: '20px', marginRight: '5px'}}/>
//                <uni-text
//                   data-v-b19b400c=""
//                   class="benefit-text"><span>Low risk, high
//                   return</span>
//                </uni-text>
//             </uni-view>
//             <uni-view
//                data-v-b19b400c="" class="benefit-item">
//                <img
//                   data-v-b19b400c="" src="/static/img/check.png"
//                   alt=""
//                    style={{width: '20px', marginRight: '5px'}}/>
//                <uni-text
//                   data-v-b19b400c=""
//                   class="benefit-text"><span>Access to faster
//                   customer
//                   service</span>
//                </uni-text>
//             </uni-view>
//             <uni-view
//                data-v-b19b400c="" class="benefit-item">
//                <img
//                   data-v-b19b400c="" src="/static/img/check.png"
//                   alt=""
//                    style={{width: '20px', marginRight: '5px'}}/>
//                <uni-text
//                   data-v-b19b400c=""
//                   class="benefit-text"><span>Faster response
//                   time</span>
//                </uni-text>
//             </uni-view>
//          </uni-view>
//          <uni-view
//             data-v-b19b400c="" class="card-footer">
//             <uni-button
//                data-v-b19b400c=""
//                class="subscribe-button">Buy</uni-button>
//          </uni-view>
//       </uni-view>
//       <uni-view
//          data-v-b19b400c="" class="right"><img data-v-b19b400c=""
//          src="/static/img/cardright.png"
//          alt=""/></uni-view>
//    </uni-view>
// </uni-view>
// </uni-swiper-item>
// <uni-swiper-item
// data-v-7542ab04=""
// style={{position: 'absolute', width: '100%', height: '100%', transform: 'translate(500%, 0px) translateZ(0px)'}}>
// <uni-view
//    data-v-b19b400c="" data-v-7542ab04="" class="product-card">
//    <uni-view
//       data-v-b19b400c="" class="box">
//       <uni-view data-v-b19b400c=""
//          class="left"><img data-v-b19b400c=""
//          src="/static/img/cardleft.png"
//          alt=""/></uni-view>
//       <uni-view data-v-b19b400c=""
//          class="mid">
//          <uni-view data-v-b19b400c=""
//             class="card-header">
//             <uni-view data-v-b19b400c=""
//                class="title">S6-IntelliCalc Supreme
//                Edition
//             </uni-view>
//             <uni-text data-v-b19b400c=""
//                class="price"><span>500.00<span data-v-b19b400c=""
//                style={{fontSize: '14px', lineHeight: '17px', color: 'rgba(255, 255, 255, 0.5)'}}>/month</span></span></uni-text>
             
//          </uni-view>
//          <uni-view
//             data-v-b19b400c=""
//             class="card-title">Benefits</uni-view>
//          <uni-view
//             data-v-b19b400c="" class="card-body">
//             <uni-view
//                data-v-b19b400c="" class="benefit-item">
//                <img
//                   data-v-b19b400c="" src="/static/img/check.png"
//                   alt=""
//                   style={{width: '20px', marginRight: '5px'}}/>
//                <uni-text
//                   data-v-b19b400c=""
//                   class="benefit-text"><span>Renew at half
//                   price</span>
//                </uni-text>
//             </uni-view>
//             <uni-view
//                data-v-b19b400c="" class="benefit-item">
//                <img
//                   data-v-b19b400c="" src="/static/img/check.png"
//                   alt=""
//                    style={{width: '20px', marginRight: '5px'}}/>
//                <uni-text
//                   data-v-b19b400c=""
//                   class="benefit-text"><span>Amount that can be
//                   invested:
//                   10000.00-2000000.00</span>
//                </uni-text>
//             </uni-view>
//             <uni-view
//                data-v-b19b400c="" class="benefit-item">
//                <img
//                   data-v-b19b400c="" src="/static/img/check.png"
//                   alt=""
//                   style={{width: '20px',marginRight: '5px'}}/>
//                <uni-text
//                   data-v-b19b400c=""
//                   class="benefit-text"><span>Optional investment
//                   period (hours):
//                   4,8,12,24,48,72,120,168,360</span>
//                </uni-text>
//             </uni-view>
//             <uni-view
//                data-v-b19b400c="" class="benefit-item">
//                <img
//                   data-v-b19b400c="" src="/static/img/check.png"
//                   alt=""
//                   style={{width: '20px', marginRight: '5px'}}/>
//                <uni-text
//                   data-v-b19b400c=""
//                   class="benefit-text"><span>Low risk, high
//                   return</span>
//                </uni-text>
//             </uni-view>
//             <uni-view
//                data-v-b19b400c="" class="benefit-item">
//                <img
//                   data-v-b19b400c="" src="/static/img/check.png"
//                   alt=""
//                   style={{width: '20px', marginRight: '5px'}}/>
//                <uni-text
//                   data-v-b19b400c=""
//                   class="benefit-text"><span>Access to faster
//                   customer
//                   service</span>
//                </uni-text>
//             </uni-view>
//             <uni-view
//                data-v-b19b400c="" class="benefit-item">
//                <img
//                   data-v-b19b400c="" src="/static/img/check.png"
//                   alt=""
//                   style={{width: '20px', marginRight: '5px'}}/>
//                <uni-text
//                   data-v-b19b400c=""
//                   class="benefit-text"><span>Faster response
//                   time</span>
//                </uni-text>
//             </uni-view>
//          </uni-view>
//          <uni-view
//             data-v-b19b400c="" class="card-footer">
//             <uni-button
//                data-v-b19b400c=""
//                class="subscribe-button">Buy</uni-button>
//          </uni-view>
//       </uni-view>
//       <uni-view
//          data-v-b19b400c="" class="right"><img data-v-b19b400c=""
//          src="/static/img/cardright.png"
//          alt=""/></uni-view>
//    </uni-view>
// </uni-view>
// </uni-swiper-item>