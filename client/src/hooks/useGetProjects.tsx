import { useQuery } from 'react-query';
import { ProjectsGroupByClient } from '../interfaces/projects';
import { API_URL } from '../utils/api-client';

const getProjects = async () => {
  const res = await fetch(`${API_URL}/projects`).then((res) => res.json());
  return res as ProjectsGroupByClient[];
};

export const useGetProjects = () => {
  return useQuery('projects', getProjects);
};
