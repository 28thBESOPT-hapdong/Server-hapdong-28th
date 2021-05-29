import mongoose from "mongoose";

export interface IOpen {
  id: mongoose.Types.ObjectId;
  image: string;
  category: string;
  writer: string;
  title: string;
  notify: number;
}

export interface IOpenInputDTO {
    id: mongoose.Types.ObjectId;
    image: string;
    category: string;
    writer: string;
    title: string;
    notify: number;
  }
  