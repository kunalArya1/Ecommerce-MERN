import { addToCartartModel } from "../../models/cartProduct.js";

export const addToCart = async (req, res) => {
  try {
    const { productId } = req?.body;
    const { userId } = req?.user;

    const isProductExist = await addToCartartModel.findOne({
      productId,
      userId,
    });

    if (isProductExist) {
      return res.json({
        message: "Already exist in Add to cart",
        success: false,
        error: true,
      });
    }

    const payload = {
      productId,
      quantity: 1,
      userId,
    };
    const newAddToCart = new addToCartartModel(payload);
    const savedProduct = await newAddToCart.save();

    return res.json({
      data: savedProduct,
      message: "Product Added in cart",
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
