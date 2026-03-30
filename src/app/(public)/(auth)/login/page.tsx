"use client";

import Link from "next/link";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md border border-gray-200 rounded-3xl p-8 shadow-sm">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-500 mt-2 text-sm">
            Login to continue your shopping journey
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
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
                placeholder="Enter your password"
                className="w-full outline-none bg-transparent text-sm text-gray-800"
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-black transition"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-2xl font-medium hover:opacity-90 transition-all duration-300"
          >
            Login <FiArrowRight size={18} />
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-8">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-black hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
