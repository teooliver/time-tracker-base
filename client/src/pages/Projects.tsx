import { useState } from "react";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import { PlusCircle } from "../components/icons/PlusCircle";
import ProjectsForm from "../components/ProjectsForm";
import { useGetProjects } from "../hooks/useGetProjects";
import { Dot } from "../components/icons/Dot";

const Projects = () => {
  const { data: projects, isLoading, isSuccess, isError } = useGetProjects();

  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <section className='Projects'>
      <header>
        <h2>Projects</h2>
        <button className='add-project-btn' onClick={open}>
          <i>
            <PlusCircle size='1rem' />
          </i>
          Add Project
        </button>
        <Dialog style={{ color: "red" }} isOpen={showDialog} onDismiss={close}>
          <p>My text is red because the style prop got applied to the div</p>
          <ProjectsForm />
          <button onClick={close}>Okay</button>
        </Dialog>
      </header>
      <div>
        <table>
          <colgroup>
            <col width='20%' />
            <col width='20%' />
            <col width='20%' />
            <col width='20%' />
            {/* <col width='50px' />
            <col width='160px' />
            <col width='40%' />
            <col width='55px' /> */}
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
                    <tr>
                      <td
                        className='project-list-item'
                        style={{ color: "red" }}
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
