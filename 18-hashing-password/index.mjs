import express from "express";
import mongoose from "mongoose";
import User from "./models/user.model.mjs";
import { comparePassword, hashPassword } from "./util/helper.mjs";

const app = express();
app.use(express.json());

app.get("/api/user/login", async (req, res) => {
  const { name, username, password } = req.body;

  const user = await User.findOne({ username });

  const passwordMatch = comparePassword(password, user.password);

  if (!passwordMatch) {
    return res
      .status(404)
      .json({ status: "failure", message: "password error!!" });
  }

  res.status(200).json({ status: "success", message: "Login successful!!" });
});

app.post("/api/user/signup", async (req, res) => {
  const { name, username, password } = req.body;
  const hashedPassword = hashPassword(password);

  try {
    const user = await User.create({
      name,
      username,
      password: hashedPassword,
    });

    res.status(201).json({
      status: "success",
      message: "signup success!!",
      data: user,
    });
  } catch (error) {
    res.status(404).json({ status: "failure", message: "sign up error!!" });
  }
});

await mongoose
  .connect("mongodb+srv://<username>:<password>@cluster0.wmbjfwt.mongodb.net/")
  .then(() => console.log("server connected!!"))
  .catch((error) => console.error(error));

app.listen(3000, () => console.log("Server start running at port 3000.."));
