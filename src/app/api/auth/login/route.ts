import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { signToken } from "@/lib/auth";
import { connectDB } from "@/lib/db";

export async function POST(req: Request) {
  await connectDB();
  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user) return NextResponse.json({ error: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return NextResponse.json({ error: "Invalid credentials" });

  const token = signToken({ id: user._id, role: user.role });

  const res = NextResponse.json({ message: "Login success" });
  res.cookies.set("token", token, { httpOnly: true });

  return res;
}

("use server");

import bcrypt from "bcryptjs";
import connectDB from "@/lib/db";
import User from "@/lib/models/User";
import { createDatabaseSession, deleteDatabaseSession } from "@/lib/session-db";
import { redirect } from "next/navigation";

export async function loginUser(formData: FormData) {
  await connectDB();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { success: false, message: "Email and password are required" };
  }

  const user = await User.findOne({ email });

  if (!user) {
    return { success: false, message: "Invalid credentials" };
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    return { success: false, message: "Invalid credentials" };
  }

  await createDatabaseSession(user._id.toString());

  if (user.role === "admin") {
    redirect("/admin");
  }

  redirect("/dashboard");
}

export async function logoutUser() {
  await deleteDatabaseSession();
  redirect("/login");
}
