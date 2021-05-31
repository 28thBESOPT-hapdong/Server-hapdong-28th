import mongoose from "mongoose";

export interface IExhibition {
  id?: number;
  image: string;
  title: string;
  num: number;
  tags: [string];
}