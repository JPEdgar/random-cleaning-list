import React from "react";

import { ProgressBar } from "react-bootstrap";

import SkullIcon from "../elements/SkullIcon";


const MonsterHealthBar = ({ initialDamage = 0 }) => {
// need to get monster's current and max hp

  return (
    <div className="d-flex">
      <div className="justify-content-center align-items-center">
        <SkullIcon />
      </div>
      <div className="w-100">
        <span>
          HP:
        </span>
        <ProgressBar
          animated
          max={100}
          now={50}
        />
      </div>
    </div>
  );
};

export default MonsterHealthBar;
