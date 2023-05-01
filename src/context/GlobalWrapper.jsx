import { MonsterProvider } from "./MonsterContext";
import { TaskProvider } from "./TaskContext";

const GlobalWrapper = ({ children }) => {
  return (
    <>
      <TaskProvider>
        <MonsterProvider>{children}</MonsterProvider>
      </TaskProvider>
    </>
  );
};

export default GlobalWrapper;
