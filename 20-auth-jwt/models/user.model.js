import { Schema, model } from "mongoose";

const UserSchema = Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  { timeStamps: true }
);

export const User = model("User", UserSchema);
