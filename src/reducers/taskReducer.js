import { TASK_TYPES } from "../constants/types";

const taskReducer = (state = {}, action) => {
  console.log("taskReducer => ", { state, action });
  switch (action.type) {
    case TASK_TYPES.SET_TASKLIST:
      return action.payload;
    case TASK_TYPES.UPDATE_TASK:
      // return state.map((x) => {
      //   return x.id === action.payload.id ? action.payload : x;
      // });
      return state
    default:
      return state;
  }
};

export default taskReducer;
