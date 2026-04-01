"use client";

import Loader from "@/components/loader/Loader";
import useAuth from "@/hooks/authhook";
import Link from "next/link";
import { FiUser, FiMail, FiLock, FiArrowRight } from "react-icons/fi";

const Register = () => {
  const { state, handleChange, handleSubmit } = useAuth();
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full md:max-w-[500px] border border-gray-200 rounded p-8 shadow-sm">
        {/* Heading */}
        <div className="mb-8 text-center flex flex-col items-center">
          {/* Icon */}
          <div className="bg-black p-3 rounded-full mb-4 w-[50px] h-[50px] flex justify-center items-center">
            <FiUser className="text-white" size={30} />
          </div>

          <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
          <p className="text-gray-500 mt-2 text-sm">
            Join us and start shopping smarter
          </p>
        </div>
        {state.isLoading && <Loader />}

        {/* Form */}
        <form
          className="space-y-5"
          onSubmit={(e: React.SubmitEvent<HTMLFormElement>) => {
            handleSubmit(e);
          }}
        >
          {/* Row 1: Name + Email */}
          <div className="grid grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <div className="flex items-center border border-gray-300 rounded px-3 py-[4px] focus-within:border-black transition-all duration-300">
                <div className="bg-gray-100 p-2 rounded-xl mr-2">
                  <FiUser className="text-gray-600" size={16} />
                </div>
                <input
                  name="name"
                  value={state.registerObj.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e)
                  }
                  type="text"
                  placeholder="Full name"
                  className="w-full outline-none bg-transparent text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="flex items-center border border-gray-300 rounded px-3 py-[4px] focus-within:border-black transition-all duration-300">
                <div className="bg-gray-100 p-2 rounded-xl mr-2">
                  <FiMail className="text-gray-600" size={16} />
                </div>
                <input
                  name="email"
                  value={state.registerObj.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e)
                  }
                  type="email"
                  placeholder="Email"
                  className="w-full outline-none bg-transparent text-sm text-gray-800"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Password + Confirm */}
          <div className="grid grid-cols-2 gap-4">
            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="flex items-center border border-gray-300 rounded px-3 py-1 focus-within:border-black transition-all duration-300">
                <div className="bg-gray-100 p-2 rounded-xl mr-2">
                  <FiLock className="text-gray-600" size={16} />
                </div>
                <input
                  name="password"
                  value={state.registerObj.password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e)
                  }
                  type="password"
                  placeholder="Password"
                  className="w-full outline-none bg-transparent text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="flex items-center border border-gray-300 rounded px-3 py-[4px] focus-within:border-black transition-all duration-300">
                <div className="bg-gray-100 p-2 rounded-xl mr-2">
                  <FiLock className="text-gray-600" size={16} />
                </div>
                <input
                  type="password"
                  placeholder="Confirm"
                  className="w-full outline-none bg-transparent text-sm text-gray-800"
                />
              </div>
            </div>
          </div>

          {/* Button stays same */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded font-medium hover:opacity-90 transition-all duration-300 cursor-pointer"
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
