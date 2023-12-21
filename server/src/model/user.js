import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    userName: { type: String, requierd: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Users", userSchema);
