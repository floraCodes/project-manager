import React, { useReducer } from "react";
import contextProject from "./contextProject";
import reducerProject from "./reducerProject";
import { PROJECT_FORM } from "../../types/index";

const StateProject = props => {
  const initialState = {
    form: false
  };

  const [state, dispatch] = useReducer(reducerProject, initialState);

  const showForm = () => {
    dispatch({
      type: PROJECT_FORM
    });
  };
  return (
    <contextProject.Provider
      value={{
        form: state.form,
        showForm
      }}
    >
      {props.children}
    </contextProject.Provider>
  );
};

export default StateProject;
