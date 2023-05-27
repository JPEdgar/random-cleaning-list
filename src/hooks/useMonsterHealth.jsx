import React from "react";

import { MONSTER_TYPES } from "../constants/types";

import useD20TasklistContext from "./contexts/useD20TasklistContext";

const useMonsterHealth = () => {
  const { state: d20State, dispatch: d20Dispatch } = useD20TasklistContext();

  const monsterCurrentHealth =
    d20State.monsterData?.activeMonster?.currentDamage;

  const monsterMaxHealth = d20State.monsterData?.activeMonster?.maxHP;

  const damageMonster = (damage) => {
    d20Dispatch({ type: MONSTER_TYPES.DAMAGE_MONSTER, payload: damage });
  };

  return { monsterMaxHealth, monsterCurrentHealth, damageMonster };
};

export default useMonsterHealth;
