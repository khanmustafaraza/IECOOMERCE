import { FiWatch, FiShoppingBag, FiHeadphones, FiGift } from "react-icons/fi";

const categories = [
  {
    title: "Accessories",
    icon: <FiWatch size={24} />,
  },
  {
    title: "Fashion",
    icon: <FiShoppingBag size={24} />,
  },
  {
    title: "Electronics",
    icon: <FiHeadphones size={24} />,
  },
  {
    title: "Lifestyle",
    icon: <FiGift size={24} />,
  },
];

const FeaturedCategories = () => {
  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-3">
            Categories
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Explore by category
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-3xl p-8 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-800 mb-5">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 leading-7 text-sm">
                Discover premium picks carefully selected for your lifestyle.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
