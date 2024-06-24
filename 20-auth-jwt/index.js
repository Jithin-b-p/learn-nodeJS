import express from "express";
import authRouter from "./routes/auth.route.js";
import { connectDB } from "./db/connect.db.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Welcome");
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
