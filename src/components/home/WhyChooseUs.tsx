import { FiTruck, FiShield, FiRefreshCw } from "react-icons/fi";

const WhyChooseUs = () => {
  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Designed for comfort, trust, and convenience.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-3xl p-8 hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-800 mb-5">
              <FiTruck size={22} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Fast Delivery
            </h3>
            <p className="text-gray-600 leading-7">
              Enjoy smooth and reliable shipping designed to get your order to
              you quickly.
            </p>
          </div>

          <div className="border border-gray-200 rounded-3xl p-8 hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-800 mb-5">
              <FiShield size={22} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Secure Shopping
            </h3>
            <p className="text-gray-600 leading-7">
              Shop confidently with a safer and more trustworthy buying
              experience.
            </p>
          </div>

          <div className="border border-gray-200 rounded-3xl p-8 hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-800 mb-5">
              <FiRefreshCw size={22} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Easy Returns
            </h3>
            <p className="text-gray-600 leading-7">
              A simple return process so you can shop with flexibility and peace
              of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
