import { PlusCircle } from '../components/icons/PlusCircle';
import { XCircle } from '../components/icons/XCircle';
import { useGetClients } from '../hooks/useGetClients';

const Clients = () => {
  const { data: clients, isLoading } = useGetClients();

  if (isLoading) {
    <div>Loading</div>;
  }

  return (
    <div className='Clients'>
      <header>
        <h2>Clients</h2>
        <button className='btn btn-primary'>
          <i>
            <PlusCircle size='1rem' />
          </i>
          Add Client
        </button>
      </header>
      <div className='clients-list'>
        {clients
          ? clients.map((client) => (
              <div className='client-pill'>
                <span>{client.name}</span>
                <span onClick={() => console.log('clicked on tag')}>
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
