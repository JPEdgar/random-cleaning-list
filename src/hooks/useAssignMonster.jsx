import React from "react";

import { MONSTER_TYPES } from "../constants/types";
import useD20TasklistContext from "./contexts/useD20TasklistContext";

const useAssignMonster = () => {
  const { state: d20State, dispatch: d20Dispatch } = useD20TasklistContext();

  const isAssignedFlag = d20State.monsterData?.activeMonster?.id ? true : false;

  const assignMonster = (monsterData) => {
    d20Dispatch({ type: MONSTER_TYPES.ASSIGN_MONSTER, payload: monsterData });
  };

  const unassignMonster = () => {
    d20Dispatch({ type: MONSTER_TYPES.UNASSIGN_MONSTER });
  };

  return { isAssignedFlag, assignMonster, unassignMonster };
};

export default useAssignMonster;
