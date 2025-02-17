import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
  import api from "../../Requests/Api"; 
import axios from 'axios';  
import { Toaster, toast } from "react-hot-toast";

const networkOptions = [
  {
    name: "usdtTrc20",
    logo: "upnl/assets/icons/tron-logo.png",
  },
  {
    name: "usdtBep20",
    logo: "upnl/assets/icons/bnb-logo.png",
  },
];

const WithdrawComponent = () => {
  const [selectedOption, setSelectedOption] = useState(networkOptions[0]);
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState(""); 
  const [withdraws, setWithdraws] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [address, setAddress] = useState(""); 
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);



  const fetchUserAddress = async () => {
    try {
      const response = await api.get("auth/usdt-address");
  
  
      if (response.data) {
        setAddress(response.data[selectedOption.name]); 
      }
    } catch (error) {
      console.error("Error fetching user address:", error);
    }
  };

  useEffect(() => {
    fetchUserAddress();
  }, [selectedOption.name]);

  useEffect(() => {
    const fetchWithdraws = async () => {
        try {
            const response = await api.get(`auth/withdraws?page=${page}&limit=5`);
            setWithdraws(response.data.withdraws);
            setTotalPages(response.data.totalPages);
        } catch (err) {
            setError("Failed to fetch withdraw history");
        } finally {
            setLoading(false);
        }
    };

    fetchWithdraws();
}, [page]); // Depend on page change

const handleWithdraw = async () => {
  try {
    const response = await api.post("auth/withdrawal", { 
      amount, 
      payment_mode: selectedOption.name, 
      address 
    });

    console.log("Withdraw Successful:", response.data);
    toast.success(response.data.message); // Backend ka success message show karega

  } catch (error) {
    console.error("Withdraw failed:", error);

    // Backend se error message properly extract karein
    const errorMessage = error.response && error.response.data && error.response.data.error
      ? error.response.data.error
      : "Withdraw failed. Please try again.";

    setError(errorMessage);
    toast.error(errorMessage); // Proper error message show karega
  }
};


  const DropdownExample = ({ selectedOption, setSelectedOption }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
    };



    if (loading) return <p>Loading...</p>;
    return (
     <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-between rounded-2xl border border-[#F1F1F1] bg-white text-sm w-full h-[65px] p-3 sm:p-5"
        >
          <div className="flex gap-3 font-semibold">
            <div className="flex items-center space-x-2 lg:space-x-3 text-sm">
              <img alt={selectedOption.name} loading="lazy" width="40" height="40" src={selectedOption.logo} />
              <span>{selectedOption.name}</span>
            </div>
          </div>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-2xl mt-1 z-10">
            {networkOptions.map((option, index) => (
              <div 
                key={index}
                onClick={() => handleOptionClick(option)}
                className="p-3 flex items-center gap-3 hover:bg-gray-100 cursor-pointer"
              >
                <img alt={option.name} loading="lazy" width="25" height="25" src={option.logo} />
                <span>{option.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <><Toaster position="top-center" /><div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">
      <div>
        <div className="flex justify-between">
          <span style={{ color: "#fff" }} className="bg-green-500 text-sm rounded-[22px] h-[33px] px-3 bg-black mb-4 mt-10 flex items-center space-x-2 cursor-pointer">
            <img alt="Back Icons" loading="lazy" width="17" height="12" src="upnl/assets/icons/icon-back.svg" />
            <span>Back</span>
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 gap-6">
          <div className="lg:col-span-3 xl:col-span-2 bg-white rounded-[16px] p-6">
            <h2 className="text-xl sm:text-2xl font-bold">Withdraw</h2>

            <div className="w-full flex flex-col gap-3 md:gap-5">
              <div className="flex flex-col gap-2">
                <DropdownExample  selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Address</label>
                <div className="flex gap-3 rounded-2xl  bg-white w-full items-center h-[65px]">
                  <input
                    style={{ borderRadius: '10px' }}
                    className="w-full rounded-2xl border bg-white p-3 sm:p-5 text-sm md:text-base"
                    placeholder="Enter The Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Amount</label>
                <div className="flex gap-3 rounded-2xl  focus-visible:outline-none bg-white w-full items-center h-[65px]">
                  <input
                    style={{ borderRadius: '10px' }}  
                    className="w-full rounded-[10px] border bg-white p-3 sm:p-5 text-sm md:text-base" 
                    placeholder="Minimum withdrawal 0.01 USDT"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>

                <div className="text-[#0E1A32] font-normal text-xs text-right ">
                  <span style={{ color: '#63728E' }}>Available</span> 0 USDT
                </div>

                <hr className="my-2 mt-3" style={{ color: "#eff0f1" }} />
              </div>
            </div>


            <div className="w-full h-[1px] bg-[#F1F1F1]"></div>
            <div className="flex flex-col gap-2 px-0 sm:px-5">
              <div className="flex justify-between items-center mt-5">
                <p className="text-[#63728E] font-normal text-xs">Withdraw Fee</p>
                <div className="text-[#0E1A32] font-normal text-xs">0 BNB</div>
              </div>
              <div className="flex justify-between items-center h-6">
                <p className="text-[#63728E] font-normal text-xs">Received Amount</p>
                <div className="text-[#0E1A32] font-semibold text-base">0 USDT</div>
              </div>
            </div>

            <div className="mt-8 w-full flex justify-end">
              <button style={{ backgroundColor: "#60656ac7", padding: "10px,10px", borderRadius: "50px",color:"rgb(255 255 255 / 92%)", }}
                onClick={handleWithdraw}
                className=" px-6 py-3 rounded-[30px] md:w-auto disabled:opacity-50"
              >
                Confirm
              </button>
            </div>
          </div>

          {/* History section */}
          <div className="bg-white rounded-[16px] p-6 lg:col-span-2 xl:col-span-1">
            <h3 className="font-semibold mb-3">History</h3>
            <div className="space-y-4 h-full">
                {withdraws.length > 0 ? (
                    <>
                        {withdraws.map((withdrawal, index) => (
                            <div key={index} className="flex justify-between items-center py-2 border-b">
                                <div className="w-1/2">
                                    <p className="font-medium">Withdraw</p>
                                    <p className="text-secondary font-light text-sm">
                                        {new Date(withdrawal.created_at).toLocaleString("en-US", {
                                            year: "numeric",
                                            month: "short",
                                            day: "2-digit",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                            second: "2-digit",
                                            hour12: true,
                                        })}
                                    </p>
                                </div>
                                <p style={{ color: "red" }} className="text-green-500">
                                    <span>-{withdrawal.amount}</span>
                                </p>
                            </div>
                        ))}

                        {/* Pagination Controls */}
                        <div className="flex justify-center mt-4">
                            <button
                                onClick={() => setPage(page - 1)}
                                disabled={page === 1}
                                className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
                            >
                                 {"<<"}
                            </button>
                            <span className="px-4 py-2">Page {page} of {totalPages}</span>
                            <button
                                onClick={() => setPage(page + 1)}
                                disabled={page === totalPages}
                                className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
                            >
                                        {">>"}

                            </button>
                        </div>
                    </>
                ) : (
                    <div className="flex h-full justify-center items-center w-full text-secondary">
                        <div className="w-full text-center">
                            <img
                                style={{ width: "60px", height: "60px" }}
                                alt="Icon Empty"
                                loading="lazy"
                                className="mx-auto mb-2"
                                src="upnl/assets/icons/empty_state.svg"
                            />
                            <span>No transactions found</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </div>
      </div>
    </div></>
  );
};

export default WithdrawComponent;