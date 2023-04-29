import React from "react";

import useMonsterContext from "./context/useMonsterContext";

const useMonsterDetails = () => {
  const { monsterState, setMonsterState } = useMonsterContext();

  const healMonster = () => {
    const maxHP = monsterState.maxHP;
    setMonsterState((curr) => ({ ...curr, currentHP: maxHP }));
  };

  const damageMonster = (incomingDamage) => {
    const newHP = monsterState.currentHP - incomingDamage;
    setMonsterState((curr) => ({ ...curr, currentHP: newHP }));
  };

  return { monsterState, healMonster, damageMonster };
};

export default useMonsterDetails;
