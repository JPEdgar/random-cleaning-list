import { D20TasklistProvider } from "./D20TasklistContext";

const GlobalWrapper = ({ children }) => {
  return (
    <>
      <D20TasklistProvider>{children}</D20TasklistProvider>
    </>
  );
};

export default GlobalWrapper;
