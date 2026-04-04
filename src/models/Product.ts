// models/Product.ts
import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  data: Buffer,
  contentType: String,
});

const ProductSchema = new mongoose.Schema({
  name: String,
  sku: String,
  category: String,
  subCategory: String,
  price: Number,
  discountPrice: Number,
  stock: Number,
  description: String,
  status: String,
  images: [ImageSchema],
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
