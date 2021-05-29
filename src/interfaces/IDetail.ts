import mongoose from "mongoose";

export interface IDetail {
  id: mongoose.Types.ObjectId;
  image: string;
  category: string;
  writer: string;
  title: string;
  description: string;
  price: string;
  percent: number;
  dDay: number;
}
export interface IDetailInputDTO {
    id: mongoose.Types.ObjectId;
    image: string;
    category: string;
    writer: string;
    title: string;
    description: string;
    price: string;
    percent: number;
    dDay: number;
  }