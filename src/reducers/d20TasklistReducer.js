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
      const assignMonster_state = state.monsterData;
      const assignMonster = {
        ...assignMonster_state,
        activeMonster: action.payload,
      };
      return { ...state, monsterData: assignMonster };

    case MONSTER_TYPES.UNASSIGN_MONSTER:
      const unassignMonster_state = state.monsterData;
      const unassignMonster = { ...unassignMonster_state, activeMonster: {} };
      return { ...state, monsterData: unassignMonster };

    case MONSTER_TYPES.DAMAGE_MONSTER:
      const damageMonster_state = state.monsterData;
      const damageMonster_activeMonster = damageMonster_state.activeMonster;
      const damageMonster_currentDamage = damageMonster_state.activeMonster.currentDamage ? damageMonster_state.activeMonster.currentDamage : 0;
      damageMonster_activeMonster.currentDamage = damageMonster_currentDamage + action.payload;
      const damageMonster_newActiveMonster = { ...damageMonster_state, activeMonster: damageMonster_activeMonster, };
      return { ...state, monsterData: damageMonster_newActiveMonster };

      case MONSTER_TYPES.HEAL_MONSTER:
        const healMonster_state = state.monsterData;
        const healMonster_activeMonster = healMonster_state.activeMonster;
        const healMonster_currentdamage = healMonster_state.activeMonster.currentDamage ? healMonster_state.activeMonster.currentDamage : 0;
        healMonster_activeMonster.currentDamage = healMonster_currentdamage - action.payload >= 0 ? healMonster_currentdamage - action.payload : 0;
        const healMonster_newActiveMonster = { ...healMonster_state, activeMonster: healMonster_activeMonster, };
        return { ...state, monsterData: healMonster_newActiveMonster };

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
