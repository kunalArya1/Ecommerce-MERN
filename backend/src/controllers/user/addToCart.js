import { addToCartartModel } from "../../models/cartProduct.js";

export const addToCart = async (req, res) => {
  try {
    const { productId } = req?.body;
    const { userId } = req?.user; // This is set in authToken middleware
    // console.log("userId", userId);
    const isProductExist = await addToCartartModel.findOne({ productId });
    console.log("product Id ", productId);
    // console.log(isProductExist);
    if (isProductExist) {
      return res.json({
        message: "Already exist in Add to cart",
        success: false,
        error: true,
      });
    }
    const payload = {
      productId: productId,
      quantity: 1,
      userId: currentUser,
    };
    const newAddToCart = new addToCartartModel(payload);
    const savedProduct = await newAddToCart.save();

    return res.json({
      data: savedProduct,
      message: "Product Added",
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
