import { addToCartartModel } from "../../models/cartProduct.js";

export const countAddToCartProduct = async (req, res) => {
  try {
    const { userId } = req?.user;

    const count = await addToCartartModel.countDocuments({
      userId,
    });

    res.json({
      data: {
        count: count,
      },
      message: "ok",
      error: false,
      success: true,
    });
  } catch (error) {
    res.json({
      message: error.message || error,
      error: false,
      success: false,
    });
  }
};
