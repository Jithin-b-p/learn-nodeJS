import passport from "passport";
import { Strategy } from "passport-local";

import users from "../users.mjs";

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  try {
    const findUser = users.find((user) => user.id === id);
    if (!findUser) throw new Error("Login again!!");

    done(null, findUser);
  } catch (error) {
    done(error, null);
  }
});

export default passport.use(
  new Strategy((username, password, done) => {
    try {
      const findUser = users.find((user) => user.username === username);
      if (!findUser) throw new Error("invalid username!!");

      if (findUser.password !== password) {
        throw new Error("invalid password!!");
      }

      done(null, findUser);
    } catch (error) {
      done(error, null);
    }
  })
);
