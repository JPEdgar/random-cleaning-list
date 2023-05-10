import React, { useState, useEffect } from "react";

import { Container } from "react-bootstrap";

import Title from "./components/Title";
import MonsterHeader from "./components/Monster/MonsterHeader";
import MonsterHealth from "./components/Monster/MonsterHealth";
import Tasklist from "./components/Tasklist";

import { useTaskDetails } from "./hooks";

const App = () => {
  const { tasklist, initialDamage } = useTaskDetails();
  const [initialBossDamage, setInitialBossDamage] = useState(0);

  useEffect(() => {
    if (initialDamage.hasInitialDamage)
      setInitialBossDamage(initialDamage.damage);
    else setInitialBossDamage(0);
  }, [initialDamage]);

  return (
    <>
      <button onClick={() => console.log(tasklist)}>Log task list</button>
      <Container>
        <Title />
        <MonsterHeader />
        <Tasklist />
        <MonsterHealth initialDamage={initialBossDamage} />
      </Container>
    </>
  );
};

export default App;
