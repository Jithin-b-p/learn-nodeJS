import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import "./strategies/local-strategy.mjs";

const app = express();

app.use(express.json());
app.use(cookieParser("dsdsd"));
app.use(
  session({
    secret: "dsdds",
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: 60000 * 60 },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.post("/api/auth", passport.authenticate("local"), (req, res) => {
  res.status(200).json({
    status: "success",
    data: { username: req.user.username, name: req.user.name },
  });
});

app.get("/api/auth/status", (req, res) => {
  if (!req.user)
    return res
      .status(404)
      .json({ status: "failure", message: "Login again!!" });

  res.status(200).json({
    status: "success",
    data: { name: req.user.name, username: req.user.username },
  });
});

// logout
app.get("/api/auth/logout", (req, res) => {
  if (!req.user)
    return res
      .status(404)
      .json({ status: "failure", message: "user not logged in!!" });
  req.logout((error) => {
    if (error)
      return res.status(404).json({ status: "failure", message: "user error" });
    res.status(200).json({ status: "success", message: "logout successful!!" });
  });
});

app.listen(3000, () => console.log("server start running at port 3000.."));
