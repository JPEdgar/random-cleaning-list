import { Container } from "react-bootstrap";

import { MonsterProvider } from "./MonsterContext";

const GlobalWrapper = ({ children }) => {
  return (
    <>
      <Container>
        <MonsterProvider>{children}</MonsterProvider>
      </Container>
    </>
  );
};

export default GlobalWrapper;
