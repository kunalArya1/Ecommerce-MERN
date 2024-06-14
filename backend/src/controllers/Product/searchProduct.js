import { productModel } from "../../models/productModel.js";
export const searchProduct = async (req, res) => {
  try {
    const { q } = req.query;
    let query = {};

    if (q) {
      const regex = new RegExp(q, "i");
      query = {
        $or: [{ productName: regex }, { category: regex }],
      };
    }

    const products = await productModel.find(query);

    res.status(200).json({
      data: products,
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
