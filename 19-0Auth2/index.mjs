import express from "express";
import passport from "passport";
import session from "express-session";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import cookieParser from "cookie-parser";

import "./strategies/discord-strategy.mjs";

const app = express();

await mongoose
  .connect("mongodb+srv://<username>:<password>@cluster0.wmbjfwt.mongodb.net/")
  .then(() => console.log("connected to DB!!"))
  .catch((error) => console.error(error));

app.use(cookieParser("hello"));
app.use(
  session({
    secret: "ddsdss",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 60000 * 60,
    },
    store: MongoStore.create({
      client: mongoose.connection.getClient(),
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/api/auth/discord/status", (req, res) => {
  console.log("sessionid", req.sessionID);
  if (!req.user) {
    return res
      .status(404)
      .json({ status: "failure", message: "user not found!!" });
  }

  res.status(200).json({ status: "success", data: req.user });
});

app.get("/api/auth/discord", passport.authenticate("discord"));

app.get(
  "/api/auth/discord/redirect",
  passport.authenticate("discord"),
  (req, res) => {
    res.status(200).send();
  }
);

app.listen(3000, () => console.log("Server start running at port 3000.."));
