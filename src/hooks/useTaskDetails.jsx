import React from "react";

import useTaskContext from "./context/useTaskContext";
import { useMonsterDetails } from "./";

import { TASK_TYPES } from "../constants/types";

const useTaskDetails = () => {
  const { taskState: taskList, dispatch: taskDispatch } = useTaskContext();
  const { damageMonster } = useMonsterDetails();

  const toggleTaskCompletion = (data) => {
    taskDispatch({ type: TASK_TYPES.TOGGLE_COMPLETED, payload: data });
    damageMonster(data.taskDamage);
  };

  return { taskList, toggleTaskCompletion };
};

export default useTaskDetails;
