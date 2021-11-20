import mongoose, { Schema } from 'mongoose';
import { ITaskDocument } from '../interfaces/task';

const TaskSchema: Schema = new Schema(
  {
    name: String,
    initial_time: Date,
    end_time: Date,
    project: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

const Task = mongoose.model<ITaskDocument>('Task', TaskSchema, 'tasks');

export { Task };
