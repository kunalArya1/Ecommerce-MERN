import { productModel } from "../models/productModel.js";

export const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await productModel.findById(id);
  console.log(id);
  console.log(product);
  return res.status(200).json(product);
};
