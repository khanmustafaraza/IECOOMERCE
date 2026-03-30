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