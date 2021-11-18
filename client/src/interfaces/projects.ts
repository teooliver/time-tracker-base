export interface ProjectsGroupByClient {
  _id: string;
  projects: ProjectAfterAgregation[];
}

export interface ProjectAfterAgregation {
  _id: string;
  name: string;
  color: string;
  client_name: string;
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
  created_at: Date;
  updated_at: Date;
}
