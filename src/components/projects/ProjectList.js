import React, { useContext, useEffect } from "react";
import Project from "./Project";
import contextProject from "../../context/projects/contextProject";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ProjectList = () => {
  const contextProjects = useContext(contextProject);
  const { projects, getProjects } = contextProjects;

  // obtener proyectos cuando carga el componente
  useEffect(() => {
    getProjects();
  }, []);

  if (projects.length === 0)
    return <p>No projects avaliable. Create a project!</p>;

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {projects.map(project => (
          <CSSTransition key={project.id} timeout={300} classNames="proyecto">
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ProjectList;
