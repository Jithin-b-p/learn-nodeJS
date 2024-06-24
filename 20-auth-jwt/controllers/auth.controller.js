import { User } from "../models/user.model.js";
import { hashPassword } from "../util/hashing.js";

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

    return res
      .status(200)
      .json({ status: "success", message: "account created successfully!!" });
  } catch (error) {
    return res.status(500).json({ status: "failure", message: error.message });
  }
};
