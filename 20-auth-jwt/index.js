import express from "express";
import authRouter from "./routes/auth.route.js";
import { connectDB } from "./db/connect.db.js";
import cookieParser from "cookie-parser";
import { verifyToken } from "./middleware/verifyToken.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/resources", verifyToken, (req, res) => {
  res.status(200).json({ status: "success", message: "access resources" });
});

const startServer = async () => {
  try {
    const db = await connectDB();
    console.log("connected to db..");
    app.listen(PORT, () => console.log("Server Start running.."));
  } catch (error) {
    console.log("connecting to db failed...");
  }
};

startServer();
