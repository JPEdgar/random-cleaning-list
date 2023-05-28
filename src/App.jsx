import React from "react";

import { Container } from "react-bootstrap";

import Monster from "./components/Monster";

import useD20TasklistContext from "./hooks/contexts/useD20TasklistContext"

const App = () => {
  const {state} = useD20TasklistContext()
  return (
    <Container>
      <button onClick={() => console.log(state)}>Log state</button>
      <Monster />
    </Container>
  );
};

export default App;
