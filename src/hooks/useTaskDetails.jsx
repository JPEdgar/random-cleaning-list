import React, { useState, useEffect } from "react";

import useTaskContext from "./context/useTaskContext";
import { useMonsterDetails } from "./";

import { TASK_TYPES } from "../constants/types";

const useTaskDetails = () => {
  const {
    taskState: taskList,
    dispatch: taskDispatch,
    critFlag,
    setCritFlag,
  } = useTaskContext();
  const { damageMonster, healMonster } = useMonsterDetails();

  const toggleTaskCompletion = (data) => {
    const tempCritFlag = critFlag;
    if (data.completed) {
      taskDispatch({ type: TASK_TYPES.TOGGLE_COMPLETED, payload: data });
      healMonster(data.taskDamage, data.critFlag);
    } else {
      taskDispatch({
        type: TASK_TYPES.TOGGLE_COMPLETED,
        payload: { ...data, critFlag: tempCritFlag },
      });
      damageMonster(data.taskDamage, tempCritFlag);
    }
    setCritFlag(false);
  };

  const activateCrit = () => {
    setCritFlag(true);
  };

  return { taskList, toggleTaskCompletion, critFlag, activateCrit };
};

export default useTaskDetails;
