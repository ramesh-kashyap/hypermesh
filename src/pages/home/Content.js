import React from 'react';

export default function Content() {
  const handleConnectClick = () => {
    // Add your logic here, e.g., connecting to Discord
    alert('Connect button clicked!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center space-y-4">
        <div className="bg-gray-200 rounded-full p-4">
          <i className="fab fa-discord text-3xl text-black"></i>
        </div>
        <h2 className="text-xl font-semibold text-black"> Discord</h2>
        <button 
          className="bg-black text-white py-2 px-6 rounded-full text-lg" 
          onClick={handleConnectClick} // Add the onClick handler
        >
          Connect
        </button>
      </div>
    </div>
  );
}