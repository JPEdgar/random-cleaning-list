import React, { useState, useEffect } from "react";

import initializeTaskList from "../constants/initializations/initializeTaskList";

import useTaskContext from "./context/useTaskContext";
import { useMonsterDetails } from "./";

import { TASK_TYPES } from "../constants/types";

const useTaskDetails = () => {
  const {
    taskState: taskList,
    dispatch: taskDispatch,
    critFlag,
    setCritFlag,
    editFlag,
    setEditFlag,
    incrementor,
    setIncrementor,
    initialDamage,
    setInitialDamage,
  } = useTaskContext();

  const { damageMonster, healMonster } = useMonsterDetails();

  const toggleTaskCompletion = (data) => {
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

    const updatedTaskList = taskList.map((x) =>
      data.id === x.id ? updatedData : x
    );
    saveTaskList(updatedTaskList, incrementor);
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
    localStorage.setItem(
      "d20-task-list",
      JSON.stringify({ taskList, incrementor })
    );
  };

  const loadTaskList = () => {
    const savedTaskList = localStorage.getItem("d20-task-list");
    return JSON.parse(savedTaskList);
  };

  const updateTask = (data) => {
    taskDispatch({ type: TASK_TYPES.UPDATE_TASK, payload: data });
    const newTaskList = taskList.map((x) => (data.id === x.id ? data : x));
    saveTaskList(newTaskList, incrementor);
  };

  const setTaskList = (taskList, incrementor) => {
    taskDispatch({ type: TASK_TYPES.SET_TASK_LIST, payload: taskList });
    setIncrementor(incrementor);
  };

  useEffect(() => {
    const loadedTaskList = loadTaskList();
    if (!loadedTaskList) resetTaskList();
    else setTaskList(loadedTaskList.taskList, loadedTaskList.incrementor);
  }, []);

  return {
    taskList,
    toggleTaskCompletion,
    critFlag,
    activateCrit,
    editFlag,
    setEditFlag,
    updateTask,
    initialDamage,
    setInitialDamage,
  };
};

export default useTaskDetails;
