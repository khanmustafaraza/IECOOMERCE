import Sidebar from "@/components/sidebar/Sidebar";
import Link from "next/link";
import { FiArrowRight, FiShoppingBag, FiTruck, FiShield } from "react-icons/fi";

const About = () => {
  return (
    <section className="min-h-screen px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Top */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-4">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            Built for a better and simpler shopping experience.
          </h1>
          <p className="mt-6 text-gray-600 text-lg leading-8">
            We created E-Commerce to make online shopping feel clean, fast, and
            reliable. Our goal is to bring thoughtfully selected products,
            smooth browsing, and a modern shopping experience into one place.
          </p>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="border border-gray-200 rounded-3xl p-8 hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-800 mb-5">
              <FiShoppingBag size={22} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Curated Products
            </h3>
            <p className="text-gray-600 leading-7">
              We focus on products that are practical, stylish, and worth your
              time so shopping feels easier and more intentional.
            </p>
          </div>

          <div className="border border-gray-200 rounded-3xl p-8 hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-800 mb-5">
              <FiTruck size={22} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Fast Experience
            </h3>
            <p className="text-gray-600 leading-7">
              From discovering products to placing orders, every part of the
              experience is designed to feel smooth, quick, and effortless.
            </p>
          </div>

          <div className="border border-gray-200 rounded-3xl p-8 hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-800 mb-5">
              <FiShield size={22} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Trusted Shopping
            </h3>
            <p className="text-gray-600 leading-7">
              We care about quality, transparency, and trust so customers can
              shop with confidence every time they visit.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 items-center">
          <div className="border border-gray-200 rounded-3xl p-10">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
              Our Story
            </p>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              A modern store designed with simplicity in mind.
            </h2>
            <p className="mt-5 text-gray-600 leading-8">
              Online shopping often feels crowded and complicated. We wanted to
              build something different — a place where design, usability, and
              product discovery come together naturally.
            </p>
            <p className="mt-4 text-gray-600 leading-8">
              Every page is created to feel minimal, elegant, and easy to use so
              customers can focus on what matters most: finding products they
              truly want.
            </p>
          </div>

          <div className="border border-dashed border-gray-300 rounded-3xl h-[320px] flex items-center justify-center text-gray-400 text-lg font-medium">
            Your Brand Image / Store Visual
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 border border-gray-200 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-3">
              Explore More
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              Discover products made for everyday life.
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl leading-7">
              Browse our collection and experience a cleaner way to shop online.
            </p>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-full text-sm font-medium text-gray-900 hover:border-black hover:text-black transition-all duration-300"
          >
            Visit Shop <FiArrowRight size={18} />
          </Link>
        </div>
      </div>
      {/* <Sidebar /> */}
    </section>
  );
};

export default About;
