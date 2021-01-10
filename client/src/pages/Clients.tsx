import { PlusCircle } from "../components/icons/PlusCircle";

const Clients = () => {
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
    </div>
  );
};

export default Clients;
