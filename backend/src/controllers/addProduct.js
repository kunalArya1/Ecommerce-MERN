import { productModel } from "../models/productModel.js";

export const addProduct = async (req, res) => {
  try {
    const {
      productName,
      brandName,
      category,
      description,
      price,
      sellingPrice,
      images,
    } = req.body;
    if (
      !productName ||
      !brandName ||
      !category ||
      !description ||
      !price ||
      !sellingPrice ||
      !images ||
      images.length === 0
    ) {
      throw new Error("Please Provide all the details and at least one image");
    }

    const newProduct = new productModel({
      productName,
      brandName,
      category,
      description,
      price,
      sellingPrice,
      images, // This should be an array of image URLs
    });
    await newProduct.save();
    // console.log(newProduct);
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
