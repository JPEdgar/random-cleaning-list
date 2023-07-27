import React from "react";

import { Card } from "react-bootstrap";

import EditIcon from "../elements/EditIcon";
import TrashIcon from "../elements/TrashIcon";
import { useAssignMonster } from "../../hooks";
import { MODAL_TYPES } from "../../constants/types";

const SelectMonsterCard = ({ monsterData = {} }) => {
  const { assignMonster } = useAssignMonster();

  return (
    <Card style={{ width: "18rem", cursor: "pointer" }} className="monsterCard">
      <div>
        <Card.Img variant="top" src={monsterData.image} onClick={() => assignMonster(monsterData)} />

        <div style={{ position: "absolute", display: "flex", right: "0", top: "0", backgroundColor: "rgba(255, 255, 255, 0.6)", borderRadius: "0 5px 0 5px ", }} >
          <EditIcon modalType={MODAL_TYPES.EDIT_MONSTER_MODAL} data={monsterData} />
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
