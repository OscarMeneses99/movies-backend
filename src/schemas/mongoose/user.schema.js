import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    id: {
      type: String,
    },
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 50,
    },
    username: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 20,
    },
    password: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 100,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
