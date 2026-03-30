"use client";

import { FiBell, FiSearch, FiUser } from "react-icons/fi";

const Topbar = () => {
  return (
    <header className="w-full border-b border-gray-200 px-6 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">
          Welcome back, manage everything from here.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="hidden md:flex items-center border border-gray-300 rounded-full px-4 py-2 w-[260px]">
          <FiSearch className="text-gray-400 mr-3" size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full outline-none bg-transparent text-sm text-gray-700"
          />
        </div>

        {/* Notification */}
        <button className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:border-black hover:text-black transition-all duration-300">
          <FiBell size={18} />
        </button>

        {/* User */}
        <button className="flex items-center gap-3 border border-gray-300 rounded-full px-4 py-2 hover:border-black transition-all duration-300">
          <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
            <FiUser size={18} />
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-sm font-medium text-gray-900">Admin</p>
            <p className="text-xs text-gray-500">Store Manager</p>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Topbar;
