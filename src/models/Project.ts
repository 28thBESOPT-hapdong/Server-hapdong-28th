import mongoose from "mongoose";
import { IProject } from "../interfaces/IProject";

const ProjectSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true
  },
  image: {
    type: String,
  },
  category: {
    type: String,
  },
  writer: {
    type: String,
  },
  title: {
    type: String,
  },
  percent: {
    type: Number,
  },
  notify: {
    type: Number,
  },
  kind: {
    type: String
  }
});

export default mongoose.model<IProject & mongoose.Document>("Project", ProjectSchema);
