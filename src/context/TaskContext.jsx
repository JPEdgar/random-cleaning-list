import React, { createContext, useEffect, useState } from "react";

import TaskData from "../data/tasks.json";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [taskState, setTaskState] = useState(TaskData);

  return (
    <TaskContext.Provider value={{ taskState, setTaskState }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
