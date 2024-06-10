import { addToCartartModel } from "../../models/cartProduct.js";

export const addToCart = async (req, res) => {
  try {
    const { productId } = req?.body;
    const currentUser = req?.user?._id;

    const isProductExist = await addToCartartModel.findById(productId);

    if (isProductExist) {
      return res.json({
        message: "Already exist in Add to cart",
        success: true,
        error: false,
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
      newProduct: savedProduct,
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
