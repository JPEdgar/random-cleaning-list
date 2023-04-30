import MonsterData from "../../data/monsters.json";

const initializeMonsterData = () => {
  return {
    ...MonsterData[0],
    currentDamage: 0,
  };
};
export default initializeMonsterData;
