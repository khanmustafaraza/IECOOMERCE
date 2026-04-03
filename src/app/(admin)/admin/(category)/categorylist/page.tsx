"use client";
import useAdmin from "@/hooks/adminhook";
import Link from "next/link";
import React from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const Categorylist = () => {
  const { state } = useAdmin();
  const categories = [
    {
      id: 1,
      category: "Electronics",
      subCategory: "Mobile Phones",
      createdAt: "03 Apr 2026",
    },
    {
      id: 2,
      category: "Fashion",
      subCategory: "Men Clothing",
      createdAt: "02 Apr 2026",
    },
    {
      id: 3,
      category: "Home & Living",
      subCategory: "Furniture",
      createdAt: "01 Apr 2026",
    },
    {
      id: 4,
      category: "Beauty",
      subCategory: "Skin Care",
      createdAt: "31 Mar 2026",
    },
  ];

  return (
    <section className="p-4 md:p-6 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="flex justify-between items-center flex-wrap gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
              Category List
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Manage all categories and subcategories from here.
            </p>
          </div>

          <Link
            href="/admin/addcategory"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-slate-800 hover:shadow-md"
          >
            <FaPlus className="text-xs" />
            Add Category
          </Link>
        </div>

        {/* Table Card */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[750px] text-sm text-left">
              <thead className="bg-slate-100 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 font-semibold text-slate-700">#</th>
                  <th className="px-6 py-4 font-semibold text-slate-700">
                    Category Name
                  </th>
                  <th className="px-6 py-4 font-semibold text-slate-700">
                    Sub Category
                  </th>
                  <th className="px-6 py-4 font-semibold text-slate-700">
                    Created At
                  </th>
                  <th className="px-6 py-4 font-semibold text-slate-700 text-center">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {state?.categoryList.map((item, index) => (
                  <tr
                    key={item._id}
                    className="border-b border-slate-100 hover:bg-slate-50 transition"
                  >
                    <td className="px-6 py-4 text-slate-600 font-medium">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 font-semibold text-slate-800">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 text-slate-600">{item.subname}</td>
                    <td className="px-6 py-4 text-slate-500">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center items-center gap-3">
                        <Link
                          href={`/admin/updatecategory/${item._id}`}
                          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-slate-700 transition hover:bg-slate-100"
                        >
                          <FaEdit className="text-sm" />
                          Edit
                        </Link>

                        <button className="inline-flex items-center gap-2 rounded-lg border border-red-200 px-3 py-2 text-red-600 transition hover:bg-red-50">
                          <FaTrash className="text-sm" />
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center flex-wrap gap-3 px-6 py-4 bg-slate-50">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-semibold text-slate-700">
                {state.categoryList.length}
              </span>{" "}
              categories
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

export default Categorylist;
