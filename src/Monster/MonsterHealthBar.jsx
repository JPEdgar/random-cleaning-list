import React from "react";

import { ProgressBar } from "react-bootstrap";

import SkullIcon from "../elements/SkullIcon";


const MonsterHealthBar = ({ initialDamage = 0 }) => {


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
          max={null}
          now={null}
        />
      </div>
    </div>
  );
};

export default MonsterHealthBar;
