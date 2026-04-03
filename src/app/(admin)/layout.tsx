import Sidebar from "@/components/sidebar/Sidebar";
import Topbar from "@/components/topbar/Topbar";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="rightbar w-full">
        <Topbar />
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
// import { FiTrendingUp, FiPackage, FiUsers, FiDollarSign } from "react-icons/fi";
