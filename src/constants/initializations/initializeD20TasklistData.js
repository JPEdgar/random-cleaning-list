import monsterData from "../../data/monsters.json";
// import tasklistData from "../../data/tasks.json"

const initializeD20TasklistData = () => {
  return {
    siteData: {
      activeModal: "",
      showModalFlag: false,
      modalData: { name: "", id: "", maxHP: -1, image: "" },
    },
    monsterData: {
      activeMonster: {},
      monsterList: monsterData,
    },
  };
};

export default initializeD20TasklistData;

/* -- REMEMBER TO UPDATE THIS COMMENT BLOCK FROM  context/D20TasklistContext.jsx -- */
/* STATE LAYOUT */
/* -- state --
{
    monsterData: {
        activeMonster: {...monsterDetailsSchema, currentHP: Int},
        monsterList: [monsterDetailsSchema]
    },
    siteData: {
      activeModal: SITE_TYPES.<site type>
      showModalFlag: Bool
      modalData: {}
    }
}
*/
/* -- monsterDetailsSchema --
{
    id: String,
    name: String,
    maxHP: Int,
    image: String,

}
*/
