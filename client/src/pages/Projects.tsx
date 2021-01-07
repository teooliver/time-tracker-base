import { useState } from "react";
import { useQuery } from "react-query";
import { fetchProjects } from "../utils/api-client";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import { PlusCircle } from "../components/icons/PlusCircle";

const Projects = () => {
  const { data: projects, isLoading, isSuccess, isError } = useQuery(
    "projects",
    fetchProjects
  );

  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <section className='Projects'>
      <header>
        <button className='add-project-btn' onClick={open}>
          <i>
            <PlusCircle size='1rem' />
          </i>{" "}
          Add Project
        </button>
        <Dialog style={{ color: "red" }} isOpen={showDialog} onDismiss={close}>
          <p>My text is red because the style prop got applied to the div</p>{" "}
          <button onClick={close}>Okay</button>
        </Dialog>
      </header>
      {isSuccess && projects
        ? projects.map((project) => <div>{project.name}</div>)
        : null}
      {isError && <div>No projects available</div>}
    </section>
  );
};

export default Projects;
