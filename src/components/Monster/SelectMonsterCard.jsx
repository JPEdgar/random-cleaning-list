import React from "react";

import { Card } from "react-bootstrap";

import EditIcon from "../elements/EditIcon";
import TrashIcon from "../elements/TrashIcon";
import { useAssignMonster } from "../../hooks";

const SelectMonsterCard = ({ monsterData = {} }) => {
  const { assignMonster } = useAssignMonster();

  const test = () => {
    console.log("test")
  }

  return (
    <Card style={{ width: "18rem" }} >
      <div>
        <Card.Img variant="top" src={monsterData.aliveImage} onClick={() => assignMonster(monsterData)}/>

        <div style={{position: "absolute", display: "flex", right: "0", top: "0", backgroundColor: "rgba(255, 255, 255, 0.75)", borderRadius: "0 5px 0 5px "}}>
          <EditIcon test={test}/>
          <TrashIcon />
        </div>
      </div>
      <Card.Body onClick={() => assignMonster(monsterData)}>
        <Card.Title>{monsterData.name}</Card.Title>
        <Card.Text>Max Hit Points: {monsterData.maxHP}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SelectMonsterCard;
