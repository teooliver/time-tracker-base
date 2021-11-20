//Task format for the Task Document we get back from the db after agregation.
export interface IDbTask {
  _id: string;
  name: string;
  project?: string;
  project_color?: string;
  client: string;
  initial_time: Date | null;
  end_time: Date | null;
}

export interface GroupedTasks {
  _id: string;
  tasks: IDbTask[];
  total_time: number;
}
