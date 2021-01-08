import mongoose, { Schema } from "mongoose";
import { IProject } from "../interfaces/project";

const Subproject: Schema = new Schema({
  name: String,
});

const ProjectSchema: Schema = new Schema(
  {
    name: String,
    client: {
      type: Schema.Types.ObjectId,
      ref: "Client",
    },
    estimate: String,
    status: String,
    subprojects: [Subproject],
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model<IProject>("Project", ProjectSchema, "projects");

export { Project };
