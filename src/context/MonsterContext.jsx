import React, { createContext, useReducer, useEffect } from "react";

import initializeMonsterData from "../constants/initializations/initializeMonsters";

import { monsterReducer } from "../reducers";

const MonsterContext = createContext();

const MonsterProvider = ({ children }) => {
  const [monsterState, dispatch] = useReducer(
    monsterReducer,
    initializeMonsterData()
  );

  return (
    <MonsterContext.Provider value={{ monsterState, dispatch }}>
      {children}
    </MonsterContext.Provider>
  );
};

export { MonsterContext, MonsterProvider };
