import React from "react";

import GlobalWrapper from "./context/GlobalWrapper";

import TaskList from "./TaskList";

const App = () => {
  return (
    <GlobalWrapper>
      <TaskList />
    </GlobalWrapper>
  );
};

export default App;
