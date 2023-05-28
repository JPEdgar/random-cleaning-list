import React from "react";

import SelectMonsterCard from "./SelectMonsterCard";

import { useMonsterList } from "../../hooks";

const AssignMonster = () => {
  const { monsterList } = useMonsterList();

  return monsterList.map((monsterData) => (
    <SelectMonsterCard
      key={`select-monster-card-${monsterData.id}`}
      monsterData={monsterData}
    />
  ));
};

export default AssignMonster;
