"use client";

import React, { createContext, useReducer } from "react";
import AuthReducer from "@/reducers/AuthReducer";
import { AuthContextType, AuthState } from "@/types/authtype";

const initialState: AuthState = {
  registerObj:{
    name :"",
    email:"",
    password:""

  },
  isLoading: false,
  isError: false,
  message: "",
};

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.name)
    // console.log(e.target.value)
    dispatch({
      type: "HANDLE_CHANGE",
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleSubmit = async (e:React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state.registerObj)
    try {
      dispatch({ type: "SET_LOADING" });

      // fake API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      dispatch({
        type: "REGISTER_SUCCESS",
        payload: "User registered successfully",
      });
    } catch (error) {
      dispatch({
        type: "REGISTER_ERROR",
        payload: "Something went wrong",
      });
    }
  };

  return (
    <AuthContext.Provider value={{ state, handleChange, handleSubmit }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
