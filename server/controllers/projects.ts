import mongoose from "mongoose";
import { Project } from "../models/project";
import { Request, Response } from "express";

export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await Project.find();

    res.status(200).json(projects);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const createProject = async (req: Request, res: Response) => {
  const project = req.body;

  const newProject = new Project(project);

  try {
    const savedProject = await newProject.save();

    res.status(201).json(savedProject);
  } catch (error) {
    res.status(409).json(error);
  }
};
