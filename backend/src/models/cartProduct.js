import mongoose from "mongoose";

const addToCart = new mongoose.Schema(
  {
    productId: String,
    quantity: Number,
    userId: String,
  },
  {
    timestamps: true,
  }
);

export const addToCartartModel = mongoose.model("addToCart", addToCart);
