import mongoose, { Schema } from 'mongoose';
import { IClientDocument } from '../interfaces/client';

const ClientSchema: Schema = new Schema(
  {
    name: String,
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

const Client = mongoose.model<IClientDocument>(
  'Client',
  ClientSchema,
  'clients'
);

export { Client };
