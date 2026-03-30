"use client";

import Link from "next/link";
import { FiUser, FiMail, FiLock, FiArrowRight } from "react-icons/fi";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md border border-gray-200 rounded-3xl p-8 shadow-sm">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
          <p className="text-gray-500 mt-2 text-sm">
            Join us and start shopping smarter
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-2xl px-4 py-3 focus-within:border-black transition-all duration-300">
              <FiUser className="text-gray-400 mr-3" size={18} />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full outline-none bg-transparent text-sm text-gray-800"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded-2xl px-4 py-3 focus-within:border-black transition-all duration-300">
              <FiMail className="text-gray-400 mr-3" size={18} />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none bg-transparent text-sm text-gray-800"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-2xl px-4 py-3 focus-within:border-black transition-all duration-300">
              <FiLock className="text-gray-400 mr-3" size={18} />
              <input
                type="password"
                placeholder="Create a password"
                className="w-full outline-none bg-transparent text-sm text-gray-800"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-2xl px-4 py-3 focus-within:border-black transition-all duration-300">
              <FiLock className="text-gray-400 mr-3" size={18} />
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full outline-none bg-transparent text-sm text-gray-800"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-2xl font-medium hover:opacity-90 transition-all duration-300"
          >
            Register <FiArrowRight size={18} />
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-8">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-black hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
