import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../../Requests/Api";
import Loader from "../../components/Loader";

const Level = () => {
    const [level, setLevel] = useState([]);
    const [error, setError] = useState("");
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [limit] = useState(10); // Default limit
    const [selectedLevel, setSelectedLevel] = useState(0);
    const [loading, setLoading] = useState(false);
    const { lvl } = useParams(); // 🔹 Get the 'lvl' parameter from URL

    useEffect(() => {
        loadUsers();
    }, [page, selectedLevel]);
    const loadUsers = async () => {
        setLoading(true);
        try {
            const reaponse = await Api.get('auth/list', { limit, page, selected_level: selectedLevel, search });

            if (reaponse.data.status) {
                setUsers(reaponse.data.direct_team);
                console.log(reaponse.data.direct_team);
            }

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

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="text-secondary bg-gray-100">
                                    <th className="text-left py-2 px-4 font-medium text-[12px]">Name</th>
                                    <th className="text-right py-2 px-4 font-medium text-[12px]">Join Date</th>
                                    <th className="text-right py-2 px-4 font-medium text-[12px] hidden md:table-cell">Price</th>
                                    <th className="text-right py-2 px-4 font-medium text-[12px]">
                                        <span className="hidden md:inline-block">Total USD</span>
                                        <span className="md:hidden">USD</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index} className="border-t h-[72px]">
                                        <td className="py-4 px-4 flex items-center space-x-2 lg:space-x-3 text-sm">
                                            <img
                                                src="/upnl/assets/icons/icon-referrals.svg"
                                              
                                                width="40"
                                                height="40"
                                                className="color-transparent"
                                            />
                                            <span>{user.name} - {user.username}</span>
                                        </td>
                                        <td className="py-4 px-4 text-right text-sm">
                                            <span>{formatDate(user.created_at)}</span>
                                        </td>
                                        <td className="py-4 px-4 text-primary text-right text-sm hidden md:table-cell">
                                            <span className="text-secondary">{user.active_status}</span>
                                        </td>
                                        <td className="py-4 px-4 text-primary text-right text-sm">
                                            <div className="flex flex-col md:flex-row justify-end gap-1">
                                                <p>
                                                    <span>{user.package?user.package:0} USDT</span>
                                                </p>
                                                <p className="block md:hidden text-secondary text-sm">
                                                    <span>Price: {user.package} USDT</span>
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <div className="fixed bottom-0 w-full bg-white flex md:hidden justify-around shadow-lg">
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="dashboard">
                    <img alt="Overview Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/icon-overview.svg" />
                    <span className="text-xs mt-1 text-gray-400">Overview</span>
                </a>
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="Node">
                    <img alt="My Nodes Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/icon-nodes.svg" />
                    <span className="text-xs mt-1 text-gray-400">Nodes</span>
                </a>
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="team">
                    <img alt="Referrals Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/icon-referrals.svg" />
                    <span className="text-xs mt-1 text-gray-400">Referrals</span>
                </a>
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="wallet">
                    <img alt="Wallet Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/icon-wallet.svg" />
                    <span className="text-xs mt-1 text-green-500">Wallet</span>
                </a>
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="Profile">
                    <img alt="Profile Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/icon-wallet.svg" />
                    <span className="text-xs mt-1 text-green-500">Profile</span>
                </a>
            </div>
        </div>
    );
};

export default Level;