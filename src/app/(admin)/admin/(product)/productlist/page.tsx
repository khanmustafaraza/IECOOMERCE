"use client";

import useAdmin from "@/hooks/adminhook";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const ProductList = () => {
  const { state, getAllProducts } = useAdmin();

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      await fetch(`/api/product/${id}`, { method: "DELETE" });
      alert("Product deleted successfully!");
      getAllProducts();
    } catch (err) {
      console.error(err);
      alert("Failed to delete product.");
    }
  };

  return (
    <section className="p-4 md:p-6 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center flex-wrap gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
              Product List
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Manage all products in your store from here.
            </p>
          </div>

          <Link
            href="/admin/addproduct"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition"
          >
            <FaPlus className="text-xs" />
            Add Product
          </Link>
        </div>

        {/* Table */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-sm text-left">
              <thead className="bg-slate-100 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 font-semibold text-slate-700">#</th>
                  <th className="px-6 py-4 font-semibold text-slate-700">
                    Image
                  </th>
                  <th className="px-6 py-4 font-semibold text-slate-700">
                    Name
                  </th>
                  <th className="px-6 py-4 font-semibold text-slate-700">
                    SKU
                  </th>
                  <th className="px-6 py-4 font-semibold text-slate-700">
                    Category
                  </th>
                  <th className="px-6 py-4 font-semibold text-slate-700">
                    Price
                  </th>
                  <th className="px-6 py-4 font-semibold text-slate-700">
                    Stock
                  </th>
                  <th className="px-6 py-4 font-semibold text-slate-700 text-center">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {state.productList.length === 0 ? (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-6 py-4 text-center text-slate-500"
                    >
                      No products found.
                    </td>
                  </tr>
                ) : (
                  state.productList.map((item, index) => (
                    <tr
                      key={item._id}
                      className="border-b border-slate-100 hover:bg-slate-50 transition"
                    >
                      <td className="px-6 py-4 text-slate-600 font-medium">
                        {index + 1}
                      </td>

                      {/* Image */}
                      <td className="px-6 py-4">
                        {item.images?.[0] ? (
                          "data" in item.images[0] ? (
                            // ✅ Backend base64 image
                            <img
                              src={`data:${item.images[0].contentType};base64,${item.images[0].data}`}
                              alt={item.name}
                              className="w-12 h-12 object-cover rounded-lg border"
                            />
                          ) : (
                            // ✅ File object (if used)
                            <img
                              src={URL.createObjectURL(
                                item.images[0] as File
                              )}
                              alt={item.name}
                              className="w-12 h-12 object-cover rounded-lg border"
                            />
                          )
                        ) : (
                          <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 text-xs">
                            No Image
                          </div>
                        )}
                      </td>

                      {/* Data */}
                      <td className="px-6 py-4 font-semibold text-slate-800">
                        {item.name}
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        {item.sku}
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        {item.category}
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        ₹{item.price}
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        {item.stock}
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4">
                        <div className="flex justify-center items-center gap-3">
                          <Link
                            href={`/admin/updateproduct/${item._id}`}
                            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-slate-700 hover:bg-slate-100 transition"
                          >
                            <FaEdit className="text-sm" /> Edit
                          </Link>

                          <button
                            onClick={() => handleDelete(item._id!)}
                            className="inline-flex items-center gap-2 rounded-lg border border-red-200 px-3 py-2 text-red-600 hover:bg-red-50 transition"
                          >
                            <FaTrash className="text-sm" /> Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center flex-wrap gap-3 px-6 py-4 bg-slate-50">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-semibold text-slate-700">
                {state.productList.length}
              </span>{" "}
              products
            </p>

            <div className="flex items-center gap-2">
              <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 transition">
                Previous
              </button>
              <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800 transition">
                1
              </button>
              <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 transition">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;