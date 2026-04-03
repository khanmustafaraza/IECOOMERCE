import { connectDB } from "@/lib/db";
import Category from "@/models/Category";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    await connectDB();

    const { name, subName } = await req.json();

    if (!name || !subName) {
      return NextResponse.json(
        {
          success: false,
          msg: "Name and Sub Name are required",
        },
        { status: 400 },
      );
    }

    const catExist = await Category.findOne({ name: name.trim() });

    if (catExist) {
      return NextResponse.json(
        {
          success: false,
          msg: "Category Already Exists",
        },
        { status: 400 },
      );
    }

    await Category.create({
      name: name.trim(),
      subname: subName.trim(),
    });

    return NextResponse.json(
      {
        success: true,
        msg: "Category Added Successfully!",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("CATEGORY POST ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        msg: "Something went wrong",
      },
      { status: 500 },
    );
  }
};
export const GET = async (req: Request) => {
  try {
    await connectDB();

    const catList = await Category.find({});

    if (!catList) {
      return NextResponse.json(
        {
          success: false,
          msg: "Category Already Exists",
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        msg: "Get All Category Successfully!",
        data: catList,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("CATEGORY GET ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        msg: "Something went wrong",
      },
      { status: 500 },
    );
  }
};
