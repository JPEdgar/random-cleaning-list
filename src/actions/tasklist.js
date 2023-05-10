import * as api from "../api";

const getTasklist = async () => {
  try {
    const data = await api.getTasklist();
    return data;
  } catch (error) {
    return error.response.data;
  }
};

const createNewTasklist = async (token) => {
  try {
    const data = await api.createNewTasklist(token);
    return data;
  } catch (error) {
    return error.response.data;
  }
};

const updateTask = async (updatedTask, token) => {
  try {
    const data = await api.updateTask(updatedTask, token)
    return data
  } catch (error) {
    return error.response.data
  }
}

export { getTasklist, createNewTasklist, updateTask };
