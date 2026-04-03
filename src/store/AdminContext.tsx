"use client";
import AdminReducer from "@/reducers/AdminReducer";
import { AdminContexType, AdminState } from "@/types/admintypes";
import { createContext, useEffect, useReducer } from "react";

export const AdminContext = createContext<AdminContexType | null>(null);
const initialState: AdminState = {
  catObj: {
    name: "",
    subName: "",
  },
  categoryList: [],
  isLoading: false,
};

const AdminAppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(AdminReducer, initialState);
  const handleCategoryChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    dispatch({
      type: "HANDLE_CATEGORY_CHANGE",
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };
  //   console.log(state.catObj);

  const handleCategorySubmit = async (
    e: React.SubmitEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    try {
      const res = await fetch("/api/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state.catObj),
      });
      const data = await res.json();
    } catch (error) {}
  };
  const handleCategoryUpdateSubmit = async (
    e: React.SubmitEvent<HTMLFormElement>,
    id: string,
  ): Promise<void> => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/category/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state.catObj),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllCategory = async (): Promise<void> => {
    try {
      const res = await fetch("/api/category", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.success) {
        dispatch({
          type: "SET_CATEGORY_LIST",
          payload: data.data,
        });
      }
      console.log(data);
    } catch (error) {}
  };
  useEffect(() => {
    getAllCategory();
  }, []);
  return (
    <AdminContext.Provider
      value={{
        state,
        handleCategoryChange,
        handleCategorySubmit,
        getAllCategory,
        handleCategoryUpdateSubmit,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminAppProvider;
