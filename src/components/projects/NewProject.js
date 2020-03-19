import React, { useState } from "react";

const NewProject = () => {
  const [project, setProject] = useState({
    name: ""
  });

  const { name } = project;

  const handleChange = e => {
    const { name, value } = e.target;
    setProject({
      ...project,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    //validar

    //update state

    //restart form
  };

  return (
    <>
      <button type="button" className=" btn btn-block btn-primario">
        New Project
      </button>
      <form className="formulario-nuevo-proyecto" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name of the project"
          className="input-text"
          value={name}
          onChange={handleChange}
        />
        <input
          type="submit"
          className="btn btn-block btn-primario"
          value="Add Project"
        />
      </form>
    </>
  );
};

export default NewProject;
