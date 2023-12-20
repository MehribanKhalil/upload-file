import mongoose from "mongoose";
const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: [{ type: String, required: true }],
  },
  { timestamps: true }
);

export default mongoose.model("Books", bookSchema);
