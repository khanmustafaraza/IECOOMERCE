"use client";
import React from "react";
import { useParams } from "next/navigation";
import useAdmin from "@/hooks/adminhook";
import Link from "next/link";
import { FaTags } from "react-icons/fa";

const Updatecategory = () => {
  const { state, handleCategoryUpdateSubmit, handleCategoryChange } =
    useAdmin();
  const params = useParams();
  // console.log(params.id);
  const id = typeof params.id === "string" ? params.id : "";

  return (
    <section className="p-4 md:p-6 bg-slate-50 min-h-screen">
      <div className="title max-w-6xl mx-auto">
        <h4 className="text-center text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
          update Category
        </h4>

        <div className="sub-title flex justify-between items-center flex-wrap gap-3 mt-6 mb-8">
          <div></div>

          <div>
            <Link
              href="/admin/categorylist"
              className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-slate-800 hover:shadow-md"
            >
              Category List
            </Link>
          </div>
        </div>

        <div className="cagegory-container">
          <div className="form-container rounded-2xl border border-slate-200 bg-white shadow-sm p-5 md:p-8">
            <form
              onSubmit={(e: React.SubmitEvent<HTMLFormElement>) =>
                handleCategoryUpdateSubmit(e, id)
              }
              className="space-y-6"
            >
              <div className="group-container flex flex-col md:flex-row gap-6">
                {/* Category Name */}
                <div className="input-group w-full">
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Category name
                  </label>
                  <div className="input-container">
                    <input
                      name="name"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleCategoryChange(e)
                      }
                      value={state.catObj.name}
                      type="text"
                      placeholder="Enter category name"
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-200"
                    />
                  </div>
                </div>

                {/* Sub Category Name */}
                <div className="input-group w-full">
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Sub Category name
                  </label>

                  <div className="flex items-center rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 transition-all duration-200 focus-within:border-slate-900 focus-within:bg-white focus-within:ring-4 focus-within:ring-slate-200">
                    <div className="icon mr-3 text-slate-500 text-lg">
                      <FaTags />
                    </div>

                    <div className="input-container w-full">
                      <input
                        name="subName"
                        value={state.catObj.subName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleCategoryChange(e)
                        }
                        type="text"
                        placeholder="Enter sub category name"
                        className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-slate-800 hover:shadow-md active:scale-[0.98]"
                >
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Updatecategory;
