import Link from "next/link";
import { FiInstagram, FiTwitter, FiGithub, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full mt-20 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block text-2xl font-semibold tracking-tight text-gray-900 hover:opacity-80 transition"
            >
              E-Commerce
            </Link>
            <p className="text-sm leading-7 text-gray-500 max-w-sm">
              A refined shopping destination focused on clean design, quality
              products, and a seamless customer experience.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-10 md:justify-center">
            <div>
              <h3 className="text-sm font-semibold tracking-wide text-gray-900 uppercase mb-4">
                Company
              </h3>
              <div className="flex flex-col gap-3 text-sm text-gray-600">
                <Link href="/about" className="hover:text-black transition">
                  About
                </Link>
                <Link href="/contact" className="hover:text-black transition">
                  Contact
                </Link>
                <Link
                  href="/termandcondition"
                  className="hover:text-black transition"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/privacypolicy"
                  className="hover:text-black transition"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold tracking-wide text-gray-900 uppercase mb-4">
                Support
              </h3>
              <div className="flex flex-col gap-3 text-sm text-gray-600">
                <Link href="/shop" className="hover:text-black transition">
                  Shop
                </Link>
                <Link href="/cart" className="hover:text-black transition">
                  Cart
                </Link>
                <Link href="/wishlist" className="hover:text-black transition">
                  Wishlist
                </Link>
                <Link href="/account" className="hover:text-black transition">
                  My Account
                </Link>
              </div>
            </div>
          </div>

          {/* Social / Contact */}
          <div className="md:ml-auto">
            <h3 className="text-sm font-semibold tracking-wide text-gray-900 uppercase mb-4">
              Connect
            </h3>
            <p className="text-sm text-gray-500 leading-7 max-w-xs mb-5">
              Stay connected for updates, launches, and curated collections.
            </p>

            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="group p-3 rounded-full border border-gray-200 bg-white hover:bg-black hover:border-black transition-all duration-300 shadow-sm"
              >
                <FiInstagram
                  size={18}
                  className="text-gray-700 group-hover:text-white transition"
                />
              </Link>

              <Link
                href="#"
                className="group p-3 rounded-full border border-gray-200 bg-white hover:bg-black hover:border-black transition-all duration-300 shadow-sm"
              >
                <FiTwitter
                  size={18}
                  className="text-gray-700 group-hover:text-white transition"
                />
              </Link>

              <Link
                href="#"
                className="group p-3 rounded-full border border-gray-200 bg-white hover:bg-black hover:border-black transition-all duration-300 shadow-sm"
              >
                <FiGithub
                  size={18}
                  className="text-gray-700 group-hover:text-white transition"
                />
              </Link>

              <Link
                href="mailto:support@example.com"
                className="group p-3 rounded-full border border-gray-200 bg-white hover:bg-black hover:border-black transition-all duration-300 shadow-sm"
              >
                <FiMail
                  size={18}
                  className="text-gray-700 group-hover:text-white transition"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-14 pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} E-Commerce. All rights reserved.
          </p>

          <p className="text-sm text-gray-400 text-center md:text-right tracking-wide">
            Designed for modern commerce.
          </p>
        </div>
      </div>
    </footer>
  );
}
