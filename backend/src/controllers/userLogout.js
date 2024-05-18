export const userLogout = (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({
      message: "user Logged out successfully",
      error: false,
      success: true,
      data: [],
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
