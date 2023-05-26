import { useContext } from "react";

import { TaskContext } from "../../context/TaskContext";

const useTaskContext = () => {
  const context = useContext(TaskContext);

  if (!context) throw Error("Context error - useTaskContext out-of-scope.");

  return context;
};

export default useTaskContext;
