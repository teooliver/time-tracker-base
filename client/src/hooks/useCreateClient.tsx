import { useMutation, useQueryClient } from 'react-query';
import { IClient } from '../interfaces/clients';
import { API_URL } from '../utils/api-client';

const createClient = async (newClient: string) => {
  const res = await fetch(`${API_URL}/clients`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: newClient }),
  }).then((res) => res.json());

  return res as IClient;
};

export const useCreateClient = () => {
  const queryClient = useQueryClient();

  const createClienttMutation = useMutation(createClient, {
    onSuccess: () => {
      queryClient.invalidateQueries('clients');
    },
  });

  return createClienttMutation;
};
