import { addToCartartModel } from "../../models/cartProduct.js";

export const deleteAddToCartProduct = async (req, res) => {
  try {
    const { userId } = req.user;
    const { productId } = req.body;

    // Delete the product from the cart
    const deleteProduct = await addToCartartModel.findByIdAndDelete(productId);
    if (!deleteProduct) {
      return res.status(404).json({
        message: "Product not found in cart",
        error: true,
        success: false,
      });
    }

    console.log("deleted product", deleteProduct, "productID", productId);
    return res.json({
      message: "Product Deleted From Cart",
      error: false,
      success: true,
      data: deleteProduct,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
