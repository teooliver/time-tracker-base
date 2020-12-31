import { Document } from "mongoose";

export interface ITask extends Document {
  name: string;
  timeInSeconds: number;
  initialTime: Date;
  endTime: Date;
}
