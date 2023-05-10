import { TASK_TYPES } from "../constants/types";

const taskReducer = (state = {}, action) => {
   // console.log("taskReducer => ", { state, action });
   switch (action.type) {
      case TASK_TYPES.SET_TASKLIST:
         return action.payload;
      case TASK_TYPES.UPDATE_TASK:
         const updatedTasklist = state.tasklist.map((x) =>
            x.id === action.payload.id ? action.payload : x
         );
         return { ...state, tasklist: updatedTasklist };
      default:
         return state;
   }
};

export default taskReducer;
