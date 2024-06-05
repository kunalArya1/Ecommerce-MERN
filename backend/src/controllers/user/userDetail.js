import { userModel } from "../../models/userModel.js";

export const userDetail = async (req, res) => {
  try {
    const { userId } = req.user;
    const user = await userModel.findById(userId);
    // console.log(user);
    res.status(200).json({
      data: user,
      error: false,
      success: true,
      message: "User Details",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
