import React from "react";

import { Row, Col } from "react-bootstrap";

import SelectMonsterCard from "./SelectMonsterCard";

import { useMonsterList } from "../../hooks";

const AssignMonster = () => {
  const { monsterList } = useMonsterList();

  return (
    <Row>
      {monsterList.map((monsterData) => (
        <SelectMonsterCard
          key={`select-monster-card-${monsterData.id}`}
          monsterData={monsterData}
        />
      ))}
    </Row>
  );
};

export default AssignMonster;
