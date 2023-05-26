import React, { createContext, useReducer, useEffect } from "react";

import d20TasklistReducer from "../reducers/d20TasklistReducer";
import { getAllData } from "../actions/tasklist";
import { MASTER_TYPES } from "../constants/types";

const D20TasklistContext = createContext();

const D20TasklistProvider = ({ children }) => {
  const [d20TasklistState, dispatch] = useReducer(d20TasklistReducer, {});

  useEffect(() => {
    const initializeTasklistData = async () => {
      const data = await getAllData();

      if (!data) dispatch({ type: MASTER_TYPES.INITIALIZE });
    };

    initializeTasklistData();
  }, []);

  useEffect(() => {
    console.log(d20TasklistState);
  }, [d20TasklistState]);

  return (
    <D20TasklistContext.Provider value={{ d20TasklistState, dispatch }}>
      {children}
    </D20TasklistContext.Provider>
  );
};

export { D20TasklistContext, D20TasklistProvider };
