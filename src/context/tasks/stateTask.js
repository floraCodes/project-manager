import React, { useReducer } from "react";
import ContextTask from "./contextTask";
import ReducerTask from "./reducerTask";
import { PROJECT_TASKS, ADD_TASK } from "../../types";

const StateTask = props => {
  // defino state inicial, que siempre es un objecto
  const initialState = {
    tasks: [
      { name: "Choose Platform", status: true, projectId: 1 },
      { name: "Choose Color Palette", status: false, projectId: 2 },
      { name: "Choose Hosting", status: false, projectId: 3 },
      { name: "Choose Payment Getaway", status: true, projectId: 4 },
      { name: "Choose Platform", status: true, projectId: 4 },
      { name: "Choose Color Palette", status: false, projectId: 3 },
      { name: "Choose Hosting", status: false, projectId: 2 },
      { name: "Choose Payment Getaway", status: true, projectId: 1 }
    ],
    projectTasks: []
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
    dispatch({
      type: ADD_TASK,
      payload: task
    });
  };

  return (
    <ContextTask.Provider
      value={{
        tasks: state.tasks,
        projectTasks: state.projectTasks,
        getTasks,
        addTask
      }}
    >
      {props.children}
    </ContextTask.Provider>
  );
};

export default StateTask;
