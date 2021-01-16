import React, { useState } from 'react';

const ProjectsForm = () => {
  const [name, setName] = useState('');
  const [client, setClient] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className='ProjectsForm' onSubmit={(e) => handleSubmit(e)}>
      <div>
        <input
          placeholder='Project Name'
          name='name'
          id='name'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className='project-color'></span>
      </div>
      <input
        placeholder='Client'
        name='client'
        id='client'
        type='text'
        value={client}
        onChange={(e) => setClient(e.target.value)}
      />
      <input
        placeholder='Workspace'
        name='client'
        id='client'
        type='text'
        value={client}
        onChange={(e) => setClient(e.target.value)}
      />
      <button className='btn btn-primary'>Create Project</button>
    </form>
  );
};

export default ProjectsForm;
