import React from "react";

import { Card, Col } from "react-bootstrap";

import EditIcon from "../elements/EditIcon";
import TrashIcon from "../elements/TrashIcon";
import { useAssignMonster, useMonsterList } from "../../hooks";
import { MODAL_TYPES } from "../../constants/types";

const SelectMonsterCard = ({ monsterData = {} }) => {
  const { assignMonster } = useAssignMonster();
  const { deleteMonster } = useMonsterList();

  return (
    <Col className="my-2 d-flex justify-content-center">
      <Card
        style={{ width: "18rem", cursor: "pointer" }}
        className="monsterCard"
      >
        <div>
          <Card.Img
            variant="top"
            src={monsterData.image}
            onClick={() => assignMonster(monsterData)}
          />

          <div
            style={{
              position: "absolute",
              display: "flex",
              right: "0",
              top: "0",
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              borderRadius: "0 5px 0 5px ",
            }}
          >
            <EditIcon
              modalType={MODAL_TYPES.EDIT_MONSTER_MODAL}
              data={monsterData}
            />
            <TrashIcon
              monsterFlag
              data={{ id: monsterData.id, name: monsterData.name }}
              deleteCommand={deleteMonster}
            />
          </div>
        </div>
        <Card.Body onClick={() => assignMonster(monsterData)}>
          <Card.Title>{monsterData.name}</Card.Title>
          <Card.Text>Max Hit Points: {monsterData.maxHP}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SelectMonsterCard;
