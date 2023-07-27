import React from "react";

import { useAssignMonster } from "../../hooks";

const Tasklist = () => {
  const { isAssignedFlag } = useAssignMonster();

  return isAssignedFlag ? <div>Tasklist</div> : null;
};

export default Tasklist;
