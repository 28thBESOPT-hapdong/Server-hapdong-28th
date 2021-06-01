import mongoose from "mongoose";
import { IBanner } from "../interfaces/IBanner";

const BannerSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IBanner & mongoose.Document>(
  "Banner",
  BannerSchema
);