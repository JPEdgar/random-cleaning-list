import { MASTER_TYPES } from "../constants/types";

import { initializeD20TasklistData } from "../constants/initializations";

const d20TasklistReducer = (state = {}, action) => {
  // console.log("d20TasklistReducer => ", { state, action });
  switch (action.type) {
    // master switch
    case MASTER_TYPES.INITIALIZE_MASTER_LIST:
      return initializeD20TasklistData();
    case MASTER_TYPES.SET_MASTER_LIST:
      return action.payload;

    // monster switch

    // tasklist switch

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
