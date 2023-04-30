import MONSTER_TYPES from "../constants/types/monsterTypes";

const monsterReducer = (state, action) => {
  // console.log("monsterReducer => ", { state, action });
  switch (action.type) {
    case MONSTER_TYPES.SET_MONSTER:
      return action.payload;
    case MONSTER_TYPES.HEAL_MONSTER:
      return { ...state, currentDamage: state.currentDamage - action.payload };
    case MONSTER_TYPES.RESET_MONSTER:
      return { ...state, currentDamage: 0 };
    case MONSTER_TYPES.DAMAGE_MONSTER:
      return { ...state, currentDamage: state.currentDamage + action.payload };
    default:
      return state;
  }
};

export default monsterReducer;
