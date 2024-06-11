import { addToCartartModel } from "../../models/cartProduct.js";

export const removeToCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const currentUser = req.user._id;

    const removedProduct = await addToCartartModel.findOneAndDelete({
      productId,
      userId: currentUser,
    });

    if (!removedProduct) {
      return res.status(404).json({
        message: "Product not found in cart",
        success: false,
        error: true,
      });
    }

    return res.json({
      message: "Product removed from cart",
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
