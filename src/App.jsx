import React from "react";

import { Container } from "react-bootstrap";

import Title from "./components/Title";
import MonsterHeader from "./components/Monster/MonsterHeader";
import MonsterHealth from "./components/Monster/MonsterHealth";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <>
      <Container>
        <Title />
        <MonsterHeader />
        <TaskList />
        <MonsterHealth />
      </Container>
    </>
  );
};

export default App;
