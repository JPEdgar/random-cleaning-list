import React from "react";

import useMonsterContext from "./context/useMonsterContext";
import { MONSTER_TYPES } from "../constants/types";

const useMonsterDetails = () => {
  const { monsterState: monsterDetails, dispatch: monsterDispatch } =
    useMonsterContext();

  const healMonster = () => {
    monsterDispatch({ type: MONSTER_TYPES.HEAL_MONSTER });
  };

  const damageMonster = (incomingDamage = 0) => {
    monsterDispatch({
      type: MONSTER_TYPES.DAMAGE_MONSTER,
      payload: incomingDamage,
    });
  };

  return { monsterDetails, healMonster, damageMonster };
};

export default useMonsterDetails;
