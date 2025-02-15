import { useEffect, useState } from "react";
import axios from "axios";



const Node = () => {


    const [income, setIncome] = useState([]);
    const [error, setError] = useState("");
    useEffect(() => {
        const fetchNode = async () => {
            const token = localStorage.getItem("token"); // Get JWT Token
            console.log("Token from LocalStorage:", token); // Debugging
    
            if (!token) {
                setError("User not authenticated!");
                return;
            }
    
            try {
                const response = await axios.get("http://localhost:3002/api/auth/direct-income", {
                    headers: { Authorization: `Bearer ${token}` } // ✅ Correct format
                });
    
                
                setIncome(response.data.data);
                console.log(response)
            } catch (err) {
                setError(err.response?.data?.error || "Error fetching income");
            }
        };
    
        fetchNode();
    }, []);
      
    return (
        <div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">
            <div className="w-full mt-10 flex justify-center text-primary">
                <div className="w-full max-w-[1440px] rounded-lg">
                    <div className="flex justify-between mb-4 items-center">
                        <a href="user/subscribe">
                            <button className="px-3 flex items-center h-[34px] bg-[#171717] rounded-[22px] text-[14px] text-white">
                                <img
                                    alt="Add Node Icon"
                                    loading="lazy"
                                    width="16"
                                    height="16"
                                    className="mr-1"
                                    src="/upnl/assets/icons/add_node.svg"
                                />
                                raj
                            </button>
                        </a>
                        <div className="relative">
                            <button className="px-3 h-[34px] bg-white rounded-full shadow">
                                <img
                                    alt="Filter Icon"
                                    loading="lazy"
                                    width="16"
                                    height="16"
                                    src="/upnl/assets/icons/bars-filter.svg"
                                />
                            </button>
                        </div>
                    </div>




                    <div className="bg-white mb-3 p-4 rounded-[16px] font-semibold text-gray-600 text-center">
                        <div className="hidden md:grid grid-cols-5 lg:grid-cols-6">
                            <div className="text-left">Node</div>
                            <div className="hidden lg:inline-block">Unique ID</div>
                            <div>Status</div>
                            <div>Hash Rate</div>
                            <div>Total Uptime</div>
                            <div className="text-right">Today Rewards</div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:hidden">
                            <div className="text-left">Node</div>
                            <div className="text-right">Status</div>
                            <div className="text-right hidden sm:block">Today Rewards</div>
                        </div>
                    </div>


           



                </div>
            </div>
           
        </div>
    );
};

export default Node;