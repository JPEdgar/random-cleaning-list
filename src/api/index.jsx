/*
state: {
  incriment: Number
  tasklist: [{
    "id": Number,
    "taskName": String,
    "details": String,
    "taskDamage": Number,
    "break": {
      "takeBreakFlag": Boolean,
      "multiplier": Number,
      "numerical": Number,
      "modifier": Number
    },
    "completed": Boolean,
    "critFlag": Boolean,
    "priority": Enum, // ["low, med, hi"]
    "room": String,
    "frequency": { 
      "multiplier": Number, 
      "numerical": Number, 
      "modifier": Number 
    }
  }],
  monster: {
    "id": Number,
    "name": String,
    "maxHP": Number,
    "image": String,
    "dead": String"
  }
}
*/

// This file would hold all backend calls.
// Since there is no backend, logic for "backend" will be done here.
// Example axios call shown in a comment above function.
// Examples are untested and assuming authentication is needed.

// import axios from "axios";

import initializeTasklist from "../constants/initializations/initializeTaskList";

const STORAGE_NAME = "d20-tasklist";
// const BASE_URL = "http://some-website.com/api";
// const tasklistURL = `${BASE_URL}/tasklist`;

// tasklist
// const getTasklist = async (token = "") => axios.get(`${tasklistURL}/`, { headers: { Authorization: `bearer ${token}` }, });
const getTasklist = async (token = "") =>
   await JSON.parse(localStorage.getItem(STORAGE_NAME));

// const createNewTasklist = async (token = "") => axios.post(tasklistURL, { headers: { Authorization: `bearer ${token}` } });
const createNewTasklist = async (token = "") => {
   const newTasklist = await initializeTasklist();
   localStorage.setItem(
      STORAGE_NAME,
      JSON.stringify({ tasklist: newTasklist, incrementor: newTasklist.length })
   );
   return { tasklist: newTasklist, incrementor: newTasklist.length };
};

// const updateTask = async (task = {}, token = "") => axios.patch(`${tasklistURL}/update-task`, { headers: { Authorization: `bearer ${token}` }, data: task, });
const updateTask = async (task = {}, token = "") => {
   const tasklistState = await getTasklist();
   const newTasklist = tasklistState.tasklist.map((x) =>
      x.id === task.id ? task : x
   );
   const newState = { ...tasklistState, tasklist: newTasklist };
   localStorage.setItem(STORAGE_NAME, JSON.stringify(newState));
   return newState;
};

export { getTasklist, createNewTasklist, updateTask };

// const createNewTaskList = async (tasklist = [], token = "") => axios.post(tasklistURL, { headers: { Authorization: `bearer ${token}` }, data: tasklist, });
// const deleteTasklist = async (token = "") => axios.delete(tasklistURL, { headers: { Authorization: `bearer ${token}` } });

// tasks
// const getTask = async (query = "", token = "") => axios.get(`${tasklistURL}/get-task`, { params: query, headers: { Authorization: `bearer ${token}` }, });
// const deleteTask = async (taskID = "", token = "") => axios.delete(`${tasklistURL}/delete-task`, { headers: { Authorization: `bearer ${token}` }, data: { taskID }, });
// const createTask = async (task = {}, token = "") => axios.patch(`${tasklistURL}/create-task`, { headers: { Authorization: `bearer ${token}` }, data: task, });

//   createNewTaskList,
//   deleteTasklist,
//   getTask,
//   deleteTask,
//   updateTask,
//   createTask,
