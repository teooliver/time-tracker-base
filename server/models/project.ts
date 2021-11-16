import mongoose, { Schema } from 'mongoose';
import { IProjectDocument } from '../interfaces/project';

const Subproject: Schema = new Schema({
  name: String,
});

const ProjectSchema: Schema = new Schema(
  {
    name: String,
    client: {
      type: Schema.Types.ObjectId,
      ref: 'Client',
    },
    color: String,
    estimate: String,
    status: String,
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

const Project = mongoose.model<IProjectDocument>(
  'Project',
  ProjectSchema,
  'projects'
);

export { Project };
