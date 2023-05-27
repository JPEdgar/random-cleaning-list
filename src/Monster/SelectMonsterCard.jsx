import React from "react";

import { Card } from "react-bootstrap";

import { useAssignMonster } from "../hooks";

const SelectMonsterCard = ({ monsterData = {} }) => {
  const { assignMonster } = useAssignMonster();

  return (
    <Card style={{ width: "18rem" }} onClick={() => assignMonster(monsterData)}>
      <Card.Img variant="top" src={monsterData.aliveImage} />
      <Card.Body>
        <Card.Title>{monsterData.name}</Card.Title>
        <Card.Text>Max Hit Points: {monsterData.maxHP}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SelectMonsterCard;
