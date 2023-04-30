import React from "react";

import { ProgressBar } from "react-bootstrap";

import SkullIcon from "./elements/SkullIcon";
import { useMonsterDetails } from "../hooks";

const MonsterHealth = () => {
  const { monsterDetails } = useMonsterDetails();

  React.useEffect(() => {
    console.log(monsterDetails);
  }, [monsterDetails]);

  return (
    <div className="d-flex">
      <div className="justify-content-center align-items-center">
        <SkullIcon />
      </div>
      <div className="w-100">
        <span>
          HP: {monsterDetails.maxHP - monsterDetails.currentDamage} /{" "}
          {monsterDetails.maxHP}
        </span>
        <ProgressBar
          animated
          max={monsterDetails.maxHP}
          now={monsterDetails.currentDamage}
        />
      </div>
    </div>
  );
};

export default MonsterHealth;
