import { AuthContext } from "@/store/AuthContext";
import { useContext } from "react";

export default function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}