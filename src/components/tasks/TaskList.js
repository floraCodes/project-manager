import React from "react";
import Task from "./Task";

const TaskList = () => {
  const tasks = [
    { name: "Choose Platform", status: true },
    { name: "Choose Color Palette", status: false },
    { name: "Choose Hosting", status: false },
    { name: "Choose Payment Getaway", status: true }
  ];

  return (
    <>
      <h2>Project: Online Store</h2>
      <ul className="listado-tareas">
        {!tasks.length ? (
          <li>No tasks to show.</li>
        ) : (
          tasks.map(task => <Task task={task} />)
        )}
      </ul>
      <button type="button" className="btn btn-eliminar">
        Delete Project &times;
      </button>
    </>
  );
};

export default TaskList;
