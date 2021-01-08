export interface ProjectsGroupByClient {
  _id: string;
  projects: ProjectsAgregation[];
}

export interface ProjectsAgregation {
  _id: string;
  name: string;
  clientName: string;
  estimate: string;
  status: string;
}

export interface IDbProject {
  _id: string;
  name: string;
  client: string;
  estimate: String;
  status: string;
  subprojects: IDbSubproject[];
  company: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IClientProject {
  name: string;
  client: string;
  estimate: String;
  status: string;
  subprojects: IClientSubproject[];
  company: string;
}

interface IClientSubproject {
  name: string;
}

interface IDbSubproject {
  _id: string;
  name: string;
}
