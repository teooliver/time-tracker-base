import { QueryClient } from 'react-query';
import { API_URL } from './api-client';

export const seedData = (queryClient: QueryClient): void => {
  try {
    fetch(`${API_URL}/seed/clients`)
      .then((_res) => fetch(`${API_URL}/seed/projects`))
      .then((_res) => queryClient.invalidateQueries('projects'))
      .then((_res) => fetch(`${API_URL}/seed/tasks`))
      .then((_res) => queryClient.invalidateQueries('tasks'))
      .then((_res) => queryClient.invalidateQueries('clients'));
  } catch (error) {
    console.log(error);
  }
};

export const removeAllData = (queryClient: QueryClient): void => {
  try {
    fetch(`${API_URL}/seed/remove`)
      .then((_res) => queryClient.invalidateQueries('projects'))
      .then((_res) => queryClient.invalidateQueries('tasks'));
  } catch (error) {
    console.log(error);
  }
};
