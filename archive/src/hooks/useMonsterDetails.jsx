import React, { useEffect } from "react";

import useMonsterContext from "./context/useMonsterContext";
import { MONSTER_TYPES } from "../constants/types";

const useMonsterDetails = () => {
  const { monsterState: monsterDetails, dispatch: monsterDispatch } =
    useMonsterContext();

  const healMonster = (incomingDamage = 0, critFlag = false) => {
    monsterDispatch({
      type: MONSTER_TYPES.HEAL_MONSTER,
      payload: { incomingDamage, critFlag },
    });
  };

  const damageMonster = (incomingDamage = 0, critFlag = false) => {
    monsterDispatch({
      type: MONSTER_TYPES.DAMAGE_MONSTER,
      payload: { incomingDamage, critFlag },
    });
  };

  const resetMonster = () => {
    monsterDispatch({ type: MONSTER_TYPES.RESET_MONSTER });
  };

  return { monsterDetails, healMonster, damageMonster, resetMonster };
};

export default useMonsterDetails;
