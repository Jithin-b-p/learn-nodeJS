import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import data from "./data.mjs";

const app = express();
app.use(express.json());
app.use(cookieParser("hello"));
app.use(
  session({
    secret: "dsds#&dsds",
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: 60000 * 60 },
  })
);

app.post("/user/auth", (req, res) => {
  const {
    body: { username, password },
  } = req;

  const findUser = data.find((user) => user.username === username);

  if (!findUser || findUser.password !== password) {
    return res
      .status(401)
      .json({ status: "failure", message: "Invalid credential" });
  }

  req.session.user = { name: findUser.name, username: findUser.username };

  return res.status(200).json({
    status: "success",
    data: { name: findUser.name, username: findUser.username },
  });
});

app.get("/user/auth/status", (req, res) => {
  return req.session.user
    ? res.status(200).json({
        status: "success",
        message: "login success !!",
        data: req.session.user,
      })
    : res.status(401).json({ status: "failure", message: "Login again !!" });
});

app.get("/login", (req, res) => {
  // signedCookies
  res.cookie("login", "true", { maxAge: 60000 * 60, signed: true });
  res.status(200).json({ status: "success", message: "login success" });
  // res.cookie("login", "true", { maxAge: 60000 });
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
