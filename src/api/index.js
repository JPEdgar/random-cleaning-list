// This file would hold all backend calls.
// Since there is no backend, logic for "backend" will be done here.
// Example axios call shown in a comment above function.
// Examples are untested and assuming authentication is needed.

// import axios from "axios";

// import initializeTasklist from "../constants/initializations/initializeTasklist";

const STORAGE_NAME = "d20-tasklist-data";
// const BASE_URL = "http://some-website.com/api";
// const tasklistURL = `${BASE_URL}/tasklist`;

const getAllData = async () => {
  return await JSON.parse(localStorage.getItem(STORAGE_NAME));
};

export { getAllData };
