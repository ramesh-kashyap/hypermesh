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
    
            } catch (err) {
            setError(err.response?.data?.error || "Error fetching income");
        }
    };


    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit"
      });
    };



  return (
    <div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">
      {/* <div className="bg-blue-100 text-blue-800 p-4 rounded-md mb-6">
        <p>
          Please verify your account to receive free <b>BNB</b>(used for rewards claiming fee).{' '}
          <a className="font-bold" href="/nodes#">Verify Now!</a>
        </p>
      </div> */}
      <div className="w-full flex justify-center text-primary">
        <div className="w-full max-w-[1440px] rounded-lg">
          <div className="flex justify-between mb-4 items-center">
            <button className="px-3 flex items-center h-[34px] bg-[#171717] rounded-[22px] text-[14px] text-white" style={{background: '#54bbd3'}}>
              {/* <img alt="Add Node Icon" loading="lazy" width="16" height="16" src="" className="mr-1" /> */}
              New Node
            </button>
           
          </div>


          
          <div className="bg-white mb-3 p-4 rounded-[16px] font-semibold text-gray-600 text-center">
            <div className="hidden md:grid grid-cols-5 lg:grid-cols-6">
              <div className="text-left">Node</div>
              <div className="hidden lg:inline-block">Unique ID</div>
              <div>Status</div>
              {/* <div>UserName</div> */}
              <div> Date</div>
              <div className="text-right">Today Rewards</div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:hidden">
              <div className="text-left">Node</div>
              <div className="text-right">Status</div>
              <div className="text-right hidden sm:block">Today Rewards</div>
            </div>
          </div>


          {users.length > 0 ? (
            users.map((user, index) => (

          <div className="space-y-4">
            {/* Node Item 1 */}
            <div className="bg-white p-3 rounded-[16px] shadow transition-transform hover:shadow-md cursor-pointer">
              <div className="hidden md:grid grid-cols-5 lg:grid-cols-6 items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {/* <img alt="Node Icon" loading="lazy" width="16" height="16" src="/assets/icons/node-icon-telegram.svg" /> */}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{user.tname}</p>
                    <p className="text-xs text-[#999999]">Telegram Node</p>
                  </div>
                </div>
                <p className="hidden lg:block text-sm text-center font-medium">{user.telegram_id}</p>
                <div className="flex justify-center">
                  <div className="flex px-[6px] py-1 rounded-full text-xs bg-[#FFC2BF]">
                    {/* <img alt="Status Icon" loading="lazy" width="16" height="16" className="mr-1" src="" /> */}
                    {user.status}
                  </div>
                </div>
                {/* <div className="flex justify-center">
                  <p className="text-sm w-fit text-center px-3">{user.tusername} </p>
                </div> */}
                <div className="flex justify-center">
                  <p className="text-sm w-fit text-center px-3 bg-[#F1F1F1] rounded-full">{formatDate(user.created_at)}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold"><span>0</span></p>
                  <p className="text-xs">Total: <span>0 pt</span></p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:hidden items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {/* <img alt="Node Icon" loading="lazy" width="16" height="16" src="" /> */}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{user.telegram_id}</p>
                    <p className="text-xs text-[#999999]">Telegram Node</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="flex px-[6px] py-1 rounded-full text-xs bg-[#FFC2BF]">
                    {/* <img alt="Status Icon" loading="lazy" width="16" height="16" className="mr-1" src="" /> */}
                    {user.status}                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <p className="text-lg font-semibold"><span>0pt</span></p>
                  <p className="text-xs">Total: <span>0pt</span></p>
                </div>
              </div>
            </div>

            {/* Node Item 2 */}
           
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