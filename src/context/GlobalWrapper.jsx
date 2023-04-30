import { Container } from "react-bootstrap";

import { MonsterProvider } from "./MonsterContext";
import { TaskProvider } from "./TaskContext";

const GlobalWrapper = ({ children }) => {
  return (
    <>
      <Container>
        <TaskProvider>
          <MonsterProvider>{children}</MonsterProvider>
        </TaskProvider>
      </Container>
    </>
  );
};

export default GlobalWrapper;
