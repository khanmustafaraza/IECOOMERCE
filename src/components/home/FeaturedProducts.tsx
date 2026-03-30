import Link from "next/link";
import { FiHeart, FiShoppingBag } from "react-icons/fi";

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
];

const FeaturedProducts = () => {
  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-3">
              Products
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Featured products
            </h2>
          </div>

          <Link
            href="/shop"
            className="hidden md:inline-flex text-sm font-medium text-gray-700 hover:text-black transition"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group border border-gray-200 rounded-3xl overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <div className="h-72 border-b border-gray-200 bg-gray-50 flex items-center justify-center text-gray-400 text-lg font-medium">
                Product Image
              </div>

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
      </div>
    </section>
  );
};

export default FeaturedProducts;
