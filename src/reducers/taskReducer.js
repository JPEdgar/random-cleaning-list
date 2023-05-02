import { TASK_TYPES } from "../constants/types";

const taskReducer = (state, action) => {
  console.log("taskReducer => ", { state, action });
  switch (action.type) {
    case TASK_TYPES.TOGGLE_COMPLETED:
      const toggleCompletedState = state.taskList.map((x) =>
        x.id === action.payload.id
          ? {
              ...x,
              completed: !action.payload.completed,
              critFlag: action.payload.critFlag,
            }
          : x
      );
      return { ...state, taskList: toggleCompletedState };
    case TASK_TYPES.SET_TASK_LIST:
      return action.payload;
    case TASK_TYPES.UPDATE_TASK:
      const updateTaskState = state.taskList.map((x) =>
        x.id === action.payload.id ? action.payload : x
      );
      return { ...state, taskList: updateTaskState };
    default:
      return state;
  }
};

export default taskReducer;
