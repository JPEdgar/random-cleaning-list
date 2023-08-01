import { MASTER_TYPES, MONSTER_TYPES, SITE_TYPES } from "../constants/types";

import { initializeD20TasklistData } from "../constants/initializations";
import { cloneDeep } from "../utilities/";

const d20TasklistReducer = (state = {}, action) => {
  // console.log("d20TasklistReducer => ", { state, action });
  switch (action.type) {
    // master switch
    case MASTER_TYPES.INITIALIZE_MASTER_LIST:
      console.log("MASTER_TYPES.INITIALIZE_MASTER_LIST");
      return initializeD20TasklistData();

    case MASTER_TYPES.SET_MASTER_LIST:
      console.log("MASTER_TYPES.SET_MASTER_LIST");
      return action.payload;

    // monster switch
    case MONSTER_TYPES.ASSIGN_MONSTER:
      console.log("MONSTER_TYPES.ASSIGN_MONSTER");
      const assignMonster_state = cloneDeep(state.monsterData);
      const assignMonster_assignMonster = action.payload;
      assignMonster_assignMonster.currentDamage = 0;
      const assignMonster = {
        ...assignMonster_state,
        activeMonster: assignMonster_assignMonster,
      };
      return { ...state, monsterData: assignMonster };

    case MONSTER_TYPES.UNASSIGN_MONSTER:
      console.log("MONSTER_TYPES.UNASSIGN_MONSTER");
      const unassignMonster_state = cloneDeep(state.monsterData);
      const unassignMonster = { ...unassignMonster_state, activeMonster: {} };
      return { ...state, monsterData: unassignMonster };

    case MONSTER_TYPES.DAMAGE_MONSTER:
      console.log("MONSTER_TYPES.DAMAGE_MONSTER");
      const damageMonster_state = cloneDeep(state.monsterData);
      const damageMonster_activeMonster = damageMonster_state.activeMonster;
      const damageMonster_currentDamage = damageMonster_state.activeMonster
        .currentDamage
        ? damageMonster_state.activeMonster.currentDamage
        : 0;
      damageMonster_activeMonster.currentDamage =
        damageMonster_currentDamage + action.payload;
      const damageMonster_newActiveMonster = {
        ...damageMonster_state,
        activeMonster: damageMonster_activeMonster,
      };
      return { ...state, monsterData: damageMonster_newActiveMonster };

    case MONSTER_TYPES.HEAL_MONSTER:
      console.log("MONSTER_TYPES.HEAL_MONSTER");
      const healMonster_state = cloneDeep(state.monsterData);
      const healMonster_activeMonster = healMonster_state.activeMonster;
      const healMonster_currentdamage = healMonster_state.activeMonster
        .currentDamage
        ? healMonster_state.activeMonster.currentDamage
        : 0;
      healMonster_activeMonster.currentDamage =
        healMonster_currentdamage - action.payload >= 0
          ? healMonster_currentdamage - action.payload
          : 0;
      const healMonster_newActiveMonster = {
        ...healMonster_state,
        activeMonster: healMonster_activeMonster,
      };
      return { ...state, monsterData: healMonster_newActiveMonster };

    case MONSTER_TYPES.UPDATE_MONSTER_DATA:
      console.log("MONSTER_TYPES.UPDATE_MONSTER_DATA");
      const updateMonsterData_state = cloneDeep(state.monsterData);
      const updatedMonsterData = updateMonsterData_state.monsterList.map((x) =>
        x.id === action.payload.id ? action.payload : x
      );
      updateMonsterData_state.monsterList = [...updatedMonsterData];
      return { ...state, monsterData: updateMonsterData_state };

    case MONSTER_TYPES.DELETE_MONSTER:
      console.log("MONSTER_TYPES.DELETE_MONSTER");
      const deleteMonster_state = cloneDeep(state.monsterData);
      const deleteMonsterData = deleteMonster_state.monsterList.filter(
        (x) => x.id !== action.payload
      );
      console.log(deleteMonsterData);
      deleteMonster_state.monsterList = [...deleteMonsterData];
      return { ...state, monsterData: deleteMonster_state };

    // tasklist switch

    // site data switch
    case SITE_TYPES.SET_MODAL_TYPE:
      console.log("SITE_TYPES.SET_MODAL_TYPE");
      const setModalType_state = cloneDeep(state.siteData);
      setModalType_state.activeModal = action.payload;
      setModalType_state.showModalFlag = true;
      return { ...state, siteData: { ...setModalType_state } };

    case SITE_TYPES.HIDE_MODAL:
      console.log("SITE_TYPES.HIDE_MODAL");
      const hideModal_state = cloneDeep(state.siteData);
      hideModal_state.showModalFlag = false;
      return { ...state, siteData: { ...hideModal_state } };

    case SITE_TYPES.SET_MODAL_DATA:
      console.log("SITE_TYPES.SET_MODAL_DATA");
      const setModalData_state = cloneDeep(state.siteData);
      setModalData_state.modalData = action.payload;
      return { ...state, siteData: { ...setModalData_state } };

    case SITE_TYPES.EDIT_MODAL_FORM_DATA:
      console.log("SITE_TYPES.EDIT_MODAL_FORM_DATA");
      const editModalFormData_state = cloneDeep(state.siteData);
      editModalFormData_state.modalData[action.payload.name] =
        action.payload.value;
      return { ...state, siteData: { ...editModalFormData_state } };

    case SITE_TYPES.RESET_MODAL_FORM_DATA:
      console.log("SITE_TYPES.RESET_MODAL_FORM_DATA");
      const resetModalFormData_state = cloneDeep(state.siteData);
      const resetModalFormData = state.monsterData.monsterList.find(
        (x) => x.id === action.payload
      );
      resetModalFormData_state.modalData = cloneDeep(resetModalFormData);
      return { ...state, siteData: resetModalFormData_state };

    // default
    default:
      console.log("default");
      return state;
  }
};

export default d20TasklistReducer;

/* -- REMEMBER TO UPDATE THIS COMMENT BLOCK FROM  context/D20TasklistContext.jsx -- */
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
