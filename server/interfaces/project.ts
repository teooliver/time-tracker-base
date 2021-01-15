import { Document } from 'mongoose';

export interface IProject extends Document {
  name: string;
  client: string;
  color: string;
  estimate: String;
  status: string;
  company: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IProjectsGroupByClient {
  _id: string;
  projects: IProject[];
}
