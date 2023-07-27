import React from "react";

import useD20TasklistContext from "./contexts/useD20TasklistContext";

const useTasklist = () => {
  const { state: d20State, dispatch: d20Dispatch } = useD20TasklistContext();

  return {  };
};

export default useTasklist;
