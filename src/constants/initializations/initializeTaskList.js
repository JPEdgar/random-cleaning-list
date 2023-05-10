import TaskData from "../../data/tasks.json";

const initializeTasklist = () => {
  // id 0 = crit, which is pushed to the end of the array.
  // This will eventually be reformatted into a fuction to create a random list
  const reformattedTasklist = TaskData.filter((x) => x.id !== 0);
  reformattedTasklist.push(TaskData[0]);

  return reformattedTasklist;
};
export default initializeTasklist;
