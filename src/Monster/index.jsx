import React from "react";

import AssignMonster from "./AssignMonster";
import MonsterHealthBar from "./MonsterHealthBar";

import { useAssignMonster } from "../hooks";

const Monster = () => {
  const { isAssignedFlag, unassignMonster } = useAssignMonster();

  return (
    <>
      {!isAssignedFlag() && <AssignMonster />}
      {isAssignedFlag() && <>
      <button onClick={() => unassignMonster()}>Unassign</button>
      <MonsterHealthBar />
      </>}
    </>
  );
};

export default Monster;
