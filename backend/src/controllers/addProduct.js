import { productModel } from "../models/productModel.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const addProduct = async (req, res) => {
  try {
    const { brandName, category, description, price, sellingPrice } = req.body;
    if (!brandName || !category || !description || !price || !sellingPrice) {
      throw new Error("Please Provide all the details");
    }
    const fileUrl = await uploadOnCloudinary(req?.file?.path);

    const newProduct = new productModel({
      brandName,
      category,
      description,
      price,
      sellingPrice,
      productImage: fileUrl,
    });
    await newProduct.save();
    console.log(newProduct);
    return res.status(201).json({
      data: newProduct,
      success: true,
      error: false,
      message: "Product added successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
