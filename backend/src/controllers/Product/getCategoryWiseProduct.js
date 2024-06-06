import { productModel } from "../../models/productModel.js";
export const getCategoryWiseProduct = async (req, res) => {
  try {
    const { categoryName } = req.params;
    const product = await productModel.find({ category: categoryName });
    console.log(product);
    return res.status(200).json(product);
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
