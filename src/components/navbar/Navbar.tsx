"use client";

import Link from "next/link";
import { FiShoppingBag, FiUser, FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";

type SessionType = {
  userId: string;
  name: string;
  role: "user" | "admin" | "delivery";
  expiresAt: string;
} | null;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [session, setSession] = useState<SessionType>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSession() {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();

        if (data.success) {
          setSession(data.user);
        } else {
          setSession(null);
        }
      } catch (error) {
        setSession(null);
      } finally {
        setLoading(false);
      }
    }

    fetchSession();
  }, []);

  return (
    <header className="w-full border-b border-gray-200/70">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        {/* Left */}
        <div className="flex items-center gap-10">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            E-Commerce
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/user">User</Link>

            {session && <Link href="/dashboard">Dashboard</Link>}
            {session?.role === "admin" && <Link href="/admin">Admin</Link>}
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          <Link href="/cart" className="hidden sm:flex items-center gap-2">
            <FiShoppingBag size={20} />
            <span className="text-sm font-medium">Cart</span>
          </Link>

          {loading ? (
            <p className="text-sm">Loading...</p>
          ) : session ? (
            <span className="text-sm font-medium">Hello, {session.name}</span>
          ) : (
            <Link
              href="/login"
              className="flex items-center gap-2 border border-gray-300 px-4 py-2.5 rounded-full text-sm font-medium"
            >
              <FiUser size={18} />
              Login
            </Link>
          )}

          <button onClick={() => setOpen(!open)} className="md:hidden">
            <FiMenu size={24} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
          <Link href="/shop">Shop</Link>
          <Link href="/about">About</Link>
          <Link href="/user">User</Link>

          {session && <Link href="/dashboard">Dashboard</Link>}
          {session?.role === "admin" && <Link href="/admin">Admin</Link>}
        </div>
      )}
    </header>
  );
}
