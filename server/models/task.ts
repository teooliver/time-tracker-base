import mongoose, { Schema } from 'mongoose';
import { ITaskDocument } from '../interfaces/task';

const TaskSchema: Schema = new Schema(
  {
    name: String,
    timeInSeconds: Number,
    initialTime: Date,
    endTime: Date,
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
