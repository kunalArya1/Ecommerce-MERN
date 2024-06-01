import { userModel } from "../models/userModel.js";

export const editRole = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;

  const validRoles = ["GENERAL", "ADMIN"];
  if (!validRoles.includes(role)) {
    return res.status(400).json({ message: "Invalid role provided" });
  }

  try {
    const user = await userModel.findByIdAndUpdate(id, { role }, { new: true });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "Role updated successfully", user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
