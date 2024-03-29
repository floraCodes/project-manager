import React, { useContext, useState, useEffect } from "react";
import contextProject from "../../context/projects/contextProject";
import contextTask from "../../context/tasks/contextTask";

const TaskForm = () => {
  const contextProjects = useContext(contextProject);
  const { project } = contextProjects;

  const contextTasks = useContext(contextTask);
  const {
    currentTask,
    taskError,
    addTask,
    taskValidation,
    getTasks,
    updateTask,
    cleanCurrentTask
  } = contextTasks;

  // Effect que detecta SI hay una tarea seleccionada
  useEffect(() => {
    if (currentTask) {
      setTask(currentTask);
    } else {
      setTask({
        name: ""
      });
    }
  }, [currentTask]);

  //state del form
  const [task, setTask] = useState({
    name: ""
  });
  const { name } = task;
  if (!project) return null;

  const [currentProject] = project;

  //leer valores del form
  const handleChange = e => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    //validar
    if (name.trim() === "") {
      taskValidation();
      return;
    }
    //checkear si estan editando o agregando
    if (!currentTask) {
      //estan agregando una tarea nueva
      //seteamos el id del proyecto en la tarea igual al id del proyecto que el usuario clickeo
      task.projectId = currentProject.id;
      //seteamos el estado inicial como incompleto (false)
      task.status = false;
      //agregar nueva tarea al state
      addTask(task);
    } else {
      //estan actualizando la tarea
      updateTask(task);
      cleanCurrentTask();
    }

    //obtener las tareas del proyecto actual
    getTasks(currentProject.id);

    //reinicial el form
    setTask({ name: "" });
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
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value={currentTask ? "Edit Task" : "Add Task"}
          />
        </div>
      </form>
      {taskError ? <p className="mensaje error">Please enter a name.</p> : null}
    </div>
  );
};

export default TaskForm;
