// app/api/add-product/route.ts
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import Product from "@/models/Product";
import { connectDB } from "@/lib/db";


export async function POST(req: NextRequest) {
  try {
    await connectDB(); // ensure DB connection

    const formData = await req.formData();
    const images = formData.getAll("images") as File[];

    const imageBuffers = await Promise.all(
      images.map(async (file) => {
        const bytes = await file.arrayBuffer();
        return {
          data: Buffer.from(bytes),
          contentType: file.type,
        };
      })
    );

    const product = await Product.create({
      name: formData.get("name"),
      sku: formData.get("sku"),
      category: formData.get("category"),
      subCategory: formData.get("subCategory"),
      price: Number(formData.get("price")),
      discountPrice: Number(formData.get("discountPrice")),
      stock: Number(formData.get("stock")),
      description: formData.get("description"),
      status: formData.get("status"),
      images: imageBuffers,
    });

    return NextResponse.json(product);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}



export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const url = new URL(req.url);
    const category = url.searchParams.get("category");
    const limit = Number(url.searchParams.get("limit")) || 50;
    const skip = Number(url.searchParams.get("skip")) || 0;

    const query: Record<string, any> = {};
    if (category) query.category = category;

    const products = await Product.find(query)
      .skip(skip)
      .limit(limit)
      .lean();

    // ✅ Convert Buffer → base64
    const formattedProducts = products.map((product) => {
      if (product.images && product.images.length > 0) {
        product.images = product.images.map((img: any) => ({
          contentType: img.contentType,
          data: img.data.toString("base64"), // 🔥 conversion happens here
        }));
      }
      return product;
    });

    return NextResponse.json(formattedProducts);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
