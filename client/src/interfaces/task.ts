export interface IDbTask {
  _id: string;
  name: string;
  project: string;
  projectColor: string;
  client: string;
  timeInSeconds: number;
  initialTime: Date | null;
  endTime: Date | null;
}

export interface IClientTask {
  name?: string;
  project?: string;
  timeInSeconds?: number;
  initialTime?: Date | null;
  endTime?: Date | null;
}

export interface GroupedTasks {
  _id: string;
  tasks: IDbTask[];
  totalTime: number;
}
