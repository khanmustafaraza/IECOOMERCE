import mongoose, { Schema, model, models } from "mongoose";

const SessionSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true },
);

const Session = models.Session || model("Session", SessionSchema);

export default Session;
