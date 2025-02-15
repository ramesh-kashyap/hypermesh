import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (

    <div className="fixed bottom-0 w-full bg-white flex md:hidden justify-around shadow-lg" style={{ background: '#ffff',zIndex:1 }}>

      {/* Overview link */}
      <Link
        to="/dashboard" // Replace with the actual route
        className="flex w-1/5 p-[12px] flex-col items-center"
      >
        <img
          alt="overview Icon"
          loading="lazy"
          width="20"
          height="20"
          decoding="async"
          className=""

          src="/upnl/assets/icons/icon-overview.svg"
        />
        <span className="text-xs mt-1 text-white">Overview</span>
      </Link>

      {/* Market link */}
      <Link
        to="Node" // Replace with the actual route
        className="flex w-1/5 p-[12px] flex-col items-center"
      >
        <img
          alt="my_nodes Icon"
          loading="lazy"
          width="20"
          height="20"
          decoding="async"
          className=""
          src="/upnl/assets/icons/icon-nodes.svg"
          style={{ color: 'transparent' }}
        />
        <span className="text-xs mt-1 text-white">Nodes</span>
      </Link>

      {/* Referrals link */}
      <Link
        to="/team" // Replace with the actual route
        className="flex w-1/5 p-[12px] flex-col items-center"
      >
        <img
          alt="referrals Icon"
          loading="lazy"
          width="20"
          height="20"
          decoding="async"
          className=""
          src="/upnl/assets/icons/icon-referrals.svg"
          style={{ color: 'transparent' }}
        />
        <span className="text-xs mt-1 text-white">Referrals</span>
      </Link>

      {/* Profile link */}
      <Link
        to="/wallet" // Replace with the actual route
        className="flex w-1/5 p-[12px] flex-col items-center"
      >
        <img
          alt="profile Icon"
          loading="lazy"
          width="20"
          height="20"
          decoding="async"
          className=""
          src="/upnl/assets/icons/icon-wallet.svg"
          style={{ color: 'transparent' }}
        />
        <span className="text-xs mt-1 text-white">wallet</span>
      </Link>

      <Link
        to="/Profile" // Replace with the actual route
        className="flex w-1/5 p-[12px] flex-col items-center"
      >
        <img
          alt="profile Icon"
          loading="lazy"
          width="20"
          height="20"
          decoding="async"
          className=""
          src="/upnl/assets/icons/icon-profile.svg"
          style={{ color: 'transparent' }}
        />
        <span className="text-xs mt-1 text-white">Profile</span>
      </Link>

    </div>

  );
};

export default Footer;