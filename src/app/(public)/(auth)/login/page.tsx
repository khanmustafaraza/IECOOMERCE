"use client";

import Loader from "@/components/loader/Loader";
import useAuth from "@/hooks/authhook";
import Link from "next/link";
import { ChangeEvent } from "react";
import { FiMail, FiLock, FiArrowRight, FiUser } from "react-icons/fi";

const Login = () => {
  const { state, handleLoginChange, handleLoginSubmit } = useAuth();
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md border border-gray-200 rounded-3xl p-8 shadow-sm">
        {/* Heading */}
        <div className="heading flex justify-center items-center">
          <div className="bg-black p-3 rounded-full mb-4 w-[50px] h-[50px] flex justify-center items-center">
            <FiUser className="text-white" size={30} />
          </div>
        </div>
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-500 mt-2 text-sm">
            Login to continue your shopping journey
          </p>
        </div>
        {state.isLoading && <Loader />}

        {/* Form */}
        <form
          className="space-y-5"
          onSubmit={(e: React.SubmitEvent<HTMLFormElement>) =>
            handleLoginSubmit(e)
          }
        >
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded px-4 py-2 focus-within:border-black transition-all duration-300">
              <div className="bg-gray-100 p-2 rounded-xl mr-2">
                <FiMail className="text-gray-600" size={16} />
              </div>
              <input
                name="email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleLoginChange(e)
                }
                value={state.loginObj.email}
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
            <div className="flex items-center border border-gray-300 rounded px-4 py-2 focus-within:border-black transition-all duration-300">
              <div className="bg-gray-100 p-2 rounded-xl mr-2">
                <FiLock className="text-gray-600" size={16} />
              </div>
              <input
                name="password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleLoginChange(e)
                }
                value={state.loginObj.password}
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
            className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded font-medium hover:opacity-90 transition-all duration-300"
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
