import mongoose from "mongoose";
import { IExhibition } from "../interfaces/IExhibition";

const ExhibitionSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  num: {
    type: Number,
    required: true,
  },
  tags: {
    type: [String],
    required: true
  }
});

export default mongoose.model<IExhibition & mongoose.Document>(
  "Exhibition",
  ExhibitionSchema
);