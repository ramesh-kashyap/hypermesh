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
                console.log(reaponse.data.direct_team);
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
            <div className="w-full mt-10 flex justify-center text-primary">
                <div className="w-full max-w-[1440px] rounded-lg">
                   
                        <table id="customers">
                                <tr>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Package</th>
                                    <th>Join Date</th>
                                    <th>Status</th>

                                </tr>
                                {users.map((user, index) => (

                                <tr  key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.package} USDT</td>

                                    <td>{formatDate(user.created_at)}</td>

                                    <td>{user.active_status}</td>

                                </tr>



                                
                              
                            ))}
                                </table>

                </div>
            </div>
         
        </div>
    );
};

export default Level;