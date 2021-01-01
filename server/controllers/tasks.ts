import mongoose from "mongoose";
import { Task } from "../models/task";
import { Request, Response } from "express";

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const createTask = async (req: Request, res: Response) => {
  const task = req.body;

  const newTask = new Task(task);

  try {
    const savedTask = await newTask.save();

    res.status(201).json(savedTask);
  } catch (error) {
    res.status(409).json(error);
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id.toString()))
    return res.status(404).send("No post with that id");

  const updatedTask = await Task.findByIdAndUpdate(_id, post, {
    new: true,
  });

  res.json(updatedTask);
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id.toString()))
    return res.status(404).send("No post with that id");

  const deletedTask = await Task.findByIdAndRemove(_id);

  res.json({ message: "Post deleted successfully" });
};

// TODO: Create a endpoint to get all tasks organized by initialDate (or use getTasks for it).
