import express from "express";
import authRouter from "./routes/auth.route.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(PORT, () => console.log("Server Start running.."));
