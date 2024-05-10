import passport from "passport";
import { Strategy } from "passport-discord";
import { DiscordUser } from "../models/user.model.mjs";

// serialize
passport.serializeUser((user, done) => {
  console.log("serial", user.id);
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const findUser = await DiscordUser.findById(id);
    return findUser ? done(null, findUser) : done(null, null);
  } catch (error) {
    return done(error, null);
  }
});

export default passport.use(
  new Strategy(
    {
      clientID: "<clientid>",
      clientSecret: "<secret>",
      callbackURL: "http://localhost:3000/api/auth/discord/redirect",
      scope: ["identify", "guilds", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      let findUser;
      try {
        findUser = await DiscordUser.findOne({ discordId: profile.id });
      } catch (error) {
        return done(error, null);
      }

      try {
        if (!findUser) {
          const newUser = await DiscordUser.create({
            username: profile.username,
            discordId: profile.id,
          });
          return done(null, newUser);
        }
        return done(null, findUser);
      } catch (error) {
        done(error, null);
      }
    }
  )
);
