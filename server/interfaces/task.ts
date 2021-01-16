import { Document } from 'mongoose';

export interface ITask {
  name: string;
  timeInSeconds: number;
  initialTime: Date;
  endTime: Date;
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
