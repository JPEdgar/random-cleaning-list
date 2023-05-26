import * as api from "../api";

const getAllData = async () => {
  try {
    const data = await api.getAllData();
    return data;
  } catch (error) {
    return error;
  }
};

const getMonsterList = async () => {
  try {
    const data = await api.getMonsterList();
    console.log("actions/tasklist > getMonsterList > data = ", data);
    return data;
  } catch (error) {
    console.log("getMonsterList error");
    return error;
  }
};

export { getAllData, getMonsterList };
