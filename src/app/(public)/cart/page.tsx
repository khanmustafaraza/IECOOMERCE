"use client";

import Link from "next/link";
import {
  FiMinus,
  FiPlus,
  FiTrash2,
  FiArrowRight,
  FiShoppingBag,
} from "react-icons/fi";

const cartItems = [
  {
    id: 1,
    name: "Minimal Sneakers",
    category: "Footwear",
    price: 89,
    quantity: 1,
  },
  {
    id: 2,
    name: "Premium Hoodie",
    category: "Clothing",
    price: 75,
    quantity: 2,
  },
  {
    id: 3,
    name: "Classic Watch",
    category: "Accessories",
    price: 120,
    quantity: 1,
  },
];

const Cart = () => {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <section className="min-h-screen px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="max-w-3xl mb-14">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-4">
            Your Cart
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            Review your selected items before checkout.
          </h1>
          <p className="mt-6 text-gray-600 text-lg leading-8">
            Keep track of your products, update quantities, and continue your
            purchase with ease.
          </p>
        </div>

        {/* Cart Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left - Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-3xl p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center"
              >
                {/* Image Placeholder */}
                <div className="w-full sm:w-32 h-32 rounded-2xl border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-400 text-sm font-medium">
                  Product Image
                </div>

                {/* Content */}
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <p className="text-sm text-gray-500">{item.category}</p>
                      <h3 className="text-xl font-semibold text-gray-900 mt-1">
                        {item.name}
                      </h3>
                      <p className="text-gray-700 mt-3 font-medium">
                        ${item.price}
                      </p>
                    </div>

                    <button className="text-gray-400 hover:text-red-500 transition">
                      <FiTrash2 size={20} />
                    </button>
                  </div>

                  {/* Quantity */}
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                      <button className="px-4 py-2 text-gray-700 hover:bg-gray-50 transition">
                        <FiMinus size={16} />
                      </button>
                      <span className="px-4 text-sm font-medium text-gray-900">
                        {item.quantity}
                      </span>
                      <button className="px-4 py-2 text-gray-700 hover:bg-gray-50 transition">
                        <FiPlus size={16} />
                      </button>
                    </div>

                    <p className="text-lg font-bold text-gray-900">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Continue Shopping */}
            <div className="pt-4">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black transition"
              >
                <FiShoppingBag size={18} />
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Right - Summary */}
          <div className="border border-gray-200 rounded-3xl p-8 h-fit sticky top-24">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-3">
              Order Summary
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Checkout Details
            </h2>

            <div className="space-y-5 text-sm">
              <div className="flex items-center justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">${subtotal}</span>
              </div>

              <div className="flex items-center justify-between text-gray-600">
                <span>Shipping</span>
                <span className="font-medium text-gray-900">${shipping}</span>
              </div>

              <div className="border-t border-gray-200 pt-5 flex items-center justify-between">
                <span className="text-base font-semibold text-gray-900">
                  Total
                </span>
                <span className="text-xl font-bold text-gray-900">
                  ${total}
                </span>
              </div>
            </div>

            <button className="w-full mt-8 inline-flex items-center justify-center gap-2 bg-black text-white py-3 rounded-2xl font-medium hover:opacity-90 transition-all duration-300">
              Proceed to Checkout <FiArrowRight size={18} />
            </button>

            <p className="text-xs text-gray-500 mt-5 leading-6">
              Taxes and delivery charges may be calculated at checkout depending
              on your location.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
