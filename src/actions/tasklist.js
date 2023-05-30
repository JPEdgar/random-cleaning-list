import * as api from "../api";

const getAllData = async () => {
  try {
    const data = await api.getAllData();
    return data;
  } catch (error) {
    return error;
  }
};

const saveAllData = async (state) => {
  try {
    const data = await api.saveAllData(state);
    return data;
  } catch (error) {
    return error;
  }
};

const updateMonsterData = async (updatedMonsterData) => {
  try {
    const data = await api.updateMonsterData(updatedMonsterData);
    return data;
  } catch (error) {
    return error;
  }
}

export { getAllData, saveAllData, updateMonsterData };
