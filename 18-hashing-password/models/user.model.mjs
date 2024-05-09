import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    username: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    password: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

export default User;
