import Link from "next/link";
import { FiInstagram, FiTwitter, FiGithub, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200/80 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-gray-900 hover:opacity-80 transition"
            >
              E-Commerce
            </Link>
            <p className="mt-3 text-sm text-gray-500 max-w-md leading-6">
              A modern shopping experience built for simplicity, style, and
              speed.
            </p>
          </div>

          {/* Middle Links */}
          <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-600">
            <Link href="/privacy" className="hover:text-black transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-black transition">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-black transition">
              Contact
            </Link>
            <Link href="/about" className="hover:text-black transition">
              About
            </Link>
          </div>

          {/* Right Socials */}
          <div className="flex items-center gap-4 text-gray-600">
            <Link
              href="#"
              className="p-2 rounded-full border border-gray-200 hover:border-black hover:text-black transition-all duration-300"
            >
              <FiInstagram size={18} />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-full border border-gray-200 hover:border-black hover:text-black transition-all duration-300"
            >
              <FiTwitter size={18} />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-full border border-gray-200 hover:border-black hover:text-black transition-all duration-300"
            >
              <FiGithub size={18} />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-full border border-gray-200 hover:border-black hover:text-black transition-all duration-300"
            >
              <FiMail size={18} />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} E-Commerce. All rights reserved.
          </p>

          <p className="text-sm text-gray-400 text-center md:text-right">
            Designed with simplicity and elegance.
          </p>
        </div>
      </div>
    </footer>
  );
}
