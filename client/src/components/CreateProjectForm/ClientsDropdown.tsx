import React, { FC } from 'react';
import { Listbox, ListboxOption } from '@reach/listbox';
import { useGetClients } from '../../hooks/useGetClients';

interface Props {
  client: string;
  setClient: React.Dispatch<React.SetStateAction<string>>;
}

const ClientsDropdown: FC<Props> = ({ client, setClient }) => {
  const { data: clients, isLoading, isSuccess, isError } = useGetClients();
  console.log(clients);

  return (
    <div>
      <Listbox
        aria-labelledby='client-dropdown'
        value={client}
        onChange={setClient}
      >
        <ListboxOption value='No Project'>No Project</ListboxOption>
        {clients?.map((client) => (
          <ListboxOption value={client._id}>{client.name}</ListboxOption>
        ))}
      </Listbox>
    </div>
  );
};

export default ClientsDropdown;
