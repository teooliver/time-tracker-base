import { useMutation, useQueryClient } from 'react-query';
import { IDbTask } from '../interfaces/task';
import { API_URL } from '../utils/api-client';

const updateTask = async (task: Partial<IDbTask>) => {
  const res = await fetch(`${API_URL}/tasks/${task._id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  }).then((res) => res.json());

  return res as IDbTask;
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();
  const updateTaskMutation = useMutation(updateTask, {
    onSuccess: () => {
      queryClient.invalidateQueries('tasks');
    },
  });
  return updateTaskMutation;
};
