import express from "express";
import { userSignUpController } from "../controllers/user/userSignUp.js";
import { upload } from "../middleware/multer.middleware.js";
import { userSignInController } from "../controllers/user/userSignIn.js";
import { userDetail } from "../controllers/user/userDetail.js";
import { authToken } from "../middleware/authToken.js";
import { userLogout } from "../controllers/user/userLogout.js";
import { allUser } from "../controllers/user/allUser.js";
import { editRole } from "../controllers/user/editRole.js";
import { addProduct } from "../controllers/Product/addProduct.js";
import { allProduct } from "../controllers/Product/allProduct.js";
import { checkAdmin } from "../middleware/checkAdmin.js";
import { updateProduct } from "../controllers/Product/updateProduct.js";
import { getCategoryProduct } from "../controllers/Product/getProductCategory.js";

const router = express.Router();

router.post("/sign-up", upload.single("profilePic"), userSignUpController);
router.post("/login", userSignInController);
router.get("/user-details", authToken, userDetail);
router.get("/logout", userLogout);

//Admin Pannel
router.get("/allusers", allUser);
router.put("/users/:id", editRole);

//product
router.post("/add-product", authToken, checkAdmin, addProduct);
router.get("/products", allProduct);
router.put("/products/:id", authToken, checkAdmin, updateProduct);
router.get("/get-categoryProduct", getCategoryProduct);
export default router;
