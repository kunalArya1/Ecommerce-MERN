import { productModel } from "../../models/productModel.js";

export const filterProduct = async (req, res) => {
  try {
    const { category } = req.body || [];

    const product = await productModel.find({
      category: { $in: category },
    });

    return res.json({
      data: product,
      message: "Products fetched successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
