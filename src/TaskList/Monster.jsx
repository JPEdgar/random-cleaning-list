import React from "react";

import { Image, Row } from "react-bootstrap";

import MonsterList from "../data/monsters.json";

const Monster = () => {
  return (
    <>
      <Row className="d-flex align-items-center justify-content-center">
        <Image
          style={{ height: "300px", width: "auto" }}
          src={MonsterList[0].image}
        />
        <h1 className="text-center">{MonsterList[0].name}</h1>
        <h3 className="text-center">{MonsterList[0].hp}</h3>
      </Row>
    </>
  );
};

export default Monster;
