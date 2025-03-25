import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f0f0]">
      <div className="bg-white shadow-md rounded-lg px-20 py-10 w-full max-w-[605px]">
        <div className="flex items-center justify-center m-5">
          {/* <img src="/src/assets/Frame 5.png" alt="" /> */}
          <div className="flex items-center gap-2 mb-1">
            <svg width="102" height="92" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <polygon points="16,4 28,8 28,24 16,28 4,24 4,8" fill="#ccc" />
              <text x="50%" y="50%" text-anchor="middle" fill="#A03433" font-size="4" dy=".3em">MdN</text>
            </svg>
            <span className="text-[#000] font-semibold">Medallion</span>
          </div>
        </div>

        <p className="text-2xl text-center">Welcome to <br /> <h2 className='font-semibold'>Medallion</h2></p>
        <p className="text-gray-600 text-center">Please login to your account.</p>

        <form className="mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Email
            <input
              type="email"
              required
              className="mt-1 block w-full bg-[#f0f0f0] border border-[#f0f0f0] rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-purple-300"
              placeholder="example@gmail.com"
            />
          </label>

          <label className="block mb-2 text-sm font-medium text-gray-700">
            Password
            <input
              type="password"
              required
              className="mt-1 block w-full bg-[#f0f0f0] border border-[#f0f0f0] rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-purple-300"
            />
          </label>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 bg-[#f0f0f0]" />
              Remember me
            </label>
            <a
              href="#"
              className="text-sm text-[#4682B4] hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-[#4682B4] text-white py-2 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-300"
          >
            Log In
          </button>

          <div className="mt-4 text-center">
            <span className="text-gray-600">Or Continue With</span>
            <div className="flex justify-center mt-2">
              <button className="bg-[#fff] flex rounded-md px-8 py-2 mx-1">
                <img className="mr-5" src="/src/assets/image 198.png" alt="" srcset="" />
                <span className="text-gray-600">Google</span>
              </button>
            </div>
          </div>

          <div className="mt-4 text-center">
            <span className="text-gray-600">
              New member? <a href="/register" className="text-[#4682B4] hover:underline">Register Here</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login; 