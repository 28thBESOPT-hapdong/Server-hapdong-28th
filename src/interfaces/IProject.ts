import mongoose from "mongoose";
import { IDetail } from "./IDetail";
import { IEditor } from "./IEditor";
import { INew } from "./INew";
import { IOpen } from "./IOpen";
import { IPopular } from "./IPopular";

export interface IProject {
  id: mongoose.Types.ObjectId;
  image: string;
  category: string;
  writer: string;
  title: string;
  description: string;
  price: string;
  percent: number;
  dday: number;
  notify: number;
  detail: [IDetail]; // 상세 페이지를 우선 Project 안에 넣음
  editor: [IEditor]; // 에디터픽 프로젝트
  new: [INew]; // 신규추천 프로젝트
  open: [IOpen]; // 공개예정 프로젝트
  popular: [IPopular]; // 인기 프로젝트
}     
