import React from "react";

import { ProgressBar } from "react-bootstrap";

import SkullIcon from "../elements/SkullIcon";
import { useMonsterHealth } from "../hooks";

const MonsterHealthBar = ({ initialDamage = 0 }) => {
  // need to get monster's current and max hp
  const { monsterMaxHealth, monsterCurrentHealth } = useMonsterHealth();

  return (
    <div className="d-flex">
      <div className="justify-content-center align-items-center">
        <SkullIcon />
      </div>
      <div className="w-100">
        <span>HP: {monsterMaxHealth}</span>
        <ProgressBar
          animated
          max={monsterMaxHealth}
          now={monsterCurrentHealth}
        />
      </div>
    </div>
  );
};

export default MonsterHealthBar;
