import { Document } from 'mongoose';

export interface ITask {
  name: string;
  initial_time: Date;
  end_time: Date;
  project?: string | null;
}

export interface ITaskDocument extends ITask, Document {
  created_at: Date;
  updated_at: Date;
}

export interface IGroupedTasks {
  _id: string;
  tasks: ITaskDocument[];
  total_time: number;
}
