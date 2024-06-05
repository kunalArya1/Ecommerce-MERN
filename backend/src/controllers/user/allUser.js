import { userModel } from "../../models/userModel.js";
export const allUser = async (req, res) => {
  try {
    const user = await userModel.find({});
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
