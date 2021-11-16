import { Document } from 'mongoose';
import { IClientDocument } from './client';
import { IProjectDocument } from './project';
import { ITaskDocument } from './task';

export interface IWorkSpace extends Document {
  name: string;
  clients: IClientDocument[];
  projects: IProjectDocument[];
  tasks: ITaskDocument[];
  created_at: Date;
  updated_at: Date;
}
