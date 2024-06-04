import { productModel } from "../models/productModel.js";

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Product ID:", id);

    const {
      productName,
      brandName,
      category,
      description,
      price,
      sellingPrice,
      images,
    } = req.body;
    console.log(productName, brandName, category, description, price);
    // Validate input data
    if (
      !productName ||
      !brandName ||
      !category ||
      !description ||
      !price ||
      !sellingPrice ||
      !images
    ) {
      return res.status(400).json({
        message: "All fields are required",
        error: true,
        success: false,
      });
    }

    // Find the product by ID
    const product = await productModel.findById(id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
        error: true,
        success: false,
      });
    }

    // Update the product with new data
    product.productName = productName;
    product.brandName = brandName;
    product.category = category;
    product.description = description;
    product.price = price;
    product.sellingPrice = sellingPrice;
    product.images = images;

    // Save the updated product
    await product.save();

    // Send a success response
    return res.status(200).json({
      message: "Product updated successfully",
      error: false,
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
