import mongoose, { Schema } from 'mongoose';
import { IClientDocument } from '../interfaces/client';

const ClientSchema: Schema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

const Client = mongoose.model<IClientDocument>(
  'Client',
  ClientSchema,
  'clients'
);

export { Client };
