import { Project } from '../models/project';
import { Request, Response } from 'express';
import { IProjectsGroupedByClient } from '../interfaces/project';

export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects: IProjectsGroupedByClient[] = await Project.aggregate([
      {
        $lookup: {
          from: 'clients',
          localField: 'client',
          foreignField: '_id',
          as: 'client_name',
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
          client_name: { $arrayElemAt: ['$client_name.name', 0] },
          estimate: '$estimate',
          status: '$status',
          subprojects: '$subprojects',
        },
      },
      {
        $group: {
          _id: '$client_name',
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
