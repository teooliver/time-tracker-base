import { useMutation, useQueryClient } from 'react-query';
import { IDbProject } from '../interfaces/projects';
import { API_URL } from '../utils/api-client';

export interface ProjectCreate {
  name: string;
  client?: string;
  estimate?: string;
  status?: string;
  color?: string;
}

const createProject = async (newProject: ProjectCreate) => {
  const res = await fetch(`${API_URL}/projects`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newProject),
  }).then((res) => res.json());

  return res as IDbProject;
};

export const useCreateProject = () => {
  const queryClient = useQueryClient();

  const createProjectMutation = useMutation(createProject, {
    onSuccess: () => {
      queryClient.invalidateQueries('projects');
    },
  });

  return createProjectMutation;
};
