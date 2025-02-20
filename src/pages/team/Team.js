import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import Api from "../../Requests/Api";
const Team = () => {
    const navigate = useNavigate(); 
    const copyToClipboard = () => {
        const textToCopy = document.getElementById('textToCopy').innerText;
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('Copied to clipboard!');
        });
    };



    const [income, setIncome] = useState([]);
    const [error, setError] = useState("");
    useEffect(() => {
        fetchteam();
    }, []);


    const fetchteam = async () => {
        const token = localStorage.getItem("token"); // Get JWT Token
        console.log("Token from LocalStorage:", token); // Debugging

        if (!token) {
            setError("User not authenticated!");
            return;
        }
        try {
            const data2 ={token:token};
            const response =await Api.post('auth/team',data2);                
            setIncome(response.data);


            
            // console.log(response.data)
        } catch (err) {
            setError(err.response?.data?.error || "Error fetching income");
        }
    };






    return (
        <div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">
            <div className="w-full mt-10 flex justify-center text-primary">
                <div className="w-full max-w-[1440px] rounded-lg">
                    <div className="max-w-[1920px] w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-5 rounded-[16px] flex flex-col items-left">
                            <div className="flex mb-[14px]">
                                <div className="bg-green-100 rounded-full p-2">
                                    <img alt="Total Rewards Icon" loading="lazy" width="32" height="32" src="/upnl/assets/icons/stats_reward.svg" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-medium mb-1">Total Members</h3>
                                <div className="flex items-baseline">
                                    <p className="text-[32px] font-semibold mr-2" style={{ fontFamily: 'ClashDisplay-Semibold' }}>
                                        <span>{income.data?.totalTeam}</span>
                                    </p>
                                    <p className="text-secondary">Members</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-5 rounded-[16px] max-h-[226px] h-full flex flex-col">
                            <div className="flex items-center justify-between w-full mb-[14px]">
                                <div className="bg-blue-100 rounded-full p-2">
                                    <img alt="Today's Rewards Icon" loading="lazy" width="32" height="32" src="/upnl/assets/icons/icon_total_rewards.svg" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-medium mb-1">Total Valid</h3>
                                <div className="flex items-baseline">
                                    <p className="text-[32px] font-semibold mr-2" style={{ fontFamily: 'ClashDisplay-Semibold' }}>
                                        <span> {income.data?.ActivetotalTeam}</span>
                                    </p>
                                    <p className="text-secondary">Members</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-5 h-full rounded-[16px] flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-center mb-[14px]">
                                    <h3 className="text-[20px] font-medium text-primary">Referrals</h3>
                                    <button className="text-sm flex items-center h-[32px] px-4 py-1 rounded-[22px] bg-[#F1F1F1]">
                                        <img alt="Filter Icon" loading="lazy" width="20" height="20" src="/upnl/assets/icons/users.svg" />
                                        <p className="pl-3 font-semibold text-[16px]">0</p>
                                    </button>
                                </div>
                            </div>
                            <button className="flex rounded-[24px] justify-center items-center align-center border border-[#F1F1F1] text-[#373737] bg-[#F9F9F9] h-[36px] py-2 px-3" style={{ fontFamily: 'ClashDisplay-Semibold' }}>
                                <p className="mr-3" id="textToCopy">11223344</p>
                                <img alt="Copy Icon" loading="lazy" width="16" height="16" onClick={copyToClipboard} src="/upnl/assets/icons/copy_clipboard.svg" />
                            </button>
                            <button className="mt-1 text-[#00C076] font-medium">Copy referral link</button>
                        </div>
                    </div>

                    <div className="flex justify-between mb-4 items-center"></div>
                    <div class="bg-white p-6 max-h-[226px] h-full col-span-full lg:col-span-1 rounded-[16px] flex flex-col justify-between"  style={{marginBottom: 24 , maxHeight:'257px'}} >
                <div>
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-[20px] font-medium text-black">First generation data </h3>
                        
                        <a onClick={() => navigate("/level?selected_level=1")}>
                            <button class="text-sm flex items-center px-3 py-1 rounded-[22px] bg-[#F1F1F1]">View List<span class="ml-1">→</span></button>
                        </a>
                    </div>
                </div>
                <div class="space-y-2 h-fit">
                    
                    <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center" >
                        <span class="text-xs">Numbers Users</span>
                        <span class="text-xs">{income.data?.gen_team1total ||0}/{income.data?.active_gen_team1total ||0}</span>
                    </div>

                    <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center" >
                        <span class="text-xs">Cumulative Income</span>
                        <span class="text-xs">{income.data?.gen_team1Recharge || 0}</span>
                    </div>
                    <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center">
                        <span class="text-xs">Cumulative Withdrawal</span>
                        <span class="text-xs">{income.data?.gen_team1Withdraw || 0} </span>
                    </div>

                    
                    <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center">
                        <span class="text-xs">Cumulative Yield</span><span class="text-xs">{income.data?.gen_team1Earning || 0} USDT</span>
                    </div>
                   

                    
                </div>
            
            </div>
            <div class="bg-white p-6 max-h-[226px] h-full col-span-full lg:col-span-1 rounded-[16px] flex flex-col justify-between"  style={{marginBottom: 24 , maxHeight:'257px'}} >
                <div>
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-[20px] font-medium text-black">Second generation data </h3>
                        
                        <a onClick={() => navigate("/level?selected_level=2")}>
                            <button class="text-sm flex items-center px-3 py-1 rounded-[22px] bg-[#F1F1F1]">View List<span class="ml-1">→</span></button>
                        </a>
                    </div>
                </div>
                <div class="space-y-2 h-fit">
                    
                    <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center" >
                        <span class="text-xs">Numbers Users</span>
                        <span class="text-xs">{income.data?.gen_team2total ||0}/{income.data?.active_gen_team2total ||0}</span>
                    </div>

                    <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center" >
                        <span class="text-xs">Cumulative Income</span>
                        <span class="text-xs">{income.data?.gen_team2Recharge || 0}</span>
                    </div>
                    <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center">
                        <span class="text-xs">Cumulative Withdrawal</span>
                        <span class="text-xs">{income.data?.gen_team2Withdraw || 0} </span>
                    </div>

                    
                    <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center">
                        <span class="text-xs">Cumulative Yield</span><span class="text-xs">{income.data?.gen_team2Earning || 0} USDT</span>
                    </div>
                   

                    
                </div>
            
            </div>
            <div class="bg-white p-6 max-h-[226px] h-full col-span-full lg:col-span-1 rounded-[16px] flex flex-col justify-between"  style={{marginBottom: 24 , maxHeight:'257px'}} >
                <div>
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-[20px] font-medium text-black">Third  generation data </h3>
                        
                        <a onClick={() => navigate("/level?selected_level=3")}>
                            <button class="text-sm flex items-center px-3 py-1 rounded-[22px] bg-[#F1F1F1]">View List<span class="ml-1">→</span></button>
                        </a>
                    </div>
                </div>
                <div class="space-y-2 h-fit">
                    
                    <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center" >
                        <span class="text-xs">Numbers Users</span>
                        <span class="text-xs">{income.data?.gen_team3total ||0}/{income.data?.active_gen_team3total ||0}</span>
                    </div>

                    <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center" >
                        <span class="text-xs">Cumulative Income</span>
                        <span class="text-xs">{income.data?.gen_team3Recharge || 0}</span>
                    </div>
                    <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center">
                        <span class="text-xs">Cumulative Withdrawal</span>
                        <span class="text-xs">{income.data?.gen_team3Withdraw || 0} </span>
                    </div>

                    
                    <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center">
                        <span class="text-xs">Cumulative Yield</span><span class="text-xs">{income.data?.gen_team3Earning || 0} USDT</span>
                    </div>
                   

                    
                </div>
            
            </div>

            <div class="bg-white p-6 max-h-[226px] h-full col-span-full lg:col-span-1 rounded-[16px] flex flex-col justify-between"  style={{marginBottom: 24 , maxHeight:'257px'}} >
                <div>
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-[20px] font-medium text-black">Fourth  generation data </h3>
                        
                        <a onClick={() => navigate("/level?selected_level=4")}>
                            <button class="text-sm flex items-center px-3 py-1 rounded-[22px] bg-[#F1F1F1]">View List<span class="ml-1">→</span></button>
                        </a>
                    </div>
                </div>
                <div class="space-y-2 h-fit">
                    
                    <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center" >
                        <span class="text-xs">Numbers Users</span>
                        <span class="text-xs">{income.data?.gen_team4total ||0}/{income.data?.active_gen_team4total ||0}</span>
                    </div>

                    <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center" >
                        <span class="text-xs">Cumulative Income</span>
                        <span class="text-xs">{income.data?.gen_team4Recharge || 0}</span>
                    </div>
                    <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center">
                        <span class="text-xs">Cumulative Withdrawal</span>
                        <span class="text-xs">{income.data?.gen_team4Withdraw || 0} </span>
                    </div>

                    
                    <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center">
                        <span class="text-xs">Cumulative Yield</span><span class="text-xs">{income.data?.gen_team4Earning || 0} USDT</span>
                    </div>
                   

                    
                </div>
            
            </div>

            <div class="bg-white p-6 max-h-[226px] h-full col-span-full lg:col-span-1 rounded-[16px] flex flex-col justify-between"  style={{marginBottom: 24 , maxHeight:'257px'}} >
                <div>
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-[20px] font-medium text-black">Fifth  generation data </h3>
                        
                        <a onClick={() => navigate("/level?selected_level=5")}>
                            <button class="text-sm flex items-center px-3 py-1 rounded-[22px] bg-[#F1F1F1]">View List<span class="ml-1">→</span></button>
                        </a>
                    </div>
                </div>
                <div class="space-y-2 h-fit">
                    
                    <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center" >
                        <span class="text-xs">Numbers Users</span>
                        <span class="text-xs">{income.data?.gen_team5total ||0}/{income.data?.active_gen_team5total ||0}</span>
                    </div>

                    <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center" >
                        <span class="text-xs">Cumulative Income</span>
                        <span class="text-xs">{income.data?.gen_team5Recharge || 0}</span>
                    </div>
                    <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center">
                        <span class="text-xs">Cumulative Withdrawal</span>
                        <span class="text-xs">{income.data?.gen_team5Withdraw || 0} </span>
                    </div>

                    
                    <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center">
                        <span class="text-xs">Cumulative Yield</span><span class="text-xs">{income.data?.gen_team5Earning || 0} USDT</span>
                    </div>
                   

                    
                </div>
            
            </div>



            <div class="bg-white p-6 max-h-[226px] h-full col-span-full lg:col-span-1 rounded-[16px] flex flex-col justify-between"  style={{marginBottom: 24 , maxHeight:'257px'}} >
                <div>
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-[20px] font-medium text-black">Sixth  generation data </h3>
                        
                        <a onClick={() => navigate("/level?selected_level=6")}>
                            <button class="text-sm flex items-center px-3 py-1 rounded-[22px] bg-[#F1F1F1]">View List<span class="ml-1">→</span></button>
                        </a>
                    </div>
                </div>
                <div class="space-y-2 h-fit">
                    
                    <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center" >
                        <span class="text-xs">Numbers Users</span>
                        <span class="text-xs">{income.data?.gen_team6total ||0}/{income.data?.active_gen_team6total ||0}</span>
                    </div>

                    <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center" >
                        <span class="text-xs">Cumulative Income</span>
                        <span class="text-xs">{income.data?.gen_team6Recharge || 0}</span>
                    </div>
                    <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center">
                        <span class="text-xs">Cumulative Withdrawal</span>
                        <span class="text-xs">{income.data?.gen_team6Withdraw || 0} </span>
                    </div>

                    
                    <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center">
                        <span class="text-xs">Cumulative Yield</span><span class="text-xs">{income.data?.gen_team6Earning || 0} USDT</span>
                    </div>
                   

                    
                </div>
            
            </div>
                
                  


                </div>
            </div>
            {/* <Pagelink /> */}



        </div>
    );
};

export default Team;