import { Document } from "mongoose";

export interface IProject extends Document {
  name: string;
  subprojects: Subproject[];
  company: string;
}

interface Subproject {
  _id: string;
  name: string;
}
