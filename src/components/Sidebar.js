import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation(); // Get current location

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    navigate("/login"); // Redirect to login page
  };

  return (
    <>
      <div className="hidden max-h-screen md:flex flex-col text-black transition-all duration-300 justify-between w-[264px]">
        <div className="flex items-center justify-between border-b border-gray-200">
          <Link
            className="flex items-center py-5 pl-[22px] h-[80px]"
            to="/"
            style={{ width: "182px" }}
          >
            <img
              alt="Logo"
              loading="lazy"
              width="163"
              height="40"
              decoding="async"
              data-nimg="1"
              src="/upnl/assets/icons/logo.png"
              style={{ color: "transparent", width: "150px" }}
            />
          </Link>
          <button className="text-black bg-gray-200 w-6 h-8 text-[20px] rounded-l-lg">
            <img
              alt="close"
              loading="lazy"
              width="40"
              height="40"
              decoding="async"
              data-nimg="1"
              src="/upnl/assets/icons/icon_left.svg"
              style={{ color: "transparent" }}
            />
          </button>
        </div>

        <nav className="my-5 px-5 text-sm font-medium text-[#555]">
          <div className="text-gray-400 text-xs mb-2">MENU</div>
          <Link
  className={`flex items-center py-2 px-3 mb-2 rounded-md ${location.pathname === "/dashboard" ? "bg-green-500 text-white" : "hover:bg-gray-100"}`}
  to="/dashboard"
>
  <img
    alt="overview Icon"
    loading="lazy"
    width="16"
    height="16"
    decoding="async"
    data-nimg="1"
    src={location.pathname === "/dashboard" ? "/upnl/assets/icons/icon-overview_active.svg" : "/upnl/assets/icons/icon-overview.svg"}
    style={{ color: "transparent" }}
  />
  <span className="ml-4">Overview</span>
</Link>

          <Link
            className={`flex items-center py-2 px-3 mb-2 rounded-md ${location.pathname === "/Node" ? "bg-green-500 text-white" : "hover:bg-gray-100"}`}
            to="/Node"
          >
            <img
              alt="my_nodes Icon"
              loading="lazy"
              width="16"
              height="16"
              decoding="async"
              data-nimg="1"
              src="/upnl/assets/icons/icon-nodes.svg"
              style={{ color: "transparent" }}
            />
            <span className="ml-4">Nodes</span>
          </Link>
          <Link
            className={`flex items-center py-2 px-3 mb-2 rounded-md ${location.pathname === "/Team" ? "bg-green-500 text-white" : "hover:bg-gray-100"}`}
            to="/Team"
          >
            <img
              alt="referrals Icon"
              loading="lazy"
              width="16"
              height="16"
              decoding="async"
              data-nimg="1"
              src="/upnl/assets/icons/icon-referrals.svg"
              style={{ color: "transparent" }}
            />
            <span className="ml-4">Referrals</span>
          </Link>
          <Link
            className={`flex items-center py-2 px-3 mb-2 rounded-md ${location.pathname === "/Wallet" ? "bg-green-500 text-white" : "hover:bg-gray-100"}`}
            to="/Wallet"
          >
            <img
              alt="wallet Icon"
              loading="lazy"
              width="16"
              height="16"
              decoding="async"
              data-nimg="1"
              src="/upnl/assets/icons/icon-wallet.svg"
              style={{ color: "transparent" }}
            />
            <span className="ml-4">Wallet</span>
          </Link>
          <Link
            className={`flex items-center py-2 px-3 mb-2 rounded-md ${location.pathname === "/Profile" ? "bg-green-500 text-white" : "hover:bg-gray-100"}`}
            to="/Profile"
          >
            <img
              alt="profile Icon"
              loading="lazy"
              width="16"
              height="16"
              decoding="async"
              data-nimg="1"
              src="/upnl/assets/icons/icon-profile.svg"
              style={{ color: "transparent" }}
            />
            <span className="ml-4">Profile</span>
          </Link>
        </nav>

        <footer className="my-5 px-5 text-sm font-medium text-[#555]">
          <div className="text-gray-400 text-xs mb-2">FOLLOW US</div>
          <a className="flex items-center py-2 px-3 mb-4 rounded" href="#">
            <img
              alt="Discord Icon"
              loading="lazy"
              width="16"
              height="16"
              decoding="async"
              data-nimg="1"
              src="/upnl/assets/icons/icon_discord.svg"
              style={{ color: "transparent" }}
            />
            <span className="ml-4">Discord</span>
          </a>

          {/* Logout Button */}
          <div>
            <button
              className="flex items-center py-2 px-3 mb-4 rounded w-full text-left hover:bg-gray-100"
              onClick={handleLogout}
            >
              <img
                alt="Logout Icon"
                loading="lazy"
                width="16"
                height="16"
                decoding="async"
                data-nimg="1"
                src="/upnl/assets/icons/customer-service.svg"
                style={{ color: "transparent" }}
              />
              <span className="ml-4">Log out</span>
            </button>
          </div>
        </footer>
      </div>
    </>
  );
}