// This file would hold all backend calls.
// Since there is no backend, logic for "backend" will be done here.
// Example axios call shown in a comment above function.
// Examples are untested and assuming authentication is needed.

// import axios from "axios";

import initializeTasklist from "../constants/initializations/initializeTasklist";

const STORAGE_NAME = "d20-tasklist";
// const BASE_URL = "http://some-website.com/api";
// const tasklistURL = `${BASE_URL}/tasklist`;

// tasklist
// const getTasklist = async (token = "") => axios.get(`${tasklistURL}/`, { headers: { Authorization: `bearer ${token}` }, });
const getTasklist = async (token = "") =>
  JSON.parse(localStorage.getItem(STORAGE_NAME));

// const createNewTasklist = async (token = "") => axios.post(tasklistURL, { headers: { Authorization: `bearer ${token}` } });
const createNewTasklist = async (token = "") => {
  const newTasklist = initializeTasklist();
  localStorage.setItem(
    "d20-task-list",
    JSON.stringify({ tasklist: newTasklist, incrementor: newTasklist.length })
  );
  return { tasklist: newTasklist, incrementor: newTasklist.length };
};

// const createNewTaskList = async (tasklist = [], token = "") => axios.post(tasklistURL, { headers: { Authorization: `bearer ${token}` }, data: tasklist, });
// const deleteTasklist = async (token = "") => axios.delete(tasklistURL, { headers: { Authorization: `bearer ${token}` } });

// tasks
// const getTask = async (query = "", token = "") => axios.get(`${tasklistURL}/get-task`, { params: query, headers: { Authorization: `bearer ${token}` }, });
// const deleteTask = async (taskID = "", token = "") => axios.delete(`${tasklistURL}/delete-task`, { headers: { Authorization: `bearer ${token}` }, data: { taskID }, });
// const createTask = async (task = {}, token = "") => axios.patch(`${tasklistURL}/create-task`, { headers: { Authorization: `bearer ${token}` }, data: task, });
// const updateTask = async (task = {}, token = "") => axios.patch(`${tasklistURL}/update-task`, { headers: { Authorization: `bearer ${token}` }, data: task, });
const updateTask = async (task = {}, token = "") => {
  // const tasklist = getTasklist()
  // const updatedTasklist = tasklist.map(x => x.id === task.id ? task : x)
}

export {
  getTasklist,
  createNewTasklist,
  //   createNewTaskList,
  //   deleteTasklist,
  //   getTask,
  //   deleteTask,
  //   updateTask,
  //   createTask,
};
