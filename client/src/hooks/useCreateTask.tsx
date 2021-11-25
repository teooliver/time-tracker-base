import { useMutation, useQueryClient } from 'react-query';
import { IDbTask } from '../interfaces/task';
import { API_URL } from '../utils/api-client';

export interface TaskCreate {
  name?: string;
  project?: string;
  initial_time?: Date | null;
  end_time?: Date | null;
}

const createTask = async (newTask: TaskCreate) => {
  if (newTask.project === '' || newTask.project === 'No Project') {
    delete newTask.project;
  }

  const res = await fetch(`${API_URL}/tasks`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTask),
  }).then((res) => res.json());

  return res as IDbTask;
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  const createTaskMutation = useMutation(createTask, {
    onSuccess: () => {
      queryClient.invalidateQueries('tasks');
    },
  });

  return createTaskMutation;
};
