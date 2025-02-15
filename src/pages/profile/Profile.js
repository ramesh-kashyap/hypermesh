import React, { useState } from 'react';

const Profile = () => {
    const [isPasswordPopupOpen, setPasswordPopupOpen] = useState(false);
    const [isProfilePopupOpen, setProfilePopupOpen] = useState(false);

    const handlePasswordPopupToggle = () => {
        setPasswordPopupOpen(!isPasswordPopupOpen);
    };

    const handleProfilePopupToggle = () => {
        setProfilePopupOpen(!isProfilePopupOpen);
    };

    

    return (
        <div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">
            <div className="w-full mt-10 flex justify-center text-primary">
                <div className="max-w-[1920px] w-full">
                    <div className="w-full relative max-w-[669px] pb-[46px] text-center pt-[36px] bg-[#FFF] rounded-[16px] mx-auto mt-[100px]">
                        <div className="w-[100px] h-[100px] rounded-full mx-auto text-[72px] font-semibold" style={{ background: '#2da9dd', fontFamily: 'ClashDisplay-Semibold' }}>
                            B
                        </div>
                        <a href="/Email" className="absolute right-10 top-10" id="profileShow">
                            <img alt="Edit Icon" loading="lazy" width="28" height="28" src="/upnl/assets/icons/icon-referrals.svg" style={{ color: 'transparent' }} />
                        </a>
                        <div className="mx-auto w-full text-primary text-[28px] font-semibold" style={{ fontFamily: 'ClashDisplay-Semibold' }}>
                            Bernila!
                        </div>
                        <div className="mx-auto w-full text-secondary text-sm mb-[60px]">
                            kumar@gmail.com!
                        </div>
                        <div className="flex flex-wrap md:flex-nowrap mx-auto w-full justify-center">
                            <button className="rounded-[30px] h-[48px] py-3 px-6 bg-[#F1F1F1] md:mr-2 mb-2" onClick={handlePasswordPopupToggle}>
                                Login Password
                            </button>
                            <a className="rounded-[30px] h-[48px] py-3 px-6 bg-[#F1F1F1] md:mr-2 flex items-center justify-center" href="/Tpassword">
                                Change Trx Password
                            </a>
                        </div>
                    </div>







                    

                    {/* Change Password Modal */}
                    {isPasswordPopupOpen && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <form method="post" action="user/edit-password">
                                <input type="hidden" name="_token" value="KKX0De0b1aF69ZyhV4ctcUqPaDEGxVrpSEIoZILh" />
                                <div className="bg-white rounded-[20px] w-[400px] px-8 pt-10 pb-6 text-center relative">
                                    <h2 className="text-lg font-semibold">Change Password</h2>
                                    <div className="mb-4 mt-8 text-left">
                                        <label className="block text-gray-600 mb-1">Email</label>
                                        <input type="text" placeholder="Please enter the new password" value="kumar@gmail.com" id="emailId" name="emailId" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" />
                                    </div>
                                    <div className="mb-4 mt-8 text-left">
                                        <label className="block text-gray-600 mb-1">Verification Code</label>
                                        <div className="input-container" style={{ position: 'relative', width: '100%' }}>
                                            <input type="text" name="code" placeholder="Enter verification code" className="w-full px-3 py-2 border border-gray-300 rounded-[12px] pr-20" />
                                            <span className="code-btn" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: 'gray' }}>
                                                Get Code
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mb-4 mt-4 text-left">
                                        <label className="block text-gray-600 mb-1">New Password</label>
                                        <input type="password" placeholder="Please enter the new password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" />
                                    </div>
                                    <div className="mb-4 mt-4 text-left">
                                        <label className="block text-gray-600 mb-1">Confirm Password</label>
                                        <input type="password" placeholder="Enter the password again to confirm" name="password_confirmation" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" />
                                    </div>
                                    <div className="mt-10">
                                        <button className="w-full h-[46px] mb-2 px-4 py-2 rounded-[30px] bg-black text-white">Confirm</button>
                                        <a href="user/profile-setting" className="w-full h-[46px] px-4 py-2 rounded-[30px] bg-gray-300 inline-block text-center">Cancel</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* Edit Profile Modal */}
                    {isProfilePopupOpen && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white rounded-[20px] w-[400px] px-8 pt-10 pb-6 text-center relative">
                                <h2 className="text-lg font-semibold">Edit Profile</h2>
                                <div className="w-[100px] my-10 h-[100px] mx-auto cursor-pointer">
                                    <div className="w-full h-full rounded-full mx-auto text-[72px] font-semibold" style={{ background: 'rgb(51, 87, 255)', fontFamily: 'ClashDisplay-Semibold' }}>
                                        R
                                    </div>
                                </div>
                                <div className="mb-4 text-left">
                                    <label className="block text-gray-600 mb-1">Name</label>
                                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" placeholder="Enter Full Name" defaultValue="Rajnesh Kumar" />
                                </div>
                                <div className="mt-10">
                                    <button className="w-full h-[46px] mb-2 px-4 py-2 rounded-[30px] bg-black text-white">Save</button>
                                    <button className="w-full h-[46px] px-4 py-2 rounded-[30px] bg-gray-300" onClick={handleProfilePopupToggle}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Profile;