import React from "react";

import useMonsterContext from "./context/useMonsterContext";

const useMonsterDetails = () => {
  const { monsterState: monsterDetails, setMonsterState } = useMonsterContext();

  const healMonster = () => {
    setMonsterState((curr) => ({ ...curr, currentDamage: 0 }));
  };

  const damageMonster = (incomingDamage = 0) => {
    const newDamage = monsterDetails.currentDamage + incomingDamage;
    setMonsterState((curr) => ({ ...curr, currentDamage: newDamage }));
  };

  return { monsterDetails, healMonster, damageMonster };
};

export default useMonsterDetails;
