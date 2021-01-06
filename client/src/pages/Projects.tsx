import React from "react";
import { useQuery } from "react-query";
import { fetchProjects } from "../utils/api-client";

const Projects = () => {
  const { data: projects, isLoading, isSuccess, isError } = useQuery(
    "projects",
    fetchProjects
  );

  return (
    <section className='Projects'>
      <button>Add Project</button>
      <div>ProjectList</div>
    </section>
  );
};

export default Projects;
