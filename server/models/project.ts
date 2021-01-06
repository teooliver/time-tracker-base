import mongoose, { Schema } from "mongoose";
import { IProject } from "../interfaces/project";

const ProjectSchema: Schema = new Schema(
  {
    name: String,
    subprojects: [String],
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model<IProject>("Project", ProjectSchema, "projects");

export { Project };
