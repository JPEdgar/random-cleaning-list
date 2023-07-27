import React from "react";

import MonsterModal from "./MonsterModal";
import AssignMonster from "./AssignMonster";
import MonsterHealthBar from "./MonsterHealthBar";
import MonsterDetails from "./MonsterDetails";

import { useAssignMonster, useMonsterHealth } from "../../hooks";

const Monster = () => {
  const { isAssignedFlag, unassignMonster } = useAssignMonster();
  const { damageMonster, healMonster, isMonsterDeadFlag } = useMonsterHealth();

  return (
    <>
      <MonsterModal />
      {!isAssignedFlag && <AssignMonster />}
      {isAssignedFlag && (
        <>
          <button onClick={() => unassignMonster()}>Unassign</button>
          <button onClick={() => damageMonster(50)}>Inflict 50 damage</button>
          <button onClick={() => healMonster(50)}>Heal 50 damage</button>
          <MonsterDetails />
          {!isMonsterDeadFlag ? <MonsterHealthBar /> : <h4>Monster dead</h4>}
        </>
      )}
    </>
  );
};

export default Monster;
