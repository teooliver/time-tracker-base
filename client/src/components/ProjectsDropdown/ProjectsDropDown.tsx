import { FC } from "react";
import { useGetProjects } from "../../hooks/useGetProjects";
import { Dot } from "../icons/Dot";
import { ISelectedProject } from "../TimeTracker/Stopwatch";

interface Props {
  setSelectedProject: React.Dispatch<React.SetStateAction<ISelectedProject>>;
  setIsProjectDropwdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectsDropDown: FC<Props> = ({
  setSelectedProject,
  setIsProjectDropwdownOpen,
}) => {
  const { data: projects, isLoading, isSuccess, isError } = useGetProjects();

  const handleSelection = (projectName: ISelectedProject) => {
    setSelectedProject(projectName);
    setIsProjectDropwdownOpen(false);
  };

  return (
    <div className='ProjectsDown'>
      <input
        className='projects-dropdown-search'
        type='text'
        placeholder='Search Projects'
      />
      <div
        className='project-list-item'
        onClick={() =>
          handleSelection({
            id: "",
            name: "No Project",
            client: "",
            color: "white",
          })
        }
      >
        <Dot size='24' />
        No Project
      </div>
      {isSuccess && projects
        ? projects.map((client) => (
            <>
              <div className='client-name'>{client._id}</div>
              <ul>
                {client.projects.map((project) => (
                  <li
                    className='project-list-item'
                    style={{ color: project.color }}
                    onClick={() =>
                      handleSelection({
                        id: project._id,
                        name: project.name,
                        client: project.clientName,
                        color: project.color,
                      })
                    }
                  >
                    <Dot size='24' />
                    {project.name}
                  </li>
                ))}
              </ul>
            </>
          ))
        : null}
    </div>
  );
};

export default ProjectsDropDown;
