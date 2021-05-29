import mongoose from "mongoose";

export interface IPopular {
  id: mongoose.Types.ObjectId;
  image: string;
  category: string;
  writer: string;
  title: string;
  percent: number;
}
export interface IPopularInputDTO {
    id: mongoose.Types.ObjectId;
    image: string;
    category: string;
    writer: string;
    title: string;
    percent: number;
  }
  