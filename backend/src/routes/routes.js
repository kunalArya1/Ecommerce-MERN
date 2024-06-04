import express from "express";
import { userSignUpController } from "../controllers/userSignUp.js";
import { upload } from "../middleware/multer.middleware.js";
import { userSignInController } from "../controllers/userSignIn.js";
import { userDetail } from "../controllers/userDetail.js";
import { authToken } from "../middleware/authToken.js";
import { userLogout } from "../controllers/userLogout.js";
import { allUser } from "../controllers/allUser.js";
import { editRole } from "../controllers/editRole.js";
import { addProduct } from "../controllers/addProduct.js";
import { allProduct } from "../controllers/allProduct.js";
import { checkAdmin } from "../middleware/checkAdmin.js";
import { updateProduct } from "../controllers/updateProduct.js";

// import { home } from "../controllers/index.js";

const router = express.Router();

router.post("/sign-up", upload.single("profilePic"), userSignUpController);
router.post("/login", userSignInController);
router.get("/user-details", authToken, userDetail);
router.get("/logout", userLogout);
router.get("/allusers", allUser);
router.put("/users/:id", editRole);
router.post("/add-product", authToken, checkAdmin, addProduct);
router.get("/products", allProduct);
router.put("/products/:id", authToken, checkAdmin, updateProduct);
export default router;
