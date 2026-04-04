"use client";

import React from "react";
import Link from "next/link";
import {
  FaBoxOpen,
  FaImage,
  FaTag,
  FaLayerGroup,
  FaRupeeSign,
  FaClipboardList,
} from "react-icons/fa";
import useAdmin from "@/hooks/adminhook";

const AddProduct = () => {
  const { state, handleProductChange, handleProductImages, handleProductSubmit } = useAdmin();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleProductSubmit();
    alert("Product added successfully!");
  };

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

        <form className="space-y-8" onSubmit={onSubmit}>
          {/* Product Info */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Product Name
                </label>
                <div className="flex items-center rounded-xl border border-slate-300 bg-slate-50 px-4 py-3">
                  <FaTag className="text-slate-500 mr-3" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter product name"
                    value={state.productObj.name}
                    onChange={handleProductChange}
                    className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* SKU */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  SKU / Product Code
                </label>
                <div className="flex items-center rounded-xl border border-slate-300 bg-slate-50 px-4 py-3">
                  <FaClipboardList className="text-slate-500 mr-3" />
                  <input
                    type="text"
                    name="sku"
                    placeholder="Enter SKU or code"
                    value={state.productObj.sku}
                    onChange={handleProductChange}
                    className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Category
                </label>
                <div className="flex items-center rounded-xl border border-slate-300 bg-slate-50 px-4 py-3">
                  <FaLayerGroup className="text-slate-500 mr-3" />
                  <select
                    name="category"
                    value={state.productObj.category}
                    onChange={handleProductChange}
                    className="w-full bg-transparent text-sm text-slate-800 outline-none"
                  >
                    <option value="">Select category</option>
                    {state.categoryList.map((cat) => (
                      <option key={cat._id} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Sub Category */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Sub Category
                </label>
                <div className="flex items-center rounded-xl border border-slate-300 bg-slate-50 px-4 py-3">
                  <FaLayerGroup className="text-slate-500 mr-3" />
                  <input
                    type="text"
                    name="subCategory"
                    placeholder="Enter sub category"
                    value={state.productObj.subCategory}
                    onChange={handleProductChange}
                    className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Pricing & Stock */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="Enter product price"
                  value={state.productObj.price}
                  onChange={handleProductChange}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Discount Price
                </label>
                <input
                  type="number"
                  name="discountPrice"
                  placeholder="Enter discount price"
                  value={state.productObj.discountPrice}
                  onChange={handleProductChange}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Stock Quantity
                </label>
                <input
                  type="number"
                  name="stock"
                  placeholder="Enter stock quantity"
                  value={state.productObj.stock}
                  onChange={handleProductChange}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5 md:p-8">
            <textarea
              rows={6}
              name="description"
              placeholder="Write product description..."
              value={state.productObj.description}
              onChange={handleProductChange}
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none resize-none"
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

              {/* Hidden input */}
              <input
                type="file"
                id="productImage"
                multiple
                onChange={(e) => handleProductImages(e.target.files!)}
                className="hidden"
              />

              {/* Label as button */}
              <label
                htmlFor="productImage"
                className="inline-flex cursor-pointer items-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-slate-800 hover:shadow-md"
              >
                Choose Files
              </label>

              {/* Preview images */}
              {state.productObj.images.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {state.productObj.images.map((file, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(file)}
                      alt="preview"
                      className="w-20 h-20 object-cover rounded-lg border"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Status */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5 md:p-8 flex gap-4">
            {["Active", "Draft", "Out of Stock"].map((status) => (
              <label key={status} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                <input
                  type="radio"
                  name="status"
                  value={status}
                  checked={state.productObj.status === status}
                  onChange={handleProductChange}
                  className="h-4 w-4"
                />
                {status}
              </label>
            ))}
          </div>

          {/* Submit */}
          <div className="flex justify-end gap-4">
            <button type="button" className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100">
              Cancel
            </button>
            <button type="submit" className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 active:scale-[0.98]">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProduct;