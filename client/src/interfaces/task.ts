export interface IDbTask {
  _id: string;
  name: string;
  timeInSeconds: number;
  initialTime: Date | null;
  endTime: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface IClientTask {
  name?: string;
  timeInSeconds?: number;
  initialTime?: Date | null;
  endTime?: Date | null;
}

export interface GroupedTasks {
  _id: string;
  tasks: IDbTask[];
  totalTime: number;
}
