import { Document } from 'mongoose';

export interface IClient {
  name: string;
}

export interface IClientDocument extends IClient, Document {
  createdAt: Date;
  updatedAt: Date;
}
