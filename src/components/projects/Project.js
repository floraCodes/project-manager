import React, { useContext } from "react";
import contextProject from "../../context/projects/contextProject";
import contextTask from "../../context/tasks/contextTask";

const Project = ({ project }) => {
  const contextProjects = useContext(contextProject);
  const { currentProject } = contextProjects;

  const contextTasks = useContext(contextTask);
  const { getTasks } = contextTasks;

  const { name, id } = project;

  const handleClick = id => {
    currentProject(id);
    getTasks(id);
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => handleClick(id)}
      >
        {name}
      </button>
    </li>
  );
};

export default Project;
