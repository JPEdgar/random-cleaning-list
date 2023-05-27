import { MASTER_TYPES, MONSTER_TYPES } from "../constants/types";

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
    case MONSTER_TYPES.ASSIGN_MONSTER:
      const assignMonsterData = state.monsterData;
      const assignMonster = { ...assignMonsterData, activeMonster: action.payload, };
      return { ...state, monsterData: assignMonster };

      case MONSTER_TYPES.UNASSIGN_MONSTER:
        const unassignMonsterData = state.monsterData;
        const unassignMonster = { ...unassignMonsterData, activeMonster: {}, };
        return { ...state, monsterData: unassignMonster };
        
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
