import { addToCartartModel } from "../../models/cartProduct.js";

export const updateAddToCart = async (req, res) => {
  try {
    const { userId } = req.user;
    const { _id: addToCartProductId, quantity: qty } = req.body;

    if (!addToCartProductId || qty === undefined) {
      return res.status(400).json({
        message: "Product ID and quantity are required.",
        error: true,
        success: false,
      });
    }

    const updateResult = await addToCartartModel.updateOne(
      { _id: addToCartProductId, userId },
      { $set: { quantity: qty } }
    );

    if (updateResult.nModified === 0) {
      return res.status(404).json({
        message: "Product not found or quantity unchanged.",
        error: true,
        success: false,
      });
    }

    return res.json({
      message: "Product updated!",
      data: updateResult,
      error: false,
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
