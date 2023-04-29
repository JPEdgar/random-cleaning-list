import React from "react";

import { ProgressBar } from "react-bootstrap";

import { useMonsterDetails } from "../hooks";

const MonsterHealth = () => {
  const { monsterDetails } = useMonsterDetails();

  React.useEffect(() => {
    console.log(monsterDetails);
  }, [monsterDetails]);

  return (
    <ProgressBar
      animated
      max={monsterDetails.maxHP}
      now={monsterDetails.currentDamage}
    />
  );
};

export default MonsterHealth;
