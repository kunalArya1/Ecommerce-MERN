import { productModel } from "../../models/productModel.js";

export const getProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await productModel.findById({ _id: productId });
    return res.status(200).json({
      data: product,
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
