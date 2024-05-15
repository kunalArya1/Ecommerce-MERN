import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import router from "./routes/routes.js";
import cookieParser from "cookie-parser";
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
dotenv.config();

const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("mongodb connected");
    app.listen(PORT, () => {
      console.log(`server is running on PORT ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

app.use("/api", router);
