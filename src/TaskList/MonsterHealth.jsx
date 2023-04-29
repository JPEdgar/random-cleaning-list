import React from "react";

import { ProgressBar } from "react-bootstrap";

const MonsterHealth = ({ health }) => {
  return <ProgressBar now={health} />;
};

export default MonsterHealth;
