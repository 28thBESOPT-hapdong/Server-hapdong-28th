import mongoose from "mongoose";

export interface INew {
  id: mongoose.Types.ObjectId;
  image: string;
  category: string;
  writer: string;
  title: string;
  percent: number;
}

export interface INewInputDTO {
    id: mongoose.Types.ObjectId;
    image: string;
    category: string;
    writer: string;
    title: string;
    percent: number;
  }
  