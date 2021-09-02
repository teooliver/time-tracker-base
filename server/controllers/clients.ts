import mongoose from 'mongoose';
import { Client } from '../models/client';
import { Request, Response } from 'express';

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

  console.log('++++>', client);

  const newClient = new Client(client);

  try {
    const savedClient = await newClient.save();
    //also send the 'address' to get the new Client. Ex: /clients/2987492387
    res.status(201).json(savedClient);
  } catch (error) {
    res.status(409).json(error);
  }
};

export const deleteClient = async (req: Request, res: Response) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id.toString()))
    return res.status(404).send('Not a valid id');

  // TODO: Check if the object exits before delete. (This is not working)
  const deletedClient = await Client.findByIdAndRemove(_id);

  res.status(200).json({ message: 'Client deleted successfully' });
};
