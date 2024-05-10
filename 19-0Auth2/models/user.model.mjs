import mongoose from "mongoose";

const DiscordUserSchema = mongoose.Schema(
  {
    username: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },

    discordId: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
  },
  {
    timeStamps: true,
  }
);

export const DiscordUser = mongoose.model("DiscordUser", DiscordUserSchema);
