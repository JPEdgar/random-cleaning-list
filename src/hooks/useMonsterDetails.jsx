import React from "react";

import useMonsterContext from "./context/useMonsterContext";

const useMonsterDetails = () => {
  const { monsterState, setMonsterState } = useMonsterContext();
  return { monsterState, setMonsterState };
};

export default useMonsterDetails;
