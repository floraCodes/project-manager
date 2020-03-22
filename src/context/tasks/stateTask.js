import React, { useReducer } from "react";
import ContextTask from "./contextTask";
import ReducerTask from "./reducerTask";
import { v4 as uuidv4 } from "uuid";

import {
  PROJECT_TASKS,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  TASK_STATUS,
  CURRENT_TASK,
  UPDATE_TASK,
  CLEAN_TASK
} from "../../types";

const StateTask = props => {
  // defino state inicial, que siempre es un objecto
  const initialState = {
    tasks: [
      { name: "Choose Platform", status: true, projectId: 1, id: 1 },
      { name: "Choose Color Palette", status: false, projectId: 2, id: 2 },
      { name: "Choose Hosting", status: false, projectId: 3, id: 3 },
      { name: "Choose Payment Getaway", status: true, projectId: 4, id: 4 },
      { name: "Choose Platform", status: true, projectId: 4, id: 5 },
      { name: "Choose Color Palette", status: false, projectId: 3, id: 6 },
      { name: "Choose Hosting", status: false, projectId: 2, id: 7 },
      { name: "Choose Payment Getaway", status: true, projectId: 1, id: 8 }
    ],
    projectTasks: [],
    taskError: false,
    currentTask: null
  };
  //crear dispatch y state
  const [state, dispatch] = useReducer(ReducerTask, initialState);

  // retornar el context
  const getTasks = projectId => {
    dispatch({
      type: PROJECT_TASKS,
      payload: projectId
    });
  };
  // agregar tarea al proyecto seleccionado
  const addTask = task => {
    task.id = uuidv4();
    dispatch({
      type: ADD_TASK,
      payload: task
    });
  };
  // valida y muestra un error si es necesario
  const taskValidation = () => {
    dispatch({
      type: VALIDATE_TASK
    });
  };
  // eliminar tarea por id
  const deleteTask = taskId => {
    dispatch({
      type: DELETE_TASK,
      payload: taskId
    });
  };
  // cambiar el estatus de la tarea
  const changeTaskStatus = task => [
    dispatch({
      type: TASK_STATUS,
      payload: task
    })
  ];
  // extraer una tarea para editar
  const setCurrentTask = task => {
    dispatch({
      type: CURRENT_TASK,
      payload: task
    });
  };

  //edita una tarea
  const updateTask = task => {
    dispatch({
      type: UPDATE_TASK,
      payload: task
    });
  };

  //elimina tarea seleccionada
  const cleanCurrentTask = () => {
    dispatch({
      type: CLEAN_TASK
    });
  };

  return (
    <ContextTask.Provider
      value={{
        tasks: state.tasks,
        projectTasks: state.projectTasks,
        taskError: state.taskError,
        currentTask: state.currentTask,
        getTasks,
        addTask,
        taskValidation,
        deleteTask,
        changeTaskStatus,
        setCurrentTask,
        updateTask,
        cleanCurrentTask
      }}
    >
      {props.children}
    </ContextTask.Provider>
  );
};

export default StateTask;
