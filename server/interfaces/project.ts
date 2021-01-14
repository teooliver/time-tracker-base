import { Document } from 'mongoose';

export interface IProject extends Document {
  name: string;
  client: string;
  estimate: String;
  status: string;
  company: string;
}

export interface IProjectsGroupByClient {
  _id: string;
  projects: IProject[];
}
