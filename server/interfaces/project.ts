import { Document } from "mongoose";

export interface IProject extends Document {
  name: string;
  client: string;
  estimate: String;
  status: string;
  subprojects: Subproject[];
  company: string;
}

interface Subproject {
  _id: string;
  name: string;
}

export interface IProjectsGroupByClient {
  _id: string;
  projects: IProject[];
}
