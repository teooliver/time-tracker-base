import { Document } from "mongoose";

export interface ITask extends Document {
  name: string;
  timeInSeconds: number;
  initialTime: Date;
  endTime: Date;
}

export interface IGroupedTasks {
  _id: string;
  tasks: ITask[];
  totalTime: number;
}
