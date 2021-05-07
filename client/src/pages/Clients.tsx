import { PlusCircle } from '../components/icons/PlusCircle';
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
      <div>
        {clients ? clients.map((client) => <p>{client.name}</p>) : null}
      </div>
    </div>
  );
};

export default Clients;
