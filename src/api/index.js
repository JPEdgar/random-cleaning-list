// This file would hold all backend calls.
// Since there is no backend, logic for "backend" will be done here.
// Example axios call shown in a comment above function.
// Examples are untested and assuming authentication is needed.

// import axios from "axios";

// import initializeTasklist from "../constants/initializations/initializeTasklist";

import { cloneDeep } from "../utilities";

const STORAGE_NAME = "d20-tasklist-data";
// const BASE_URL = "http://some-website.com/api";
// const tasklistURL = `${BASE_URL}/tasklist`;

const getAllData = async () => {
  return await JSON.parse(localStorage.getItem(STORAGE_NAME));
};

const saveAllData = async (data) => {
  localStorage.setItem(STORAGE_NAME, JSON.stringify(data));
};

const updateMonsterData = async (updatedMonsterData) => {
  const state = await getAllData();
  const newMonsterData = cloneDeep(state.monsterData);
  newMonsterData.monsterList = state.monsterData.monsterList.map((x) => x.id === updatedMonsterData.id ? updatedMonsterData : x );
  const updatedState = { ...state, monsterData: newMonsterData };
  localStorage.setItem(STORAGE_NAME, JSON.stringify(updatedState));
  return updatedState;
};

export { getAllData, saveAllData, updateMonsterData };
