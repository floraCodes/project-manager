import React from "react";

const TaskForm = () => {
  return (
    <div className="form">
      <form>
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
