import React, { createContext, useReducer, useEffect } from "react";

import MonsterData from "../constants/initializations/initializeMonsters";

import { monsterReducer } from "../reducers";

const MonsterContext = createContext();

const MonsterProvider = ({ children }) => {
  const [monsterState, dispatch] = useReducer(monsterReducer, {
    ...MonsterData[0],
    currentDamage: 0,
  });

  return (
    <MonsterContext.Provider value={{ monsterState, dispatch }}>
      {children}
    </MonsterContext.Provider>
  );
};

export { MonsterContext, MonsterProvider };
