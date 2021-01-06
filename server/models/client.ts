import mongoose, { Schema } from "mongoose";
import { IClient } from "../interfaces/client";

const ClientSchema: Schema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

const Client = mongoose.model<IClient>("Client", ClientSchema, "clients");

export { Client };
