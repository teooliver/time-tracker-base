import { Document, ObjectId } from 'mongoose';

export interface ITask extends Document<ObjectId> {
  name: string;
  timeInSeconds: number;
  initialTime: Date;
  endTime: Date;
  project?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IGroupedTasks {
  _id: string;
  tasks: ITask[];
  totalTime: number;
}
