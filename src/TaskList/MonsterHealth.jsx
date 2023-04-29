import React from "react";

import { ProgressBar } from "react-bootstrap";

import { useMonsterDetails } from "../hooks";

const MonsterHealth = ({ health }) => {
  const {monsterState} = useMonsterDetails()
  console.log(monsterState)

  return <ProgressBar now={health} />;
};

export default MonsterHealth;
