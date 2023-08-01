import React from "react";

import useD20TasklistContext from "./contexts/useD20TasklistContext";
import { MONSTER_TYPES } from "../constants/types";

const useMonsterList = () => {
  const { state: d20State, dispatch: d20Dispatch } = useD20TasklistContext();

  const monsterList = d20State.monsterData?.monsterList
    ? [...d20State.monsterData.monsterList]
    : [];

  const deleteMonster = (id) => {
    console.log("deleting monster with id ", id);
    d20Dispatch({ type: MONSTER_TYPES.DELETE_MONSTER, payload: id });
  };

  const addMonster = () => {
    d20Dispatch({ type: MONSTER_TYPES.ADD_MONSTER });
  };

  return { monsterList, deleteMonster, addMonster };
};

export default useMonsterList;
