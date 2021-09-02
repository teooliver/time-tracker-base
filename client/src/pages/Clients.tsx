import { PlusCircle } from '../components/icons/PlusCircle';
import { XCircle } from '../components/icons/XCircle';
import { useGetClients } from '../hooks/useGetClients';
import { useState } from 'react';
import Dialog from '@reach/dialog';
import CreateClientForm from '../components/CreateClientForm/CreateClientForm';
import { useDeleteClient } from '../hooks/useDeleteClient';

const Clients = () => {
  const { data: clients, isLoading } = useGetClients();
  const deleteClientMutation = useDeleteClient();

  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  if (isLoading) {
    <div>Loading</div>;
  }

  return (
    <div className='Clients'>
      <header>
        <h2>Clients</h2>
        <button className='btn btn-primary' onClick={open}>
          <i>
            <PlusCircle size='1rem' />
          </i>
          Add Client
        </button>
        <Dialog
          className='project-form-modal'
          // style={{ color: 'red' }}
          isOpen={showDialog}
          onDismiss={close}
        >
          <h2>Create New Client</h2>
          <CreateClientForm />
          <button className='close-btn' onClick={close}>
            X
          </button>
        </Dialog>
      </header>
      <div className='clients-list'>
        {clients
          ? clients.map((client) => (
              <div className='client-pill'>
                <span>{client.name}</span>
                <span onClick={() => deleteClientMutation.mutate(client._id)}>
                  <XCircle size='1rem' />
                </span>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Clients;
