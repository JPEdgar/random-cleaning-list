import MONSTER_TYPES from "../constants/types/monsterTypes";

const monsterReducer = (state, action) => {
  // console.log("monsterReducer => ", { state, action });
  switch (action.type) {
    case MONSTER_TYPES.SET_MONSTER:
      return action.payload;
    case MONSTER_TYPES.HEAL_MONSTER:
      const healAmount = action.payload.critFlag
        ? action.payload.incomingDamage * 1.5
        : action.payload.incomingDamage;

      return { ...state, currentDamage: state.currentDamage - healAmount };
    case MONSTER_TYPES.DAMAGE_MONSTER:
      const damageMonster = action.payload.critFlag
        ? action.payload.incomingDamage * 1.5
        : action.payload.incomingDamage;

      return { ...state, currentDamage: state.currentDamage + damageMonster };
    case MONSTER_TYPES.RESET_MONSTER:
      return { ...state, currentDamage: 0 };
    default:
      return state;
  }
};

export default monsterReducer;
