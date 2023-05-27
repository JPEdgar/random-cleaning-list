import React from "react";

import useD20TasklistContext from "./contexts/useD20TasklistContext";

const useMonsterHealth = () => {
  const { state: d20State, dispatch: d20Dispatch } = useD20TasklistContext();
  


  return <div>useMonsterHealth</div>;
};

export default useMonsterHealth;
