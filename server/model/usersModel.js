import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    minLength: [6, "Must be at least 6, got {VALUE}"],
    maxLength: 12,
    required: true,
  },
  password: { type: String, required: true },
},{timestamps :true});

export default mongoose.model("users",userSchema)
