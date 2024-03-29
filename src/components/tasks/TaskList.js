import React, { useContext } from "react";
import Task from "./Task";
import contextProject from "../../context/projects/contextProject";
import contextTask from "../../context/tasks/contextTask";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const TaskList = () => {
  const contextProjects = useContext(contextProject);
  const { project, deleteProject } = contextProjects;

  const contextTasks = useContext(contextTask);
  const { projectTasks } = contextTasks;

  if (!project) return <h2>Select a product.</h2>;

  const [currentProject] = project;

  const handleClick = () => {
    deleteProject(currentProject.id);
  };
  return (
    <>
      <h2>Project: {currentProject.name}</h2>
      <ul className="listado-tareas">
        {!projectTasks.length ? (
          <li>No tasks to show</li>
        ) : (
          <TransitionGroup>
            {projectTasks.map(task => (
              <CSSTransition key={task.id} timeout={300} classNames="tarea">
                <Task task={task} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>
      <button type="button" className="btn btn-eliminar" onClick={handleClick}>
        Delete Project &times;
      </button>
    </>
  );
};

export default TaskList;
