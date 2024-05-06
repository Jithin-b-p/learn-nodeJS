import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser("hello"));

app.get("/login", (req, res) => {
  // res.cookie("login", "true", { maxAge: 60000 });

  // signedCookies
  res.cookie("login", "true", { maxAge: 60000, signed: true });
  res.status(200).json({ status: "success", message: "login success" });
});

app.get("/products/checkout", (req, res) => {
  // if (!req.cookies || !req.cookies.login) {
  //   return res
  //     .status(404)
  //     .json({ status: "failed", message: "Login again !!" });
  // }
  if (!req.signedCookies || !req.signedCookies.login) {
    return res
      .status(404)
      .json({ status: "failed", message: "Login again !!" });
  }

  res.status(200).json({ status: "success", message: "checkout success!!" });
});

app.listen(3000, () => console.log("Server starting running at port 3000..."));
