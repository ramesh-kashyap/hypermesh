import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation(); // Get current location

  return (
    <div className="fixed bottom-0 w-full bg-white flex md:hidden justify-around shadow-lg">
      {/* Overview link */}
      <Link
        className="flex flex-col items-center py-2 px-3 w-1/5"
        to="/dashboard"
      >
        <img
          alt="overview Icon"
          loading="lazy"
          width="20"
          height="20"
          decoding="async"
          src="/upnl/assets/icons/icon-overview.svg"
          style={{ color: 'transparent' }}
        />
        <span className={`${location.pathname === "/dashboard" ? "text-[rgb(0,147,233)]" : "text-[#555]"}`}>Nodes</span>
      </Link>

      {/* Market link */}
      <Link
        className="flex flex-col items-center py-2 px-3 w-1/5"
        to="/Market"
      >
        <img
          alt="market Icon"
          loading="lazy"
          width="20"
          height="20"
          decoding="async"
          src="/upnl/assets/icons/icon-nodes.svg"
          style={{ color: 'transparent' }}
        />
        <span className={`${location.pathname === "/Market" ? "text-[rgb(0,147,233)]" : "text-[#555]"}`}>Earn</span>
      </Link>

      {/* Referrals link */}
      <Link
        className="flex flex-col items-center py-2 px-3 w-1/5"
        to="/team"
      >
        <img
          alt="referrals Icon"
          loading="lazy"
          width="20"
          height="20"
          decoding="async"
          src="/upnl/assets/icons/icon-referrals.svg"
          style={{ color: 'transparent' }}
        />
        <span className={`${location.pathname === "/team" ? "text-[rgb(0,147,233)]" : "text-[#555]"}`}>Referrals</span>
      </Link>

      {/* Profile link */}
      <Link
        className="flex flex-col items-center py-2 px-3 w-1/5"
        to="/profile"
      >
        <img
          alt="profile Icon"
          loading="lazy"
          width="20"
          height="20"
          decoding="async"
          src="upnl/assets/icons/icon-profile.svg"
          style={{ color: 'transparent' }}
        />
<span className={`${location.pathname === "/profile" ? "bg-green-50" : "text-[#555]"}`}>Profile</span>

      </Link>
    </div>
  );
}