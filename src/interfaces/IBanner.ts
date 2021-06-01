import mongoose from "mongoose";

export interface IBanner {
  id?: number;
  image: string;
  title: string;
  description: string;
}