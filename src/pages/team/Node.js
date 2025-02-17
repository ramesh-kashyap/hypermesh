import { useEffect, useState } from "react";
import axios from "axios";
import Api from "../../Requests/Api";



const Node = () => {


    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    useEffect(() => {
        fetchUsers();
    }, []);
    
    const fetchUsers = async () => {
        try {
            const response = await Api.get("auth/telegram-history");
    
            if (response.data && Array.isArray(response.data.data)) {
                setUsers(response.data.data);
            } else {
                setUsers([]); 
            }
    
            console.log(response.data);
    
    
            console.log(response.data.data);
        } catch (err) {
            setError(err.response?.data?.error || "Error fetching income");
        }
    };


    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
            weekday: "short", // Includes day of the week (e.g., Mon, Tue)
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false // Ensures 24-hour format
        }).replace(",", ""); // Remove comma for a cleaner format
    };

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


                    {users.length > 0 ? (
            users.map((user, index) => (
                    <div class="bg-white p-6 max-h-[226px] h-full col-span-full lg:col-span-1 rounded-[16px] flex flex-col justify-between"  key={index}  style={{marginBottom: 24}} >
                <div>
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-[20px] font-medium text-black">{user.tusername}</h3>
                        
                        <a href="/nodes">
                            <button class="text-sm flex items-center px-3 py-1 rounded-[22px] bg-[#F1F1F1]">View<span class="ml-1">→</span></button>
                        </a>
                    </div>
                </div>
                <div class="space-y-2 h-fit">
                    <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center" >
                        <span class="text-xs">Telegram Id</span>
                        <span class="text-xs">{user.telegram_id}</span>
                    </div>
                    <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center">
                        <span class="text-xs">Name</span>
                        <span class="text-xs">{user.tname}</span>
                    </div>
                    <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center">
                        <span class="text-xs">Join date</span><span class="text-xs">{formatDate(user.created_at)}</span>
                    </div>
                </div>
            
            </div>


           
))
) : (
    <p>No users found</p>
)}


                </div>
            </div>
           
        </div>
    );
};

export default Node;