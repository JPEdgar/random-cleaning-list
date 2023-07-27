import monsterData from "../../data/monsters.json";
import tasklistData from "../../data/tasks.json"

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
    tasklistData: {
      tasklist: tasklistData
    }
  };
};

export default initializeD20TasklistData;

/* -- REMEMBER TO UPDATE THIS COMMENT BLOCK FROM  context/D20TasklistContext.jsx -- */
/* STATE LAYOUT */
/* -- state --
siteData: {
      activeModal: "",
      showModalFlag: false,
      modalData: { name: "", id: "", maxHP: -1, image: "" },
    },
    monsterData: {
      activeMonster: {},
      monsterList: monsterData,
    },
    tasklistData: {
      tasklist: tasklistData
    }
  };
*/
/* -- monsterDetailsSchema --
{
    id: String,
    name: String,
    maxHP: Int,
    image: String,

}
*/ 
/* -- tasklistSchema --
  {
    "id": Int,
    "taskName": String,
    "details": String,
    "taskDamage": Int,
    "break": {
      "takeBreakFlag": Bool,
      "multiplier": Int,
      "numerical": Int,
      "modifier": Int
    },
    "completed": Bool,
    "critFlag": Bool,
    "priority": Enum, ["low"]
    "room": String,
    "frequency": { 
      "multiplier": Int, 
      "numerical": Int, 
      "modifier": Int 
    }
  }
*/
