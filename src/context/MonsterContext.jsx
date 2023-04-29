import React, { createContext, useEffect, useState } from "react";

import MonsterData from "../data/monsters.json"

const MonsterContext = createContext();

const MonsterProvider = ({ children }) => {
  const [monsterState, setMonsterState] = useState({ ...MonsterData[0], currentDamage: 0 });

  return (
    <MonsterContext.Provider value={{ monsterState, setMonsterState }}>
      {children}
    </MonsterContext.Provider>
  );
};

export { MonsterContext, MonsterProvider };
