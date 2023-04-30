import { TASK_TYPES } from "../constants/types";

const taskReducer = (state, action) => {
  // console.log("taskReducer => ", { state, action });
  switch (action.type) {
    case TASK_TYPES.TOGGLE_COMPLETED:
      const returnState = state.map((x) =>
        x.id === action.payload.id
          ? { ...x, completed: !action.payload.completed }
          : x
      );    
      return returnState;
    default:
      return state;
  }
};

export default taskReducer;
