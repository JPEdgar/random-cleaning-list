import React from "react";

import GlobalWrapper from "./context/GlobalWrapper";

import TaskList from "./components/TaskList";

const App = () => {
  return (
    <GlobalWrapper>
      <TaskList />
    </GlobalWrapper>
  );
};

export default App;
