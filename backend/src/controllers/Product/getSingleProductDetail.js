import { productModel } from "../../models/productModel.js";
export const getSingleProductDetail = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const product = await productModel.findById(id);
    return res.status(200).json({
      data: product,
      message: "ok",
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
