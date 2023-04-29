import React from "react";

import MonsterData from "../data/monsters.json";
import useMonsterContext from "./context/useMonsterContext";

const useCreateMonster = () => {
  const { setMonsterState } = useMonsterContext();

  const createNewMonster = () => {
    setMonsterState(MonsterData[0]);
  };

  return { createNewMonster };
};

export default useCreateMonster;
