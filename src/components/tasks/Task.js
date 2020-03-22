import React, { useContext } from "react";
import contextProject from "../../context/projects/contextProject";
import contextTask from "../../context/tasks/contextTask";

const Task = ({ task }) => {
  const { name, status, id } = task;

  const contextProjects = useContext(contextProject);
  const { project } = contextProjects;

  const [currentProject] = project;

  const contextTasks = useContext(contextTask);
  const {
    deleteTask,
    getTasks,
    changeTaskStatus,
    setCurrentTask
  } = contextTasks;

  const handleDelete = id => {
    deleteTask(id);
    getTasks(currentProject.id);
  };

  const handleStatus = task => {
    if (task.status) {
      task.status = false;
    } else {
      task.status = true;
    }
    changeTaskStatus(task);
  };

  const handleEdit = task => {
    setCurrentTask(task);
  };

  return (
    <li className="tarea sombra">
      <p>{name}</p>

      <div className="estado">
        {status ? (
          <button
            type="button"
            className="complete"
            onClick={() => handleStatus(task)}
          >
            Complete
          </button>
        ) : (
          <button
            type="button"
            className="incomplete"
            onClick={() => handleStatus(task)}
          >
            Incomplete
          </button>
        )}
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => handleEdit(task)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
