import React, { createContext, useReducer, useEffect } from "react";

import d20TasklistReducer from "../reducers/d20TasklistReducer";
import { initializeD20TasklistData } from "../constants/initializations";
import { getAllData, saveAllData } from "../actions/tasklist";
import { MASTER_TYPES } from "../constants/types";

const D20TasklistContext = createContext();

const D20TasklistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(d20TasklistReducer, {});

  useEffect(() => {
    const initializeTasklistData = async () => {
      const data = await getAllData();

      if (!data) {
        dispatch({ type: MASTER_TYPES.INITIALIZE_MASTER_LIST });
        await saveAllData(initializeD20TasklistData())
      } else dispatch({ type: MASTER_TYPES.SET_MASTER_LIST, payload: data });
    };

    initializeTasklistData();
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <D20TasklistContext.Provider value={{ state, dispatch }}>
      {children}
    </D20TasklistContext.Provider>
  );
};

export { D20TasklistContext, D20TasklistProvider };
