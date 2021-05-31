import mongoose from "mongoose";

export interface IProject {
  id: number;
  image: string;
  category: string;
  writer: string;
  title: string;
  percent: number;
  notify: number;
  kind: string;
}     
