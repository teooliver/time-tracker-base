import { Document } from 'mongoose';

export interface IClient {
  name: string;
}

export interface IClientDocument extends IClient, Document {
  created_at: Date;
  updated_at: Date;
}
