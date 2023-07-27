import React from "react";

import useD20TasklistContext from "./contexts/useD20TasklistContext";

const useMonsterDetails = () => {
  const { state: d20State, dispatch: d20Dispatch } = useD20TasklistContext();

  const monsterDetails = d20State.monsterData.activeMonster;

  return { monsterDetails };
};

export default useMonsterDetails;
