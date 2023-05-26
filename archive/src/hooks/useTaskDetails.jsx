import React, { useState, useEffect } from "react";

// import initializeTasklist from "../constants/initializations/initializeTasklist";

import useTaskContext from "./context/useTaskContext";
import { useMonsterDetails } from "./";

import { TASK_TYPES } from "../constants/types";

import { getTasklist, createNewTasklist } from "../actions/tasklist";

const useTaskDetails = () => {
  const {
    taskState: tasklist,
    dispatch: taskDispatch,
    critFlag,
    setCritFlag,
    editFlag,
    setEditFlag,
    // incrementor,
    // setIncrementor,
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

    const updatedTasklist = tasklist.map((x) =>
      data.id === x.id ? updatedData : x
    );
    // saveTasklist(updatedTasklist, incrementor);
  };

  const activateCrit = () => {
    setCritFlag(true);
  };

  const resetTasklist = () => {
    const resetList = createNewTasklist();
    saveTasklist(resetList.tasklist, resetList.incrementor);
  };

  const saveTasklist = (tasklist, incrementor) => {
    taskDispatch({
      type: TASK_TYPES.SET_TASK_LIST,
      payload: { tasklist, incrementor },
    });
  };

  const loadTasklist = () => {
    return getTasklist();
  };

  // const updateTask = (data) => {
  //   taskDispatch({ type: TASK_TYPES.UPDATE_TASK, payload: data });
  //   const newTasklist = tasklist.map((x) => (data.id === x.id ? data : x));
  //   saveTasklist(newTasklist, incrementor);
  // };

  // const setTasklist = (tasklist, incrementor) => {
  //   taskDispatch({ type: TASK_TYPES.SET_TASK_LIST, payload: tasklist });
  //   setIncrementor(incrementor);
  // };

  useEffect(() => {
    const loadedTasklist = loadTasklist();
    if (!loadedTasklist) resetTasklist();
    else saveTasklist(loadedTasklist.tasklist, loadedTasklist.incrementor);
  }, []);

  return {
    tasklist,
    toggleTaskCompletion,
    critFlag,
    activateCrit,
    editFlag,
    setEditFlag,
    // updateTask,
    initialDamage,
    setInitialDamage,
  };
};

export default useTaskDetails;
