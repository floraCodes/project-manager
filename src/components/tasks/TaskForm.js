import React, { useContext, useState } from "react";
import contextProject from "../../context/projects/contextProject";

const TaskForm = () => {
  const contextProjects = useContext(contextProject);
  const { project } = contextProjects;

  const [task, setTask] = useState({
    name: ""
  });

  if (!project) return null;

  const [currentProject] = project;

  const handleSubmit = e => {
    e.preventDefault();

    //validar

    //pasar validacion

    //agregar nueva tarea al state

    //reinicial el form
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Task Name..."
            name="name"
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Add Task"
          />
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
