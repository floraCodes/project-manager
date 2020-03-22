import projectContext from "../projects/contextProject";
import { PROJECT_TASKS, ADD_TASK } from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case PROJECT_TASKS:
      return {
        ...state,
        projectTasks: state.tasks.filter(
          task => task.projectId === action.payload
        )
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state, action.payload]
      };
    default:
      return state;
  }
};
