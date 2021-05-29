import mongoose from "mongoose";

export interface IEditor {
  id: mongoose.Types.ObjectId;
  image: string;
  category: string;
  writer: string;
  title: string;
  percent: number;
}

export interface IEditorInputDTO {
    id: mongoose.Types.ObjectId;
    image: string;
    category: string;
    writer: string;
    title: string;
    percent: number;
  }