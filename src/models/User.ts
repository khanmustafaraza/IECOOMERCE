import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true,

    lowercase: true,
    trim: true,
  },
  password: String,
  role: { type: String, enum: ["user", "admin", "delivery"], default: "user" }, // user | admin
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
