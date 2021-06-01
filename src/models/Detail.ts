import mongoose from "mongoose";
import { IProject } from "../interfaces/IProject";
import { IDetail } from "../interfaces/IDetail";
const DetailSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  writer: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  percent: {
    type: Number,
    required: true
  },
  dday: {
    type: Number,
    required: true
  },
  
});

export default mongoose.model<IDetail & mongoose.Document>("Detail", DetailSchema);