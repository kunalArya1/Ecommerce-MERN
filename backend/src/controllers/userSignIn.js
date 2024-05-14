import { userModel } from "../models/userModel.js";

export const userSignInController = async (req, res) => {
  const { email } = req.body;
  try {
    const data = await userModel.findOne({ email });
    // console.log(data);
    if (!data) {
      return res.status(500).json("user not exist");
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Internal Server Error",
      error: true,
      success: false,
    });
  }
};
