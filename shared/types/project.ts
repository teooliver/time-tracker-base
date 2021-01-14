import { Document, ObjectId } from 'mongoose';

export interface IProject extends Document<ObjectId> {
  name: string;
  client: string;
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
