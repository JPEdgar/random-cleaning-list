import React from "react";

import { Image, Row } from "react-bootstrap";

import { useMonsterDetails } from "../../hooks";

const Monster = () => {
  const { monsterDetails } = useMonsterDetails();
  return (
    <>
      <Row className="d-flex align-items-center justify-content-center">
        <Image
          style={{ height: "300px", width: "auto" }}
          src={monsterDetails.image}
        />
        <h1 className="text-center">{monsterDetails.name}</h1>
        <h3 className="text-center">{monsterDetails.hp}</h3>
      </Row>
    </>
  );
};

export default Monster;
