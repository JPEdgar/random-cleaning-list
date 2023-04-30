import React from "react";

import TaskList from "./components/TaskList";
import { useTaskDetails } from "./hooks";

const App = () => {
  const {taskList} = useTaskDetails()
  return (
<>
      <button onClick={() => console.log(taskList)}>Log Task List</button>
      <TaskList />
</>
 
  );
};

export default App;
