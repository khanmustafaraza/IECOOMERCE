import { connectDB } from "@/lib/db";
import Category from "@/models/Category";
import { NextResponse } from "next/server";
type ParamsType = {
  params: {
    id: string;
  };
};

export const PUT = async (req: Request, { params }: ParamsType) => {
  try {
    await connectDB();

    const { id } = await params;
    const { name, subName } = await req.json();
    console.log(".................", id);

    if (!name?.trim() || !subName?.trim()) {
      return NextResponse.json(
        {
          success: false,
          msg: "Name and Sub Name are required",
        },
        { status: 400 },
      );
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      {
        name: name.trim(),
        subname: subName.trim(),
      },
      { new: true },
    );

    if (!updatedCategory) {
      return NextResponse.json(
        {
          success: false,
          msg: "Category not found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        msg: "Category Updated Successfully!",
        data: updatedCategory,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("CATEGORY PUT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        msg: "Something went wrong",
      },
      { status: 500 },
    );
  }
};
