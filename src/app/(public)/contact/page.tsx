"use client";

import Link from "next/link";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="min-h-screen px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="max-w-3xl mb-14">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-4">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            We’d love to hear from you.
          </h1>
          <p className="mt-6 text-gray-600 text-lg leading-8">
            Whether you have a question about products, orders, or support, feel
            free to reach out anytime.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Info */}
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-3xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-800">
                  <FiMail size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Email Us
                  </h3>
                  <p className="text-gray-600 mt-2 leading-7">
                    support@ecommerce.com
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-3xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-800">
                  <FiPhone size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Call Us
                  </h3>
                  <p className="text-gray-600 mt-2 leading-7">
                    +91 00000 00000
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-3xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-800">
                  <FiMapPin size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Visit Us
                  </h3>
                  <p className="text-gray-600 mt-2 leading-7">
                    Your Store Address, City, Country
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="border border-gray-200 rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send a Message
            </h2>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-black transition-all duration-300 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-black transition-all duration-300 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-black transition-all duration-300 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-black transition-all duration-300 text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-2xl font-medium hover:opacity-90 transition-all duration-300"
              >
                Send Message <FiSend size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 text-sm">
            Want to explore products instead?{" "}
            <Link
              href="/shop"
              className="font-semibold text-black hover:underline"
            >
              Visit Shop
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
