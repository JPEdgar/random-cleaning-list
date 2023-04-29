import React, { createContext, useEffect, useState } from "react";

const MonsterContext = createContext();

const MonsterProvider = ({ children }) => {
  const [monsterState, setMonsterState] = useState("test");

  return (
    <MonsterContext.Provider value={{ monsterState, setMonsterState }}>
      {children}
    </MonsterContext.Provider>
  );
};

export { MonsterContext, MonsterProvider };
