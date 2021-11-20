import mongoose from 'mongoose';
import { Client } from '../models/client';
import { Project } from '../models/project';
import { Request, Response } from 'express';
import faker from 'faker';
import { Task } from '../models/task';
import { IClient } from '../interfaces/client';

export const PROJECT_COLORS = [
  '#61e294ff',
  '#7bcdbaff',
  '#9799caff',
  '#bd93d8ff',
  '#b47aeaff',
  '#d3d5d4ff',
  '#a2c5acff',
  '#9db5b2ff',
  '#878e99ff',
  '#7f6a93ff',
];

export const seedClients = async (req: Request, res: Response) => {
  const createClient = () => {
    let fakeClient: IClient = {
      name: faker.company.companyName(),
    };
    return fakeClient;
  };

  const generateClientsData = (amount: number) => {
    let clients = [];
    for (let i: number = 0; i < amount; i++) {
      clients.push(createClient());
    }
    return clients;
  };

  const clientsList = generateClientsData(5);

  try {
    await Client.deleteMany();
    await Project.deleteMany();
    await Task.deleteMany();

    // @ts-ignore Monggose not playing nice with Model.create and typescript
    const savedClients = await Client.create(clientsList);

    res.status(201).json(savedClients);
  } catch (error) {
    res.status(409).json(error);
  }
};

export const seedProjects = async (req: Request, res: Response) => {
  const createProject = (clientsIds: string[]) => {
    let fakeProject = {
      name: faker.lorem.words(2),
      client: clientsIds[Math.floor(Math.random() * clientsIds.length)],
      estimate: '',
      status: '',
      color: PROJECT_COLORS[Math.floor(Math.random() * PROJECT_COLORS.length)],
      company: 'Company Test',
    };
    return fakeProject;
  };

  const generateProjectData = (amount: number, clientsId: string[]) => {
    let projects = [];
    for (let i: number = 0; i < amount; i++) {
      projects.push(createProject(clientsId));
    }
    return projects;
  };

  try {
    await Project.deleteMany();
    await Task.deleteMany();

    const clientsIds = await Client.distinct('_id');
    const projecstList = generateProjectData(5, clientsIds);
    // @ts-ignore Monggose not playing nice with Model.create and typescript
    const savedProjects = await Project.create(projecstList);

    res.status(201).json(savedProjects);
  } catch (error) {
    res.status(409).json(error);
  }
};

export const seedTasks = async (req: Request, res: Response) => {
  const today = new Date();
  const fiveDaysAgo = today.setDate(today.getDate() - 5);

  const createTask = (projectsIds: string[]) => {
    const timeInSecondsOptions = [3600, 1800, 5400, 3450, 1600, 1954, 7200];
    const randomTimeInSeconds =
      timeInSecondsOptions[
        Math.floor(Math.random() * timeInSecondsOptions.length)
      ];

    const fakeInitialDate = faker.date.between(
      new Date(fiveDaysAgo),
      new Date()
    );

    const fakeEndDate = new Date(
      fakeInitialDate.getTime() + randomTimeInSeconds * 1000
    );

    let fakeTask = {
      name: faker.lorem.words(3),
      initial_time: fakeInitialDate,
      end_time: fakeEndDate,
      project: projectsIds[Math.floor(Math.random() * projectsIds.length)],
    };

    return fakeTask;
  };

  const generateTaskData = (amount: number, projectsIds: string[]) => {
    let tasks = [];
    for (let i: number = 0; i < amount; i++) {
      tasks.push(createTask(projectsIds));
    }
    return tasks;
  };

  try {
    await Task.deleteMany();

    const projectsIds = await Project.distinct('_id');
    const projecstList = generateTaskData(20, projectsIds);
    // @ts-ignore Monggose not playing nice with Model.create and typescript
    const savedProjects = await Task.create(projecstList);

    res.status(201).json(savedProjects);
  } catch (error) {
    res.status(409).json(error);
  }
};

export const removeAllData = async (req: Request, res: Response) => {
  try {
    await Client.deleteMany();
    await Project.deleteMany();
    await Task.deleteMany();

    res
      .status(200)
      .json(
        'Removed all documents from clients, projects and tasks collections'
      );
  } catch (error) {
    res.status(404).json(error);
  }
};
