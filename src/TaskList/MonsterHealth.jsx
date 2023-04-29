import React from "react";

import { ProgressBar } from "react-bootstrap";

import { useMonsterDetails } from "../hooks";

const MonsterHealth = ({ health }) => {
  const {monsterDetails} = useMonsterDetails()
  
  
  React.useEffect(() => {
    console.log(monsterDetails)
  }, [monsterDetails])

  return <ProgressBar now={health} />;
};

export default MonsterHealth;
