import React, { useState, useContext } from "react";
import contextProject from "../../context/projects/contextProject";

const NewProject = () => {
  // obtener el state del form
  const contextProjects = useContext(contextProject);
  const { form, showForm } = contextProjects;

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

  const handleClick = () => {
    showForm();
  };

  return (
    <>
      <button
        type="button"
        className=" btn btn-block btn-primario"
        onClick={handleClick}
      >
        New Project
      </button>
      {form ? (
        <form className="form-nuevo-proyecto" onSubmit={handleSubmit}>
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
      ) : null}
    </>
  );
};

export default NewProject;
