import { MONSTER_TYPES, MASTER_TYPES } from "../constants/types";

import { initializeD20TasklistData } from "../constants/initializations";

const d20TasklistReducer = (state = {}, action) => {
  console.log("d20TasklistReducer => ", { state, action });

  switch (action.type) {
    // master
    case MASTER_TYPES.INITIALIZE:
      return initializeD20TasklistData();

    // monster

    // tasklist

    // default
    default:
      return state;
  }
};

export default d20TasklistReducer;

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
