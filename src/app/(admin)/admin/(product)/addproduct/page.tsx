import Link from "next/link";
import React from "react";
import {
  FaBoxOpen,
  FaImage,
  FaTag,
  FaLayerGroup,
  FaRupeeSign,
  FaClipboardList,
} from "react-icons/fa";

const AddProduct = () => {
  return (
    <section className="p-4 md:p-6 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center flex-wrap gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
              Add New Product
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Create and manage your store products easily.
            </p>
          </div>

          <Link
            href="/admin/productlist"
            className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-slate-800 hover:shadow-md"
          >
            Product List
          </Link>
        </div>

        <form className="space-y-8">
          {/* Product Basic Info */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-11 w-11 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
                <FaBoxOpen />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800">
                  Product Information
                </h3>
                <p className="text-sm text-slate-500">
                  Enter the main details of your product.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Product Name
                </label>
                <div className="flex items-center rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 focus-within:border-slate-900 focus-within:bg-white focus-within:ring-4 focus-within:ring-slate-200 transition-all">
                  <FaTag className="text-slate-500 mr-3" />
                  <input
                    type="text"
                    placeholder="Enter product name"
                    className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* SKU */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  SKU / Product Code
                </label>
                <div className="flex items-center rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 focus-within:border-slate-900 focus-within:bg-white focus-within:ring-4 focus-within:ring-slate-200 transition-all">
                  <FaClipboardList className="text-slate-500 mr-3" />
                  <input
                    type="text"
                    placeholder="Enter SKU or code"
                    className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Category
                </label>
                <div className="flex items-center rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 focus-within:border-slate-900 focus-within:bg-white focus-within:ring-4 focus-within:ring-slate-200 transition-all">
                  <FaLayerGroup className="text-slate-500 mr-3" />
                  <select className="w-full bg-transparent text-sm text-slate-800 outline-none">
                    <option>Select category</option>
                    <option>Electronics</option>
                    <option>Fashion</option>
                    <option>Home & Living</option>
                    <option>Beauty</option>
                  </select>
                </div>
              </div>

              {/* Sub Category */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Sub Category
                </label>
                <div className="flex items-center rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 focus-within:border-slate-900 focus-within:bg-white focus-within:ring-4 focus-within:ring-slate-200 transition-all">
                  <FaLayerGroup className="text-slate-500 mr-3" />
                  <select className="w-full bg-transparent text-sm text-slate-800 outline-none">
                    <option>Select sub category</option>
                    <option>Mobiles</option>
                    <option>Shirts</option>
                    <option>Furniture</option>
                    <option>Skin Care</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing & Inventory */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-11 w-11 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
                <FaRupeeSign />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800">
                  Pricing & Inventory
                </h3>
                <p className="text-sm text-slate-500">
                  Set pricing, stock and discount details.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Price
                </label>
                <input
                  type="number"
                  placeholder="Enter product price"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-200"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Discount Price
                </label>
                <input
                  type="number"
                  placeholder="Enter discount price"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-200"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Stock Quantity
                </label>
                <input
                  type="number"
                  placeholder="Enter stock quantity"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-200"
                />
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5 md:p-8">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Product Description
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Add a detailed description of the product.
            </p>

            <textarea
              rows={6}
              placeholder="Write product description..."
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-200 resize-none"
            />
          </div>

          {/* Product Images */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-11 w-11 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
                <FaImage />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800">
                  Product Images
                </h3>
                <p className="text-sm text-slate-500">
                  Later you can upload to Cloudinary or Google Storage.
                </p>
              </div>
            </div>

            <div className="border-2 border-dashed border-slate-300 rounded-2xl bg-slate-50 p-8 text-center hover:border-slate-400 transition-all">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm text-slate-600 text-2xl">
                <FaImage />
              </div>
              <h4 className="text-base font-semibold text-slate-800">
                Upload Product Images
              </h4>
              <p className="text-sm text-slate-500 mt-2 mb-4">
                Drag & drop your images here, or click to browse
              </p>
              <input
                type="file"
                multiple
                className="hidden"
                id="productImage"
              />
              <label
                htmlFor="productImage"
                className="inline-flex cursor-pointer items-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-slate-800 hover:shadow-md"
              >
                Choose Files
              </label>
            </div>
          </div>

          {/* Product Status */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5 md:p-8">
            <h3 className="text-lg font-semibold text-slate-800 mb-6">
              Product Status
            </h3>

            <div className="flex flex-wrap gap-6">
              <label className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <input type="radio" name="status" className="h-4 w-4" />
                Active
              </label>

              <label className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <input type="radio" name="status" className="h-4 w-4" />
                Draft
              </label>

              <label className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <input type="radio" name="status" className="h-4 w-4" />
                Out of Stock
              </label>
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-slate-800 hover:shadow-md active:scale-[0.98]"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
