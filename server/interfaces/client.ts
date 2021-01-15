import { Document } from 'mongoose';

export interface IClient extends Document {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
