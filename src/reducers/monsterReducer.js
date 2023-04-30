import MONSTER_TYPES from "../constants/types/monsterTypes";

const monsterReducer = (state, action) => {
  // console.log("monsterReducer => ", { state, action });
  switch (action.type) {
    case MONSTER_TYPES.SET_MONSTER:
      return action.payload;
    case MONSTER_TYPES.HEAL_MONSTER:
      return { ...state, currentDamage: 0 };
    case MONSTER_TYPES.DAMAGE_MONSTER:
      const newDamage = state.currentDamage + action.payload;
      return { ...state, currentDamage: newDamage };
    default:
      return state;
  }
};

export default monsterReducer;
