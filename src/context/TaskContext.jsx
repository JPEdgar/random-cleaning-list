import React, { createContext, useReducer, useEffect, useState } from "react";

import initializeTaskList from "../constants/initializations/initializeTaskList";

import { taskReducer } from "../reducers";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [taskState, dispatch] = useReducer(taskReducer, initializeTaskList());
  const [critFlag, setCritFlag] = useState(false);
  const [editFlag, setEditFlag] = useState(false);

  return (
    <TaskContext.Provider
      value={{
        taskState,
        dispatch,
        critFlag,
        setCritFlag,
        editFlag,
        setEditFlag,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
