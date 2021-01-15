export interface ProjectsGroupByClient {
  _id: string;
  projects: ProjectAgregation[];
}

// TODO: Find better name for ProjectAgregation
export interface ProjectAgregation {
  _id: string;
  name: string;
  color: string;
  clientName: string;
  estimate: string;
  status: string;
}

export interface IDbProject {
  _id: string;
  name: string;
  client: string;
  color: string;
  estimate: String;
  status: string;
  company: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IClientProject {
  name: string;
  client: string;
  color: string;
  estimate: String;
  status: string;
  company: string;
}
