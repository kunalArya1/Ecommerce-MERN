import { addToCartartModel } from "../../models/cartProduct.js";

export const addToCartViewProduct = async (req, res) => {
  try {
    const { userId } = req?.user;
    const allProduct = await addToCartartModel
      .find({ userId })
      .populate("productId");

    return res.json({
      data: allProduct,
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
