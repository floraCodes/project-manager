import React, { useState, useContext } from "react";
import contextProject from "../../context/projects/contextProject";

const NewProject = () => {
  // obtener el state del form
  const contextProjects = useContext(contextProject);
  const { form, formError, addProject, showForm, showError } = contextProjects;

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
    if (!name) {
      showError();
      return;
    }

    //update state
    addProject(project);
    //restart form
    setProject({
      name: ""
    });
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
      {formError ? (
        <p className="mensaje error">Name of project cannot be empty</p>
      ) : null}
    </>
  );
};

export default NewProject;
