import React, { createContext, useReducer, useEffect, useState } from "react";

import { getTasklist, createNewTasklist } from "../actions/tasklist";
import { taskReducer } from "../reducers";
import { TASK_TYPES } from "../constants/types";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
   const [taskState, dispatch] = useReducer(taskReducer, {});
   const [critFlag, setCritFlag] = useState(false);
   const [editFlag, setEditFlag] = useState(false);
   //  const [incrementor, setIncrementor] = useState(-1);
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

      console.log("taskState = ", taskState);
   }, [taskState]);

   useEffect(() => {
      const InitializeState = async () => {
         let returnState = { tasklist: [], incrementor: -1 };
         const loadedTasklist = await getTasklist();

         if (!loadedTasklist) {
            const resetList = await createNewTasklist();
            returnState.tasklist = resetList.tasklist;
            returnState.incrementor = resetList.incrementor;
         } else {
            returnState.tasklist = loadedTasklist.tasklist;
            returnState.incrementor = loadedTasklist.incrementor;
         }
         dispatch({ type: TASK_TYPES.SET_TASKLIST, payload: returnState });
      };
       InitializeState();
     
   }, []);

   return (
      <TaskContext.Provider
         value={{
            taskState,
            dispatch,
            critFlag,
            setCritFlag,
            editFlag,
            setEditFlag,
            // incrementor,
            // setIncrementor,
            initialDamage,
            setInitialDamage,
         }}
      >
         {children}
      </TaskContext.Provider>
   );
};

export { TaskContext, TaskProvider };
