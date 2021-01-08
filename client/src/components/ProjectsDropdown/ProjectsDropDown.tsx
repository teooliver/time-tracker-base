import { FC } from "react";
import { useGetProjects } from "../../hooks/useGetProjects";

interface Props {
  setSelectedProject: React.Dispatch<React.SetStateAction<string>>;
  setIsProjectDropwdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectsDropDown: FC<Props> = ({
  setSelectedProject,
  setIsProjectDropwdownOpen,
}) => {
  const { data: projects, isLoading, isSuccess, isError } = useGetProjects();

  const handleSelection = (projectName: string) => {
    setSelectedProject(projectName);
    setIsProjectDropwdownOpen(false);
  };

  return (
    <div className='ProjectsDown'>
      <input type='text' placeholder='Search Projects' />
      <div
        className='project-list-item'
        onClick={() => handleSelection("No Project")}
      >
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
                    onClick={() => handleSelection(project._id)}
                  >
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
