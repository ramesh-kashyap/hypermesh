import { useEffect, useState } from "react";
import axios from "axios";

const NodeDetails = () => {
  const [income, setIncome] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNodeDetails = async () => {
      const token = localStorage.getItem("token"); // Get JWT Token
      console.log("Token from LocalStorage:", token); // Debugging

      if (!token) {
        setError("User  not authenticated!");
        return;
      }

      try {
        const response = await axios.get("http://localhost:3002/api/auth/direct-income", {
          headers: { Authorization: `Bearer ${token}` } // ✅ Correct format
        });

        setIncome(response.data.data);
        console.log(response);
      } catch (err) {
        setError(err.response?.data?.error || "Error fetching income");
      }
    };

    fetchNodeDetails();
  }, []);
  const hasIncomeData = income && income.length > 0;
  return (
    <div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">
      <div className="bg-blue-100 text-blue-800 p-4 rounded-md mb-6">
        <p>
          Please verify your account to receive free <b>BNB</b> (used for rewards claiming fee). 
          <button className="font-bold">Verify Now!</button>
        </p>
      </div>
      <div className="w-full mx-auto mt-10">
        <div className="flex items-center mb-4">
          <button className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900" onClick={() => window.history.back()} style={{ background: '#3fb2d9'}} >← Back</button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 h-fit bg-white p-8 rounded-[20px] shadow-md">
            <div className="flex flex-col items-center mb-10">
              <div className="w-[100px] h-[100px] bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold mb-4">
                <img
                  alt="Node Icon"
                  loading="lazy"
                  width="60"
                  height="60"
                  decoding="async"
                  src="/upnl/assets/icons/node-icon-telegram.svg"
                  style={{ color: "transparent" }}
                />
              </div>
              <h3 className="text-xl font-bold">{hasIncomeData ? income[0].name : "0"}</h3>
              <div className="flex items-center mt-2">
                <span className="flex px-[6px] py-1 rounded-full text-xs bg-[#FFC2BF]">
                  <img
                    alt="Filter Icon"
                    loading="lazy"
                    width="16"
                    height="16"
                    decoding="async"
                    src="/upnl/assets/icons/cross-circle.svg"
                    style={{ color: "transparent" }}
                  />
{hasIncomeData ? income[0].	status : "0"}                </span>
              </div>
            </div>
            <div className="flex w-full gap-6 mt-6 justify-center text-[12px] text-[#999]">
              <div className="w-full px-4 py-3 text-center rounded-[12px]" style={{ border: "1px solid rgb(241, 241, 241)" }}>
                <p>Today Rewards</p>
                <p className="text-[32px] text-primary font-semibold" style={{ fontFamily: "ClashDisplay-Semibold" }}>
                {hasIncomeData ? income[0].	today_reward : "0"}  
                </p>
                <p>Point</p>
              </div>
              <div className="w-full px-4 py-3 text-center rounded-[12px]" style={{ border: "1px solid rgb(241, 241, 241)" }}>
                <p>Total Rewards</p>
                <p className="text-[32px] text-primary font-semibold" style={{ fontFamily: "ClashDisplay-Semibold" }}>
                {hasIncomeData ? income[0].	today_reward : "0"}  
                </p>
                <p>Point</p>
              </div>
            </div>
            <div className="mt-6 text-[14px] font-medium text-[#999] bg-[#F9F9F9] p-5 rounded-xl">
              <div className="flex justify-between mb-3">
                <p>Unique ID</p>
                <span className="text-primary"> {hasIncomeData ? income[0].	user_id_fk : "0"} </span>
              </div>
              <div className="flex justify-between mb-3">
                <p>Activation Date</p>
                <span className="text-primary"> {hasIncomeData ? income[0].	created_at: "0"} </span>
              </div>
              <div className="flex justify-between mb-3">
                <p>Total Uptime</p>
                <span className="text-primary"> {hasIncomeData ? income[0].	total_uptime : "0"} </span>
              </div>
              <div className="flex justify-between mb-3">
                <p>Hash Rate</p>
                <span className="text-primary"> {hasIncomeData ? income[0].		hash_rate: "0"} </span>
              </div>
            </div>
            {/* <div className="text-center">
              <button className="mt-6 px-6 py-0 text-[14px] bg-white text-[#FF3B30] hover:bg-primary-600">Unlink Node</button>
            </div> */}
          </div>
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="bg-white h-full p-6 rounded-[20px] shadow-md">
              <div className="flex justify-between mb-4">
                <h4 className="font-semibold text-lg">Uptime</h4>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 rounded-full bg-black text-white">Daily</button>
                  <button className="px-3 py-1 rounded-full bg-gray-200">Monthly</button>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div className="flex h-full justify-center items-center w-full text-secondary">
                  <div className="max-w-[370px] text-center">
                    <img
                      alt="Icon Empty"
                      loading="lazy"
                      width="64"
                      height="40"
                      decoding="async"
                      className="mx-auto mb-2"
                      src="/upnl/assets/images/empty_state.svg"
                      style={{ color: "transparent", width: "unset" }}
                    />
                    <span className="max-w-[100px]">No uptime data yet. Start contributing to see your progress here!</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white h-full p-6 rounded-[20px] shadow-md">
              <div className="flex justify-between mb-4">
                <h4 className="font-semibold text-lg">Total Rewards</h4>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 rounded-full bg-black text-white">Daily</button>
                  <button className="px-3 py-1 rounded-full bg-gray-200">Monthly</button>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div className="flex h-full justify-center items-center w-full text-secondary">
                  <div className="max-w-[370px] text-center">
                    <img
                      alt="Icon Empty"
                      loading="lazy"
                      width="64"
                      height="40"
                      decoding="async"
                      className="mx-auto mb-2"
                      src="/upnl/assets/images/empty_state.svg"
                      style={{ color: "transparent", width: "unset" }}
                    />
                    <span className="max-w-[100px]">No rewards data yet. Start contributing to see your progress here!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NodeDetails;