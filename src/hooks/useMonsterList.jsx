import React from "react";

import useD20TasklistContext from "./contexts/useD20TasklistContext";

const useMonsterList = () => {
  const { state: d20State, dispatch: d20Dispatch } = useD20TasklistContext();

  const monsterList = d20State.monsterData?.monsterList ? [...d20State.monsterData.monsterList] : [];

  return { monsterList };
};

export default useMonsterList;
