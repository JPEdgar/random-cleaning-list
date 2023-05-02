import React, { useState, useEffect } from "react";

import initializeTaskList from "../constants/initializations/initializeTaskList";

import useTaskContext from "./context/useTaskContext";
import { useMonsterDetails } from "./";

import { TASK_TYPES } from "../constants/types";

const useTaskDetails = () => {
  const { taskState: taskList, dispatch: taskDispatch, critFlag, setCritFlag, editFlag, setEditFlag, } = useTaskContext();
  const { damageMonster, healMonster } = useMonsterDetails();

  const toggleTaskCompletion = (data) => {
    const tempCritFlag = critFlag;
    if (data.completed) {
      taskDispatch({ type: TASK_TYPES.TOGGLE_COMPLETED, payload: data });
      healMonster(data.taskDamage, data.critFlag);
    } else {
      taskDispatch({ type: TASK_TYPES.TOGGLE_COMPLETED, payload: { ...data, critFlag: tempCritFlag }, });
      damageMonster(data.taskDamage, tempCritFlag);
    }
    setCritFlag(false);
  };

  const activateCrit = () => {
    setCritFlag(true);
  };

  const createDefaultTaskList = () => {
    return initializeTaskList();
  };

  const resetTaskList = () => {
    const resetList = createDefaultTaskList();
    saveTaskList(resetList, resetList.length);
  };

  const saveTaskList = (taskList, incrementor) => {
    localStorage.setItem( "d20-task-list", JSON.stringify({ taskList, incrementor }) );
    setTaskList(taskList, incrementor);
  };

  const loadTaskList = () => {
    const savedTaskList = localStorage.getItem("d20-task-list");
    return JSON.parse(savedTaskList);
  };

  const updateTask = (data) => {
    const inc = taskList.incrementor + 1;
    taskDispatch({ type: TASK_TYPES.UPDATE_TASK, payload: { incrementor: inc, updatedTask: data }, });
  };

  const setTaskList = (incrementor, taskList) => {
    taskDispatch({ type: TASK_TYPES.SET_TASK_LIST, payload: { incrementor, taskList }, });
  };

  useEffect(() => {
    const loadedTaskList = loadTaskList();
    if (!loadedTaskList) resetTaskList();
    else setTaskList(loadedTaskList.incrementor, loadedTaskList.taskList);
  }, []);

  useEffect(() => {
    console.log("taskList = ", taskList);
  }, [taskList]);

  return {
    taskList,
    toggleTaskCompletion,
    critFlag,
    activateCrit,
    editFlag,
    setEditFlag,
    updateTask,
  };
};

export default useTaskDetails;
