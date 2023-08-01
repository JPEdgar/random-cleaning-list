import React, { useEffect, useState } from "react";

import { Container } from "react-bootstrap";

import Monster from "./components/Monster";
import Tasklist from "./components/Tasklist";

import useD20TasklistContext from "./hooks/contexts/useD20TasklistContext";

import { useBreakpoints } from "./hooks";

const App = () => {
  const { state } = useD20TasklistContext();
  const { getBreakpoint } = useBreakpoints();
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    breakpoint: getBreakpoint(),
  });

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        breakpoint: getBreakpoint(),
      });
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const clearStorage = () => {
    console.log("Clearning storage...");
    localStorage.clear();
  };

  return (
    <Container>
      <button onClick={() => console.log(state)}>Log state</button>
      <button onClick={() => clearStorage()}>Clear storage</button>
      <div>{windowSize.breakpoint}</div>
      <Monster />
      <Tasklist />
    </Container>
  );
};

export default App;
