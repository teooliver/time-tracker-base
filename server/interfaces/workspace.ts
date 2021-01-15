import { Document } from 'mongoose';
import { IClient } from './client';
import { IProject } from './project';
import { ITask } from './task';

export interface IWorkSpace extends Document {
  name: string;
  clients: IClient[];
  projects: IProject[];
  tasks: ITask[];
  createdAt: Date;
  updatedAt: Date;
}
