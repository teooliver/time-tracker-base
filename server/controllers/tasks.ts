import mongoose from "mongoose";
import { Task } from "../models/task";
import { Request, Response } from "express";
import { ITask } from "../interfaces/task";

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const createTask = async (req: Request, res: Response) => {
  let task: ITask = req.body;

  if (!task.project || task.project === "No Project") {
    delete task.project;
  }

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

  console.log(_id, post);

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

export const getTasksGroupedByDate = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$initialTime" } },
          tasks: {
            $push: "$$ROOT",
          },
          totalTime: {
            $sum: {
              $divide: [
                {
                  $subtract: ["$endTime", "$initialTime"],
                },
                1000,
              ],
            },
          },
        },
      },
      {
        $sort: {
          _id: -1,
        },
      },
    ]);

    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json(error);
  }
};
