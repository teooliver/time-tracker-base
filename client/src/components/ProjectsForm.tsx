import React, { useState } from "react";

const ProjectsForm = () => {
  const [name, setName] = useState("");
  const [client, setClient] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className='ProjectsForm' onSubmit={(e) => handleSubmit(e)}>
      <input
        name='name'
        id='name'
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name='client'
        id='client'
        type='text'
        value={client}
        onChange={(e) => setClient(e.target.value)}
      />
    </form>
  );
};

export default ProjectsForm;
