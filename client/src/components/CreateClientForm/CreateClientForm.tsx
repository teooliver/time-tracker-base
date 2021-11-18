import React, { useState } from 'react';
import { useCreateClient } from '../../hooks/useCreateClient';

const CreateClientForm = () => {
  const [clientName, setClientName] = useState<string>('');

  const createClientMutation = useCreateClient();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleCreateClient = () => {
    createClientMutation.mutate(clientName);
  };

  return (
    <form className='CreateClientForm' onSubmit={(e) => handleSubmit(e)}>
      <div>
        <input
          placeholder='Client Name'
          name='name'
          id='name'
          type='text'
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />
      </div>
      <button className='btn btn-primary' onClick={handleCreateClient}>
        Create Client
      </button>
    </form>
  );
};

export default CreateClientForm;
