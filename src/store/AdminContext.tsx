"use client";

import { createContext, useEffect, useReducer } from "react";
import AdminReducer from "@/reducers/AdminReducer";
import { AdminContextType, AdminState } from "@/types/admintypes";

export const AdminContext = createContext<AdminContextType | null>(null);

const initialState: AdminState = {
  catObj: { name: "", subName: "" },
  categoryList: [],
  productObj: {
    name: "",
    sku: "",
    category: "",
    subCategory: "",
    price: "",
    discountPrice: "",
    stock: "",
    description: "",
    status: "Draft",
    images: [],
  },
  productList: [], // <-- added for fetched products
  isLoading: false,
};

const AdminAppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(AdminReducer, initialState);

  // ================= CATEGORY =================
  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "HANDLE_CATEGORY_CHANGE",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleCategorySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("/api/category", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state.catObj),
    });
  };

  const handleCategoryUpdateSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    id: string
  ) => {
    e.preventDefault();
    await fetch(`/api/category/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state.catObj),
    });
  };

  const getAllCategory = async () => {
    const res = await fetch("/api/category");
    const data = await res.json();
    if (data.success) {
      dispatch({ type: "SET_CATEGORY_LIST", payload: data.data });
    }
  };

  // ================= PRODUCT =================
  const handleProductChange = (e: any) => {
    dispatch({
      type: "SET_PRODUCT_FIELD",
      payload: { field: e.target.name, value: e.target.value },
    });
  };

  const handleProductImages = (files: FileList) => {
    dispatch({
      type: "SET_PRODUCT_IMAGES",
      payload: Array.from(files),
    });
  };

  const handleProductSubmit = async () => {
    const formData = new FormData();

    Object.entries(state.productObj).forEach(([key, value]) => {
      if (key !== "images") formData.append(key, value as string);
    });

    state.productObj.images.forEach((img) => {
      formData.append("images", img);
    });

    await fetch("/api/product", {
      method: "POST",
      body: formData,
    });
  };

  // ============== GET PRODUCTS ================
  const getAllProducts = async () => {
    try {
      const res = await fetch("/api/product");
      const data = await res.json();

      if (Array.isArray(data)) {
        dispatch({ type: "SET_PRODUCT_LIST", payload: data });
      }
    } catch (err) {
      console.error("Failed to fetch products", err);
    }
  };

  // ================= EFFECT =================
  useEffect(() => {
    getAllCategory();
    getAllProducts(); // fetch products on load
  }, []);

  return (
    <AdminContext.Provider
      value={{
        state,
        handleCategoryChange,
        handleCategorySubmit,
        getAllCategory,
        handleCategoryUpdateSubmit,
        handleProductChange,
        handleProductImages,
        handleProductSubmit,
        getAllProducts, // expose GET function
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminAppProvider;