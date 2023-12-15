import mongoose, { Schema } from "mongoose";

const MovieSchema = new Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    }],
  },
  { timestamps: true }
);

export default mongoose.model("movie", MovieSchema);
