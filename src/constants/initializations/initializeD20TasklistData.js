import monsterData from "../../data/monsters.json";
// import tasklistData from "../../data/tasks.json"

const initializeD20TasklistData = () => {
  return {
    monsterData: {
      activeMonster: {},
      monsterList: monsterData,
    },
  };
};

export default initializeD20TasklistData;

/* monsterDetailsSchema
{
    id: String,
    name: String,
    maxHP: Int,
    aliveImage: String,
    deadImage: String
}
*/

/* state layout
{
    monsterData: {
        activeMonster: {...monsterDetailsSchema, currentHP: Int},
        monsterList: [monsterDetailsSchema]
    }
}
*/
