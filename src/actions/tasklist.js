import * as api from "../api";

const getAllData = async () => {
  try {
    const data = await api.getAllData();
    return data;
  } catch (error) {
    return error;
  }
};

export { getAllData };
