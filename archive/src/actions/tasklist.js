import * as api from "../api";

<<<<<<< HEAD
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
=======
const getTasklist = async () => {
   try {
      const data = await api.getTasklist();
      return data;
   } catch (error) {
      console.log(error.response.data);
      return error.response.data;
   }
};

const createNewTasklist = async (token) => {
   try {
      const data = await api.createNewTasklist(token);
      return data;
   } catch (error) {
      console.log(error.response.data);
      return error.response.data;
   }
};

const updateTask = async (updatedTask, token) => {
   try {
      const data = await api.updateTask(updatedTask, token);
      return data;
   } catch (error) {
      console.log(error.response.data);
      return error.response.data;
   }
};

const deleteTask = async (taskID, token) => {
   try {
      const data = await api.deleteTask(taskID, token);
      return data;
   } catch (error) {
      console.log(error.response.data);
      return error.response.data;
   }
};

const addTask = async (task, token) => {
   try {
      const data = await api.addTask(task, token);
      return data;
   } catch (error) {
      console.log(error.response.data);
      return error.response.data;
   }
};

export { getTasklist, createNewTasklist, updateTask, deleteTask, addTask };
>>>>>>> 9e267ef7f84e4822a7bf086b61705af43ed29ba9
