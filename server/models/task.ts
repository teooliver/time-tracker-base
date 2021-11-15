import mongoose, { Schema } from 'mongoose';
import { ITaskDocument } from '../interfaces/task';

const TaskSchema: Schema = new Schema(
  {
    name: String,
    time_in_seconds: Number,
    initial_time: Date,
    end_time: Date,
    project: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model<ITaskDocument>('Task', TaskSchema, 'tasks');

export { Task };
