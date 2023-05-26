import React from "react";

import { ProgressBar } from "react-bootstrap";

import SkullIcon from "../elements/SkullIcon";
import { useMonsterDetails } from "../../hooks";

const MonsterHealth = ({ initialDamage = 0 }) => {
  const { monsterDetails } = useMonsterDetails();

  return (
    <div className="d-flex">
      <div className="justify-content-center align-items-center">
        <SkullIcon />
      </div>
      <div className="w-100">
        <span>
          HP:{" "}
          {monsterDetails.maxHP - monsterDetails.currentDamage - initialDamage}{" "}
          /{monsterDetails.maxHP}
        </span>
        <ProgressBar
          animated
          max={monsterDetails.maxHP}
          now={monsterDetails.currentDamage + initialDamage}
        />
      </div>
    </div>
  );
};

export default MonsterHealth;
