import React, { FC } from 'react';
import { Listbox, ListboxOption } from '@reach/listbox';
import { useGetClients } from '../../hooks/useGetClients';

interface Props {
  client: string;
  setClient: React.Dispatch<React.SetStateAction<string>>;
}

const ClientsDropdown: FC<Props> = ({ client, setClient }) => {
  const { data: clients } = useGetClients();

  return (
    <>
      <Listbox
        className='client-dropdown'
        aria-labelledby='client-dropdown'
        value={client}
        onChange={setClient}
        data-testid='client-dropdown'
      >
        <ListboxOption value='No Client'>No Client</ListboxOption>
        {clients?.map((client) => (
          <ListboxOption key={client._id} value={client._id}>
            {client.name}
          </ListboxOption>
        ))}
      </Listbox>
    </>
  );
};

export default ClientsDropdown;
