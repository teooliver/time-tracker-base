import { useMutation, useQuery, useQueryClient } from 'react-query';
import { IClient } from '../interfaces/clients';
import { API_URL } from '../utils/api-client';

const deleteClient = async (id: string) => {
  const res = await fetch(`${API_URL}/clients/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());

  return res as string; // id hex
};

export const useDeleteClient = () => {
  const queryClient = useQueryClient();

  const deleteClientMutation = useMutation(deleteClient, {
    onSuccess: () => {
      queryClient.invalidateQueries('clients');
    },
  });

  return deleteClientMutation;
};
