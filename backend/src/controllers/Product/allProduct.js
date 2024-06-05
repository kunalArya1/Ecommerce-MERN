import { productModel } from "../../models/productModel.js";

export const allProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    return res.status(200).json(products);
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
