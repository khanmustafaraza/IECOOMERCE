"use client";

import Link from "next/link";
import {
  FiGrid,
  FiUsers,
  FiShoppingBag,
  FiFileText,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

const Sidebar = () => {
  const menuItems = [
    {
      id: 1,
      name: "Dashboard",
      href: "/admin",
      icon: <FiGrid size={18} />,
    },
    {
      id: 2,
      name: "Users",
      href: "/admin/users",
      icon: <FiUsers size={18} />,
    },
    {
      id: 3,
      name: "Products",
      href: "/admin/products",
      icon: <FiShoppingBag size={18} />,
    },
    {
      id: 4,
      name: "Orders",
      href: "/admin/orders",
      icon: <FiFileText size={18} />,
    },
    {
      id: 5,
      name: "Settings",
      href: "/admin/settings",
      icon: <FiSettings size={18} />,
    },
  ];

  return (
    <aside className="w-full md:w-65 h-full border-r border-gray-200  flex flex-col justify-between">
      {/* Top */}
      <div>
        <div className="border-b py-2.5 border-gray-200">
          <Link
            href="/admin"
            className="text-2xl font-bold tracking-tight text-gray-900 "
          >
            AdminPanel
          </Link>

          <p className="text-sm text-gray-500 mt-2">Manage your store easily</p>
        </div>

        {/* Menu */}
        <nav className="mt-10 space-y-2 px-5 py-2">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-700 hover:bg-gray-50 hover:text-black transition-all duration-300"
            >
              <span>{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom */}
      <div className="pt-6 border-t border-gray-100">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-700 hover:bg-gray-50 hover:text-red-500 transition-all duration-300">
          <FiLogOut size={18} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
