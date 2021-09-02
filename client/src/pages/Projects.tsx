import { useState } from 'react';
import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog';
import { PlusCircle } from '../components/icons/PlusCircle';
import CreateProjectForm from '../components/CreateProjectForm/CreateProjectForm';
import { useGetProjects } from '../hooks/useGetProjects';
import { Dot } from '../components/icons/Dot';

const Projects = () => {
  const { data: projects, isLoading, isSuccess, isError } = useGetProjects();

  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <section className='Projects'>
      <header>
        <h2>Projects</h2>
        <button className='btn btn-primary' onClick={open}>
          <i>
            <PlusCircle size='1rem' />
          </i>
          Add Project
        </button>

        <Dialog
          className='project-form-modal'
          // style={{ color: 'red' }}
          isOpen={showDialog}
          onDismiss={close}
        >
          <h2>Create New Project</h2>
          <CreateProjectForm />
          <button className='close-btn' onClick={close}>
            X
          </button>
        </Dialog>
      </header>
      <div>
        <table>
          <colgroup>
            <col width='20%' />
            <col width='20%' />
            <col width='20%' />
            <col width='20%' />
          </colgroup>
          <thead>
            <tr>
              <th>Project</th>
              <th>Client</th>
              <th>Status</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {isSuccess && projects
              ? projects.map((client) =>
                  client.projects.map((project) => (
                    <tr key={project._id}>
                      <td
                        className='project-list-item'
                        style={{ color: project.color }}
                      >
                        <div>
                          <Dot size='24' />
                          {project.name}
                        </div>
                      </td>
                      <td className='client-name'>{client._id}</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                  ))
                )
              : null}
          </tbody>
        </table>
      </div>
      {isError && <div>No projects available</div>}
    </section>
  );
};

export default Projects;
