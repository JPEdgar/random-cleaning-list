import React, { createContext, useReducer, useEffect, useState } from "react";

import { taskReducer } from "../reducers";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [taskState, dispatch] = useReducer(taskReducer, []);
  const [critFlag, setCritFlag] = useState(false);
  const [editFlag, setEditFlag] = useState(false);
  const [incrementor, setIncrementor] = useState(-1);
  const [initialDamage, setInitialDamage] = useState({
    damage: 0,
    hasInitialDamage: false,
  });
  const [initializationFlag, setInitializationFlag] = useState(false);

  useEffect(() => {
    if (taskState.length > 0 && !initializationFlag) {
      const setDamage = taskState
        .map((x) => {
          let returnValue = 0;
          if (x.completed) {
            if (x.critFlag) returnValue = x.taskDamage * 1.5;
            else returnValue = x.taskDamage;
          }
          return returnValue;
        })
        .reduce((total, num) => total + num);

      if (setDamage > 0)
        setInitialDamage({ damage: setDamage, hasInitialDamage: true });
      setInitializationFlag(true);
    }
  }, [taskState]);

  return (
    <TaskContext.Provider
      value={{
        taskState,
        dispatch,
        critFlag,
        setCritFlag,
        editFlag,
        setEditFlag,
        incrementor,
        setIncrementor,
        initialDamage,
        setInitialDamage,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
