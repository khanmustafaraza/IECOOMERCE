import Link from "next/link";
import { FiShoppingBag, FiUser, FiMenu } from "react-icons/fi";
import Loader from "../loader/Loader";

export default function Navbar() {
  // const user = {
  //   name: "good",
  // };

  return (
    <header className="w-full border-b border-gray-200/70">
      {/* <Loader/> */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        {/* Left - Logo + Links */}
        <div className="flex items-center gap-10">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-gray-900 hover:opacity-80 transition-all duration-300"
          >
            E-Commerce
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/shop"
              className="relative text-[15px] font-medium text-gray-700 hover:text-black transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              Shop
            </Link>

            <Link
              href="/about"
              className="relative text-[15px] font-medium text-gray-700 hover:text-black transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </Link>
            <Link
              href="/user"
              className="relative text-[15px] font-medium text-gray-700 hover:text-black transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              User
            </Link>
          </div>
        </div>

        {/* Right - User Links */}
        <div className="flex items-center gap-5">
          <Link
            href="/cart"
            className="hidden sm:flex items-center gap-2 text-gray-700 hover:text-black transition-all duration-300"
          >
            <FiShoppingBag size={20} />
            <span className="text-sm font-medium">Cart</span>
          </Link>

          <Link
            href="/login"
            className="flex items-center gap-2 border border-gray-300 px-4 py-2.5 rounded-full text-sm font-medium text-gray-800 hover:border-gray-500 hover:text-black transition-all duration-300"
          >
            <FiUser size={18} />
            Login
          </Link>

          <button className="md:hidden text-gray-800 hover:text-black transition-all duration-300">
            <FiMenu size={24} />
          </button>
        </div>
      </nav>
    </header>
  );
}
