import React, { useState } from "react";

const Trade = () => {
  const [activeTab, setActiveTab] = useState("running");

  return (
    <div class="uni-body pages-trade-trade">
      <uni-app class="uni-app--showtabbar uni-app--maxwidth">
        <uni-page data-page="pages/trade/trade">
          <uni-page-wrapper>
            <uni-page-body>
              <uni-view data-v-7cdca4f6="" class="page">
                <uni-view data-v-7cdca4f6="" class="ellipse"></uni-view>

                <uni-view data-v-7cdca4f6="" class="top-group">
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
                    Running
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
                    Completed
                  </uni-view>
                  
                </uni-view>

                {activeTab === "running" ? (
                  <uni-view data-v-b7dd60dc="" class="history-box">
                    <uni-view data-v-b7dd60dc="" class="item-box">
                      <uni-view data-v-b7dd60dc="" class="history-item">
                        <uni-view data-v-b7dd60dc="" class="first">
                          <uni-view data-v-b7dd60dc="" class="left">
                            <img
                              data-v-b7dd60dc=""
                              src="/static/coin/doge.png"
                              alt=""
                            />
                            DOGE/USDT
                          </uni-view>
                          <uni-view data-v-b7dd60dc="" class="right">
                            Running
                          </uni-view>
                        </uni-view>

                        <uni-view data-v-b7dd60dc="" class="h-line"></uni-view>
                        <uni-view
                          data-v-542626a5=""
                          data-v-b7dd60dc=""
                          class="count-down"
                        >
                          <img
                            data-v-542626a5=""
                            src="/static/img/time.png"
                            alt=""
                          />
                          00:42:13
                        </uni-view>
                        <uni-view data-v-b7dd60dc="" class="text-line">
                          <uni-view data-v-b7dd60dc="" class="title">
                            Order No
                          </uni-view>
                          <uni-view data-v-b7dd60dc="" class="value">
                            USO1Hvl2LC0IOT3D4
                          </uni-view>
                        </uni-view>
                        <uni-view data-v-b7dd60dc="" class="text-line">
                          <uni-view data-v-b7dd60dc="" class="title">
                            Create Time
                          </uni-view>
                          <uni-view data-v-b7dd60dc="" class="value">
                            2025-04-21 14:50:13
                          </uni-view>
                        </uni-view>
                        <uni-view data-v-b7dd60dc="" class="text-line">
                          <uni-view data-v-b7dd60dc="" class="title">
                            End Time
                          </uni-view>
                          <uni-view data-v-b7dd60dc="" class="value">
                            2025-04-21 18:50:13
                          </uni-view>
                        </uni-view>
                        <uni-view data-v-b7dd60dc="" class="text-line">
                          <uni-view data-v-b7dd60dc="" class="title">
                            Investment Amount
                          </uni-view>
                          <uni-view data-v-b7dd60dc="" class="value">
                            11.2174
                          </uni-view>
                        </uni-view>
                        <uni-view data-v-b7dd60dc="" class="text-line">
                          <uni-view data-v-b7dd60dc="" class="title">
                            Insurance
                          </uni-view>
                          <uni-view data-v-b7dd60dc="" class="value">
                            0.0037
                          </uni-view>
                        </uni-view>
                        <uni-view
                          data-v-b7dd60dc=""
                          style={{ height: "10px" }}
                        ></uni-view>
                      </uni-view>
                    </uni-view>
                  </uni-view>
                ) : (
                  <uni-view data-v-7cdca4f6="" class="history-box">
                    <uni-view data-v-7cdca4f6="" class="nodata">
                      <img
                        data-v-7cdca4f6=""
                        src="/static/img/nodata.png"
                        alt=""
                      />
                      No Data
                    </uni-view>
                  </uni-view>
                )}
              </uni-view>
            </uni-page-body>
          </uni-page-wrapper>
        </uni-page>
      </uni-app>
    </div>
  );
};

export default Trade;

{
  /* <div style={styles.container}>
<div style={styles.topGroup}>
  <div
    style={styles.button(activeTab === "running")}
    onClick={() => setActiveTab("running")}
  > 
    Running
  </div>
  <div
    style={styles.button(activeTab === "completed")}
    onClick={() => setActiveTab("completed")}
  >
    Completed
  </div>
</div>

<div style={styles.contentBox}>
  {activeTab === "running" ? (
    <div>
      <h3>Running Tasks</h3>
      <p>List of tasks currently in progress...</p>
    </div>
  ) : (
    <div>
      <h3>Completed Tasks</h3>
      <p>List of completed tasks shown here.</p>
    </div>
  )}
</div>
</div> */
}

// import { useEffect, useState } from "react";
// import axios from "axios";

// const Trade = () => {

//     const [income, setIncome] = useState([]);
//     const [error, setError] = useState("");
//     useEffect(() => {
//         const fetchNode = async () => {
//             const token = localStorage.getItem("token"); // Get JWT Token
//             console.log("Token from LocalStorage:", token); // Debugging

//             if (!token) {
//                 setError("User not authenticated!");
//                 return;
//             }

//             try {
//                 const response = await axios.get("http://localhost:3002/api/auth/direct-income", {
//                     headers: { Authorization: `Bearer ${token}` } // ✅ Correct format
//                 });

//                 setIncome(response.data.data);
//                 console.log(response)
//             } catch (err) {
//                 setError(err.response?.data?.error || "Error fetching income");
//             }
//         };

//         fetchNode();
//     }, []);

//     return (
//         <div class="uni-body pages-trade-trade">
//             <uni-app class="uni-app--showtabbar uni-app--maxwidth">
//                 <uni-page
//                     data-page="pages/trade/trade">

//                     <uni-page-wrapper>
//                         <uni-page-body>
//                             <uni-view data-v-7cdca4f6=""
//                                 class="page">
//                                 <uni-view data-v-7cdca4f6="" class="ellipse"></uni-view>
//                                 <uni-view
//                                     data-v-7cdca4f6="" class="top-group">
//                                     <uni-view data-v-7cdca4f6=""
//                                         class="top-btn selected">Running</uni-view>
//                                     <uni-view data-v-7cdca4f6=""
//                                         class="top-btn">Completed</uni-view>
//                                 </uni-view>
//                                 <uni-view data-v-b7dd60dc="" class="history-box">

//                                     <uni-view data-v-b7dd60dc="" class="item-box">
//                                         <uni-view data-v-b7dd60dc="" class="history-item">
//                                             <uni-view data-v-b7dd60dc="" class="first">
//                                                 <uni-view data-v-b7dd60dc="" class="left"><img data-v-b7dd60dc="" src="/static/coin/doge.png" alt=""/>DOGE/USDT</uni-view>
//                                                 <uni-view data-v-b7dd60dc="" class="right">Running</uni-view>
//                                             </uni-view>

//                                             <uni-view data-v-b7dd60dc="" class="h-line"></uni-view>
//                                             <uni-view data-v-542626a5="" data-v-b7dd60dc="" class="count-down"><img data-v-542626a5="" src="/static/img/time.png" alt=""/>00:42:13</uni-view>
//                                             <uni-view data-v-b7dd60dc="" class="text-line">
//                                                 <uni-view data-v-b7dd60dc="" class="title">Order No</uni-view>
//                                                 <uni-view data-v-b7dd60dc="" class="value">USO1Hvl2LC0IOT3D4</uni-view>
//                                             </uni-view>
//                                             <uni-view data-v-b7dd60dc="" class="text-line">
//                                                 <uni-view data-v-b7dd60dc="" class="title">Create Time</uni-view>
//                                                 <uni-view data-v-b7dd60dc="" class="value">2025-04-21 14:50:13</uni-view>
//                                             </uni-view>
//                                             <uni-view data-v-b7dd60dc="" class="text-line">
//                                                 <uni-view data-v-b7dd60dc="" class="title">End Time</uni-view>
//                                                 <uni-view data-v-b7dd60dc="" class="value">2025-04-21 18:50:13</uni-view>
//                                             </uni-view>
//                                             <uni-view data-v-b7dd60dc="" class="text-line">
//                                                 <uni-view data-v-b7dd60dc="" class="title">Investment Amount</uni-view>
//                                                 <uni-view data-v-b7dd60dc="" class="value">11.2174</uni-view>
//                                             </uni-view>
//                                             <uni-view data-v-b7dd60dc="" class="text-line">
//                                                 <uni-view data-v-b7dd60dc="" class="title">Insurance</uni-view>
//                                                 <uni-view data-v-b7dd60dc="" class="value">0.0037</uni-view>
//                                             </uni-view>
//                                             <uni-view data-v-b7dd60dc="" style={{height: '10px'}}></uni-view>
//                                         </uni-view>
//                                     </uni-view>
//                                 </uni-view>
//                                 <uni-view data-v-7cdca4f6=""
//                                     class="history-box">
//                                     {/* <uni-view data-v-7cdca4f6="" class="nodata"><img data-v-7cdca4f6=""
//                                         src="/static/img/nodata.png" alt="" />No
//                                         Data
//                                     </uni-view> */}

//                                 </uni-view>

//                             </uni-view>
//                         </uni-page-body>
//                     </uni-page-wrapper>
//                 </uni-page>

//             </uni-app>
//         </div>
//     );
// };

// export default Trade;
