//Task format for the Task Document we get back from the db after agregation.
export interface IDbTask {
  _id: string;
  name: string;
  project?: string;
  projectColor?: string;
  client: string;
  timeInSeconds: number;
  initialTime: Date | null;
  endTime: Date | null;
}

export interface GroupedTasks {
  _id: string;
  tasks: IDbTask[];
  totalTime: number;
}
