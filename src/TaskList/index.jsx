import React from "react";

import Monster from "./Monster";
import TaskList from "./TaskList";
import MonsterHealth from "./MonsterHealth";

const index = () => {
  return (
    <>
      <Monster />
      <TaskList />
      <MonsterHealth health={60}/>
    </>
  );
};

export default index;
