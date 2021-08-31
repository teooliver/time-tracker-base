import mongoose from 'mongoose';
import { Project } from '../models/project';
import { Request, Response } from 'express';
import { Client } from '../models/client';
import { IProjectsGroupByClient } from '../interfaces/project';

export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects: IProjectsGroupByClient[] = await Project.aggregate([
      {
        $lookup: {
          from: 'clients',
          localField: 'client',
          foreignField: '_id',
          as: 'clientName',
        },
      },
      {
        $sort: {
          updatedAt: -1,
        },
      },
      {
        $project: {
          _id: '$_id',
          name: '$name',
          color: '$color',
          clientName: { $arrayElemAt: ['$clientName.name', 0] },
          estimate: '$estimate',
          status: '$status',
          subprojects: '$subprojects',
        },
      },
      {
        $group: {
          _id: '$clientName',
          projects: { $push: '$$ROOT' },
        },
      },
    ]);

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
    //also send the 'address' to get the new Project. Ex: /projects/2987492387
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(409).json(error);
  }
};
