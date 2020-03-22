import {
  PROJECT_TASKS,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  TASK_STATUS,
  CURRENT_TASK,
  UPDATE_TASK,
  CLEAN_TASK
} from "../../types/index";

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
        tasks: [action.payload, ...state.tasks],
        taskError: false
      };
    case VALIDATE_TASK:
      return {
        ...state,
        taskError: true
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    case TASK_STATUS:
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? action.payload : task
        )
      };
    case CURRENT_TASK:
      return {
        ...state,
        currentTask: action.payload
      };
    case CLEAN_TASK:
      return {
        ...state,
        currentTask: null
      };
    default:
      return state;
  }
};
