import React, { useState, useEffect } from "react";

import useTaskContext from "./context/useTaskContext";
import { useMonsterDetails } from "./";

import { TASK_TYPES } from "../constants/types";

import { updateTask } from "../actions/tasklist";

const useTaskDetails = () => {
   const {
      taskState: tasklist,
      dispatch: taskDispatch,
      critFlag,
      setCritFlag,
      editFlag,
      setEditFlag,
      initialDamage,
      setInitialDamage,
   } = useTaskContext();

   const { damageMonster, healMonster } = useMonsterDetails();

   const toggleTaskCompletion = async (data) => {
      let updatedData;

      if (data.completed) {
         updatedData = { ...data, completed: false };
         healMonster(updatedData.taskDamage, data.critFlag);
      } else if (!data.completed && data.taskDamage > 0) {
         const tempCritFlag = critFlag;
         updatedData = { ...data, completed: true, critFlag: critFlag };
         damageMonster(updatedData.taskDamage, tempCritFlag);
      }

      taskDispatch({ type: TASK_TYPES.UPDATE_TASK, payload: updatedData });
      setCritFlag(false);

      await updateTask(updatedData);
   };

   const activateCrit = () => {
      setCritFlag(true);
   };

   return {
      tasklist,
      toggleTaskCompletion,
      critFlag,
      activateCrit,
      editFlag,
      setEditFlag,
      initialDamage,
      setInitialDamage,
   };
};

export default useTaskDetails;
