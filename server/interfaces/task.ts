import { Document } from 'mongoose';

export interface ITask {
  name: string;
  time_in_seconds: number;
  initial_time: Date;
  end_time: Date;
  project?: string;
}

export interface ITaskDocument extends ITask, Document {
  createdAt: Date;
  updatedAt: Date;
}

export interface IGroupedTasks {
  _id: string;
  tasks: ITaskDocument[];
  totalTime: number;
}
