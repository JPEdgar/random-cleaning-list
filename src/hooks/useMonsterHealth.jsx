import React from "react";

import { MONSTER_TYPES } from "../constants/types";

import useD20TasklistContext from "./contexts/useD20TasklistContext";

const useMonsterHealth = () => {
  const { state: d20State, dispatch: d20Dispatch } = useD20TasklistContext();

  const monsterCurrentHealth =
    d20State.monsterData?.activeMonster?.currentDamage >= 0
      ? d20State.monsterData?.activeMonster?.currentDamage
      : 0;

  const monsterMaxHealth = d20State.monsterData?.activeMonster?.maxHP;

  const isMonsterDeadFlag =
    monsterMaxHealth - monsterCurrentHealth > 0 ? false : true;

  const damageMonster = (damage) => {
    d20Dispatch({ type: MONSTER_TYPES.DAMAGE_MONSTER, payload: damage });
  };

  const healMonster = (damage) => {
    d20Dispatch({ type: MONSTER_TYPES.HEAL_MONSTER, payload: damage });
  };

  return {
    monsterMaxHealth,
    monsterCurrentHealth,
    damageMonster,
    healMonster,
    isMonsterDeadFlag,
  };
};

export default useMonsterHealth;
