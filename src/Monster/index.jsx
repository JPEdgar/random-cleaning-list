import React from "react";

import AssignMonster from "./AssignMonster";
import MonsterHealthBar from "./MonsterHealthBar";

import { useAssignMonster, useMonsterHealth } from "../hooks";

const Monster = () => {
  const { isAssignedFlag, unassignMonster } = useAssignMonster();
  const { damageMonster, healMonster, isMonsterDeadFlag } = useMonsterHealth();

  return (
    <>
      {!isAssignedFlag() && <AssignMonster />}
      {isAssignedFlag() && (
        <>
          <button onClick={() => unassignMonster()}>Unassign</button>
          <button onClick={() => damageMonster(50)}>Inflict 50 damage</button>
          <button onClick={() => healMonster(50)}>Heal 50 damage</button>
          {!isMonsterDeadFlag && <MonsterHealthBar />}
        </>
      )}
    </>
  );
};

export default Monster;
