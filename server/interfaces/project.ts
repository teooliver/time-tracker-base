import { Document } from 'mongoose';

interface IProject {
  name: string;
  client: string;
  color: string;
  estimate: String;
  status: string;
  company: string;
}

export interface IProjectDocument extends IProject, Document {
  createdAt: Date;
  updatedAt: Date;
}

export interface IProjectsGroupByClient {
  _id: string;
  projects: IProjectDocument[];
}
