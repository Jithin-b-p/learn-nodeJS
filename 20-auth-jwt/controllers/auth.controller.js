import { User } from "../models/user.model.js";
import { hashPassword } from "../util/hashing.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email)
    return res
      .status(404)
      .json({ status: "failure", message: "insufficient data" });

  const hashedPassword = hashPassword(password);
  try {
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2m",
    });

    const refreshToken = jwt.sign({ id }, Math.random());

    return res
      .cookie("access_token", accessToken, {
        httpOnly: true,
        secure: true,
      })
      .status(200)
      .json({ status: "success", message: "account created successfully" });
  } catch (error) {
    return res.status(500).json({ status: "failure", message: error.message });
  }
};
