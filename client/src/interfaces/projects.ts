export interface ProjectsGroupByClient {
  _id: string;
  projects: ProjectAfterAgregation[];
}

export interface ProjectAfterAgregation {
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
