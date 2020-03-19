import React, { useContext, useEffect } from "react";
import Project from "./Project";
import contextProject from "../../context/projects/contextProject";

const ProjectList = () => {
  const contextProjects = useContext(contextProject);
  const { projects, getProjects } = contextProjects;

  // obtener proyectos cuando carga el componente
  useEffect(() => {
    getProjects();
  }, []);

  if (projects.length === 0) return null;

  return (
    <ul className="listado-proyectos">
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ProjectList;
