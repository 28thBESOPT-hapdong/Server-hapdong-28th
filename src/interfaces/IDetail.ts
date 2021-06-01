import mongoose from "mongoose";

export interface IDetail {
  id?: number;
  image: string;
  category: string;
  writer: string;
  title: string;
  description: string;
  price: string;
  percent: number;
  dDay: number;
}