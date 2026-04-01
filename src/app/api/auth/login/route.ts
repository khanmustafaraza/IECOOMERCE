import { connectDB } from "@/lib/db";
import { comparePassword } from "@/lib/password";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { generateToken } from "@/lib/session-token-auth";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password are required" },
        { status: 400 },
      );
    }

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 },
      );
    }

    const isMatch = await comparePassword(password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { success: false, error: "Invalid credentials" },
        { status: 401 },
      );
    }

    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    const token = generateToken({
      userId: user._id.toString(),
      role: user.role,
      name: user.name,
      expiresAt: expiresAt.toISOString(),
    });

    const res = NextResponse.json(
      {
        success: true,
        message: "Login success",
        user: {
          id: user._id,
          name: user.name,
          role: user.role,
        },
      },
      { status: 200 },
    );

    res.cookies.set("session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      expires: expiresAt,
      sameSite: "lax",
      path: "/",
    });

    return res;
    console.log(res);
  } catch (error) {
    console.log("LOGIN ERROR:", error);

    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 },
    );
  }
}
