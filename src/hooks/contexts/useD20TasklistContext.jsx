import { useContext } from "react";

import { D20TasklistContext } from "../../context/D20TasklistContext";

const useD20TasklistContext = () => {
  const context = useContext(D20TasklistContext);

  if (!context) throw Error("Context error - useD20TasklistContext out-of-scope.");

  return context;
};

export default useD20TasklistContext;
