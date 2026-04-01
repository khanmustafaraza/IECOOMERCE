import { NextResponse } from "next/server";
import User from "@/models/User";
import { connectDB } from "@/lib/db";
import { hashPassword } from "@/lib/password";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { name, email, password } = await req.json();

    // ---------------- Validation ----------------
    if (!name || !email || !password) {
      return NextResponse.json(
        {
          success: false,
          msg: "All fields are required",
        },
        { status: 400 },
      );
    }

    // ---------------- Check Existing User ----------------
    const userExist = await User.findOne({ email });

    if (userExist) {
      return NextResponse.json(
        {
          success: false,
          msg: "Account already exists!",
        },
        { status: 400 },
      );
    }

    // ---------------- Hash Password ----------------
    const hashedPassword = await hashPassword(password);

    if (!hashedPassword) {
      return NextResponse.json(
        {
          success: false,
          msg: "Password hashing failed",
        },
        { status: 500 },
      );
    }
    if (email == "mrkec1994@gmail.com") {
      await User.create({
        name,
        email,
        password: hashedPassword,
        role: "admin",
      });
      return NextResponse.json(
        {
          success: true,
          msg: "Account created successfully!",
        },
        { status: 201 },
      );
    }
    // ---------------- Create User ----------------
    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      {
        success: true,
        msg: "Account created successfully!",
      },
      { status: 201 },
    );
  } catch (error) {
    console.log("REGISTER ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        msg: "Something went wrong",
      },
      { status: 500 },
    );
  }
}
