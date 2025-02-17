import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../../Requests/Api";
import Loader from "../../components/Loader";
import { useLocation } from "react-router-dom";


const Level = () => {
    const location = useLocation();
    const [level, setLevel] = useState([]);
    const [error, setError] = useState("");
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [limit] = useState(10); // Default limit
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [loading, setLoading] = useState(false);
    const { lvl } = useParams(); // 🔹 Get the 'lvl' parameter from URL

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        setLoading(true);
        try {     
            const queryParams = new URLSearchParams(location.search);
            const level = queryParams.get("selected_level"); // Get value from query param
            setSelectedLevel(level);

            console.log(level);
            const reaponse = await Api.get("auth/list", {
            params: { // ✅ Ensure query parameters are passed correctly
                selected_level: level || 0 },
        });

            if (reaponse.data.status) {
                setUsers(reaponse.data.direct_team);
            }

            // console.log(users);

        } catch (error) {
            console.error("❌ Error fetching users:", error);
        }
        setLoading(false);
    };
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false // 24-hour format
        }).replace(",", ""); // Remove comma from output;
    };


    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setPage(1); // Reset to first page when searching
        loadUsers();
    };

  
    const handleLevelChange = (e) => {
        setSelectedLevel(e.target.value);
        setPage(1); // Reset page on level change
    };
    // ✅ Show a loader while fetching data
    if (loading) {
        return <Loader />;
    }
    
    return (
        <div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">
<h1 style={{marginBottom: '20px'}}>Level Team</h1>
{users.map((user, index) => (
            <div class="bg-white p-6 max-h-[226px] h-full col-span-full lg:col-span-1 rounded-[16px] flex flex-col justify-between" key={index} style={{marginBottom: 24}} >
                <div>
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-[20px] font-medium text-black">{user.name} lvl {user.level} </h3>
                        
                        <a href="/nodes">
                            <button class="text-sm flex items-center px-3 py-1 rounded-[22px] bg-[#F1F1F1]">{user.active_status}<span class="ml-1">→</span></button>
                        </a>
                    </div>
                </div>
                <div class="space-y-2 h-fit">
                    <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center" >
                        <span class="text-xs">Join Date</span>
                        <span class="text-xs">{formatDate(user.created_at)}</span>
                    </div>
                    <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center">
                        <span class="text-xs">User ID</span>
                        <span class="text-xs">{user.username} </span>
                    </div>
                    <div class="bg-[#F1F1F1] rounded-[44px] p-3 py-2 flex justify-between items-center">
                        <span class="text-xs">Package</span><span class="text-xs">{user.package} USDT</span>
                    </div>
                </div>
            
            
            </div>

))}

))}
        </div>
    );
};

export default Level;