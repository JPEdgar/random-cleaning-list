import React, { useState, useEffect } from "react";

import useTaskContext from "./context/useTaskContext";
import { useMonsterDetails } from "./";

import { TASK_TYPES } from "../constants/types";

import {
   updateTask,
   deleteTask as deleteTaskAction,
   addTask as addTaskAction,
} from "../actions/tasklist";

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

   const editTask = async (data) => {
      await updateTask(data);
      taskDispatch({ type: TASK_TYPES.UPDATE_TASK, payload: data });
   };

   const deleteTask = async (id) => {
      const newState = await deleteTaskAction(id);
      taskDispatch({ type: TASK_TYPES.DELETE_TASK, payload: newState });
   };

   const addTask = async (task) => {
      // console.log(task)
      const newState = await addTaskAction(task);
      console.log(newState)
      taskDispatch({type: TASK_TYPES.ADD_TASK, payload: newState})
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
      editTask,
      deleteTask,
      addTask,
   };
};

export default useTaskDetails;
