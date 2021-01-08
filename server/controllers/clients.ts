import mongoose from "mongoose";
import { Client } from "../models/client";
import { Request, Response } from "express";

export const getClients = async (req: Request, res: Response) => {
  try {
    const clients = await Client.find();

    res.status(200).json(clients);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const createClient = async (req: Request, res: Response) => {
  const client = req.body;

  const newClient = new Client(client);

  try {
    const savedClient = await newClient.save();

    res.status(201).json(savedClient);
  } catch (error) {
    res.status(409).json(error);
  }
};
