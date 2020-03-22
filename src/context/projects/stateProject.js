import React, { useReducer } from "react";
import contextProject from "./contextProject";
import reducerProject from "./reducerProject";
import { v4 as uuidv4 } from "uuid";
import {
  PROJECT_FORM,
  GET_PROJECTS,
  ADD_PROJECT,
  FORM_VALIDATION,
  CURRENT_PROJECT,
  DELETE_PROJECT
} from "../../types/index";

const StateProject = props => {
  const projects = [
    { id: 1, name: "Online Store" },
    { id: 2, name: "Web Design" },
    { id: 3, name: "Another Project" }
  ];

  const initialState = {
    projects: [],
    form: false,
    formError: false,
    project: null
  };

  const [state, dispatch] = useReducer(reducerProject, initialState);

  const showForm = () => {
    dispatch({
      type: PROJECT_FORM
    });
  };

  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects
    });
  };

  const addProject = project => {
    project.id = uuidv4();
    //agergar proyecto al state
    dispatch({
      type: ADD_PROJECT,
      payload: project
    });
  };
  // Validar formulario
  const showError = () => {
    dispatch({
      type: FORM_VALIDATION
    });
  };

  //selecciona el proyecto
  const currentProject = projectId => {
    dispatch({
      type: CURRENT_PROJECT,
      payload: projectId
    });
  };

  const deleteProject = projectId => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId
    });
  };

  return (
    <contextProject.Provider
      value={{
        projects: state.projects,
        form: state.form,
        formError: state.formError,
        project: state.project,
        addProject,
        getProjects,
        showForm,
        showError,
        currentProject,
        deleteProject
      }}
    >
      {props.children}
    </contextProject.Provider>
  );
};

export default StateProject;
