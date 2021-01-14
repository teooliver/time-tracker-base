import { Document, ObjectId, Date } from 'mongoose';

export interface IClient extends Document<ObjectId> {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
