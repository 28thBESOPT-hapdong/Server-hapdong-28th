import mongoose from "mongoose";
import { IProject } from "../interfaces/IProject";

const ProjectSchema = new mongoose.Schema({
  id: {
    type: mongoose.SchemaTypes.ObjectId,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
  },
  writer: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
  percent: {
    type: Number,
  },
  dday: {
    type: Number,
  },
  notify: {
    type: Number,
  },
  detail: [
    {
      id: {
        type: mongoose.Types.ObjectId,
      },
      image: {
        type: String,
      },
      category: {
        type: String,
      },
      writer: {
        type: String,
      },
      title: {
        type: String,
      },
      description: {
        type: String,
      },
      price: {
        type: String,
      },
      percent: {
        type: Number,
      },
      dDay: {
        type: Number,
      },
    },
  ],
  editor: [
    {
      id: {
        type: mongoose.Types.ObjectId,
      },
      image: {
        type: String,
      },
      category: {
        type: String,
      },
      writer: {
        type: String,
      },
      title: {
        type: String,
      },
      percent: {
        type: Number,
      },
    },
  ],
  new: [
    {
      id: {
        type: mongoose.Types.ObjectId,
      },
      image: {
        type: String,
      },
      category: {
        type: String,
      },
      writer: {
        type: String,
      },
      title: {
        type: String,
      },
      percent: {
        type: Number,
      },
    },
  ],
  open: [
    {
      id: {
        type: mongoose.Types.ObjectId,
      },
      image: {
        type: String,
      },
      category: {
        type: String,
      },
      writer: {
        type: String,
      },
      title: {
        type: String,
      },
      notify: {
        type: Number,
      },
    },
  ],
  popular: [
    {
      id: {
        type: mongoose.Types.ObjectId,
      },
      image: {
        type: String,
      },
      category: {
        type: String,
      },
      writer: {
        type: String,
      },
      title: {
        type: String,
      },
      percent: {
        type: Number,
      },
    },
  ],
});

export default mongoose.model<IProject & mongoose.Document>("Project", ProjectSchema);
