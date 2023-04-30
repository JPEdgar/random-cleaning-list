import React from "react";

import useTaskContext from "./context/useTaskContext";

const useTaskDetails = () => {
  const { taskState: taskList, setTaskState: setTaskLilst } = useTaskContext();

  const toggleTaskCompletion = (data) => {
    setTaskLilst((curr) =>
      curr.map((x) =>
        x.id === data.id ? { ...x, completed: !data.completed } : x
      )
    );
  };

  return { taskList, setTaskLilst, toggleTaskCompletion };
};

export default useTaskDetails;
