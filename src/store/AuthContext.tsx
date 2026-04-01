"use client";

import React, { createContext, useReducer } from "react";
import AuthReducer from "@/reducers/AuthReducer";
import { AuthContextType, AuthState } from "@/types/authtype";
import { toast } from "react-toastify";

const initialState: AuthState = {
  registerObj: {
    name: "",
    email: "",
    password: "",
  },
  loginObj: {
    email: "",
    password: "",
  },
  isLoading: false,
  isError: false,
  message: "",
};

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const handleRegisterChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    // console.log(e.target.name)
    // console.log(e.target.value)
    dispatch({
      type: "HANDLE_REGISTER_CHANGE",
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleRegisterSubmit = async (
    e: React.SubmitEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    try {
      dispatch({ type: "SET_LOADING" });

      // fake API delay
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state.registerObj),
      });
      const data = await res.json();
      // console.log(data.status);
      if (data.success) {
        toast.success(data.msg);
        dispatch({
          type: "REGISTER_SUCCESS",
          payload: data.msg,
        });
      } else {
        toast.error(data.msg);
      }
    } catch (error) {
      // console.log(error);
      dispatch({
        type: "REGISTER_ERROR",
        payload: "Something went wrong",
      });
    }
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({
      type: "HANDLE_LOGIN_CHANGE",
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };
  const handleLoginSubmit = async (
    e: React.SubmitEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    e.preventDefault();
    try {
      dispatch({ type: "SET_LOADING" });

      // fake API delay
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state.loginObj),
      });
      const data = await res.json();
      console.log(data);
      if (data.success) {
        toast.success(data.msg);
        dispatch({
          type: "REGISTER_SUCCESS",
          payload: data.msg,
        });
      } else {
        toast.error(data.msg);
      }
    } catch (error) {
      // // console.log(error);
      // dispatch({
      //   type: "REGISTER_ERROR",
      //   payload: "Something went wrong",
      // });
    }
  };
  return (
    <AuthContext.Provider
      value={{
        state,
        handleRegisterChange,
        handleRegisterSubmit,
        handleLoginChange,
        handleLoginSubmit,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
