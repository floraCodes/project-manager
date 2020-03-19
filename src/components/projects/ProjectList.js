import React from "react";
import Project from "./Project";

const ProjectList = () => {
  const projects = [
    { name: "Online Store" },
    { name: "Web Design" },
    { name: "Another Project" }
  ];
  return (
    <ul className="listado-proyectos">
      {projects.map(project => (
        <Project project={project} />
      ))}
    </ul>
  );
};

export default ProjectList;
