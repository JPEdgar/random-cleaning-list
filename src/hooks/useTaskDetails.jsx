import React from "react";

import useTaskContext from "./context/useTaskContext";
import { useMonsterDetails } from "./";

import { TASK_TYPES } from "../constants/types";

const useTaskDetails = () => {
  const { taskState: taskList, dispatch: taskDispatch } = useTaskContext();
  const { damageMonster, healMonster } = useMonsterDetails();

  const toggleTaskCompletion = (data) => {
    if (data.completed) {
      taskDispatch({ type: TASK_TYPES.TOGGLE_COMPLETED, payload: data });
      healMonster(data.taskDamage);
    } else {
      taskDispatch({ type: TASK_TYPES.TOGGLE_COMPLETED, payload: data });
      damageMonster(data.taskDamage);
    }

  };

  return { taskList, toggleTaskCompletion };
};

export default useTaskDetails;
