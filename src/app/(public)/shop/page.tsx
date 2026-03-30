import Link from "next/link";
import { FiArrowRight, FiHeart, FiShoppingBag } from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Minimal Sneakers",
    category: "Footwear",
    price: "$89",
  },
  {
    id: 2,
    name: "Classic Watch",
    category: "Accessories",
    price: "$120",
  },
  {
    id: 3,
    name: "Premium Hoodie",
    category: "Clothing",
    price: "$75",
  },
  {
    id: 4,
    name: "Leather Backpack",
    category: "Bags",
    price: "$99",
  },
  {
    id: 5,
    name: "Wireless Headphones",
    category: "Electronics",
    price: "$149",
  },
  {
    id: 6,
    name: "Modern Sunglasses",
    category: "Accessories",
    price: "$55",
  },
];

const Shop = () => {
  return (
    <section className="min-h-screen px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="max-w-3xl mb-14">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-4">
            Shop
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            Discover products designed for modern everyday living.
          </h1>
          <p className="mt-6 text-gray-600 text-lg leading-8">
            Explore a curated collection of products selected for style,
            quality, and practicality.
          </p>
        </div>

        {/* Filter Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-3">
            {["All", "Clothing", "Accessories", "Footwear", "Electronics"].map(
              (item, index) => (
                <button
                  key={index}
                  className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                    index === 0
                      ? "border-black text-black"
                      : "border-gray-300 text-gray-600 hover:border-black hover:text-black"
                  }`}
                >
                  {item}
                </button>
              ),
            )}
          </div>

          <select className="border border-gray-300 rounded-full px-5 py-2 text-sm text-gray-700 outline-none focus:border-black transition">
            <option>Sort by</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group border border-gray-200 rounded-3xl overflow-hidden hover:shadow-md transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="h-72 border-b border-gray-200 bg-gray-50 flex items-center justify-center text-gray-400 text-lg font-medium">
                Product Image
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{product.category}</p>
                    <h3 className="text-xl font-semibold text-gray-900 mt-1">
                      {product.name}
                    </h3>
                  </div>

                  <button className="text-gray-400 hover:text-black transition">
                    <FiHeart size={20} />
                  </button>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <p className="text-lg font-bold text-gray-900">
                    {product.price}
                  </p>

                  <button className="inline-flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full text-sm font-medium text-gray-800 hover:border-black hover:text-black transition-all duration-300">
                    <FiShoppingBag size={16} />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 border border-gray-200 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-3">
              Need Help?
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              Looking for something specific?
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl leading-7">
              Reach out to us and we’ll help you find the right product.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-full text-sm font-medium text-gray-900 hover:border-black hover:text-black transition-all duration-300"
          >
            Contact Us <FiArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Shop;
