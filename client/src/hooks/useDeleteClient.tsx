import { useMutation, useQuery, useQueryClient } from 'react-query';
import { IClient } from '../interfaces/clients';
import { API_URL } from '../utils/api-client';

const deleteClient = async (newClient: string) => {
  const res = await fetch(`${API_URL}/clients`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: newClient }),
  }).then((res) => res.json());

  return res as IClient;
};

export const useDeleteClient = () => {
  const queryClient = useQueryClient();

  const createClienttMutation = useMutation(deleteClient, {
    onSuccess: () => {
      queryClient.invalidateQueries('clients');
    },
  });

  return createClienttMutation;
};
