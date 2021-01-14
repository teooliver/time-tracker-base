import { Document, ObjectId } from 'mongoose';
import { IClient } from './client';
import { IProject } from './project';
import { ITask } from './task';

export interface IWorkSpace extends Document<ObjectId> {
  name: string;
  clients: IClient[];
  projects: IProject[];
  tasks: ITask[];
  createdAt: Date;
  updatedAt: Date;
}
