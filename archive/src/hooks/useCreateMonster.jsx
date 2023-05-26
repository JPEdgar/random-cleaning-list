import React from "react";

import { MONSTER_TYPES } from "../constants/types";
import MonsterData from "../constants/initializations/initializeMonsters";
import useMonsterContext from "./context/useMonsterContext";

const useCreateMonster = () => {
  const { dispatch: monsterDispatch } = useMonsterContext();

  const createNewMonster = () => {
    monsterDispatch({
      type: MONSTER_TYPES.SET_MONSTER,
      payload: { ...MonsterData[0], currentDamage: 0 },
    });
  };

  return { createNewMonster };
};

export default useCreateMonster;
