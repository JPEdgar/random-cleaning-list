import React, { createContext, useReducer, useEffect } from "react";

import initializeTaskList from "../constants/initializations/initializeTaskList";

import {taskReducer} from "../reducers";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [taskState, dispatch] = useReducer(taskReducer, initializeTaskList());

  // useEffect(() => {
  //   console.log(taskState)
  // }, [taskState])

  return (
    <TaskContext.Provider value={{ taskState, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
