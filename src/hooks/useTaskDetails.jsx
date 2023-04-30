import React from "react";

import useTaskContext from "./context/useTaskContext";

import TASK_TYPES from "../constants/types/taskTypes";

const useTaskDetails = () => {
  const { taskState: taskList, dispatch: taskDispatch } = useTaskContext();

  const toggleTaskCompletion = (data) => {
    taskDispatch({ type: TASK_TYPES.TOGGLE_COMPLETED, payload: data });
  };

  return { taskList, toggleTaskCompletion };
};

export default useTaskDetails;
