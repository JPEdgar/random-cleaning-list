import React from "react";

import { Image, Row } from "react-bootstrap";

import { useMonsterDetails } from "../../hooks";

const MonsterHeader = () => {
  const { monsterDetails } = useMonsterDetails();

  return (
    <>
      <Row className="d-flex align-items-center justify-content-center">
        <Image
          style={{ height: "300px", width: "auto" }}
          // src={
          //   monsterDetails.currentDamage >= monsterDetails.maxHP
          //     ? monsterDetails.dead
          //     : monsterDetails.image
          // }
          src="https://picsum.photos/200"
        />
        <h2 className="text-center">{monsterDetails.name} <span className="fs-5">({monsterDetails.maxHP} hp)</span></h2>
      </Row>
    </>
  );
};

export default MonsterHeader;
