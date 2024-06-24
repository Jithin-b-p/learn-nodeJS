import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const { access_token } = req.cookies;

  if (!access_token) {
    return res
      .status(404)
      .json({ status: "failure", message: "User not found!" });
  }

  jwt.verify(access_token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(404)
        .json({ status: "failure", message: "Access denied!" });
    }

    req.userId = decoded;
    next();
  });
};
