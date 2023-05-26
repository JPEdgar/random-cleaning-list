import { useContext } from "react";

import { MonsterContext } from "../../context/MonsterContext";

const useMonsterContext = () => {
  const context = useContext(MonsterContext);

  if (!context) throw Error("Context error - useMonsterContext out-of-scope.");

  return context;
};

export default useMonsterContext;
