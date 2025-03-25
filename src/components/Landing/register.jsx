// src/Register.jsx  
import React from 'react';

const Register = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#ccc]">
            <div className="bg-white shadow-md rounded-lg px-20 py-10 max-w-[605px] w-full">
                <div className="flex items-center justify-center m-5">
                    {/* <img src="/src/assets/Frame 5.png" alt="" /> */}
                    <div className="flex items-center gap-2 mb-6">
                        <svg width="102" height="92" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="16,4 28,8 28,24 16,28 4,24 4,8" fill="#FFFFFF" />
                            <text x="50%" y="50%" text-anchor="middle" fill="#A03433" font-size="4" dy=".3em">KING</text>
                        </svg>
                        <span className="text-[#000] font-semibold">Medallion</span>
                    </div>
                </div>
                <h2 className="text-2xl font-bold text-center">Welcome to</h2>
                <h1 className="text-3xl font-bold text-center text-gray-800">Medallion</h1>
                <p className="text-gray-600 text-center mb-4">Enter your information below to continue</p>

                <form>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Email
                        <input
                            type="email"
                            required
                            className="mt-1 block w-full bg-[#f0f0f0] border border-[#f0f0f0] rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-purple-300"
                            placeholder="example@gmail.com"
                        />
                    </label>
                    <div className="flex">
                        <label className="block mb-2 mr-5 text-sm font-medium text-gray-700">
                            First name
                            <input
                                type="text"
                                required
                                className="mt-1 block w-full bg-[#f0f0f0] border border-[#f0f0f0] rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-purple-300"
                                placeholder="First Name"
                            />
                        </label>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Last name
                            <input
                                type="text"
                                required
                                className="mt-1 block w-full bg-[#f0f0f0] border border-[#f0f0f0] rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-purple-300"
                                placeholder="Last Name"
                            />
                        </label>
                    </div>

                    <div className="flex">
                        <label className="block mb-2 mr-5 text-sm font-medium text-gray-700">
                            Create Password
                            <input
                                type="password"
                                required
                                className="mt-1 block w-full bg-[#f0f0f0] border border-[#f0f0f0] rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-purple-300"
                                placeholder="..........."
                            />
                        </label>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Confirm Password
                            <input
                                type="password"
                                required
                                className="mt-1 block w-full bg-[#f0f0f0] border border-[#f0f0f0] rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-purple-300"
                                placeholder="..........."
                            />
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full mt-4 bg-[#7C3AED] text-white py-2 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-300"
                    >
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;