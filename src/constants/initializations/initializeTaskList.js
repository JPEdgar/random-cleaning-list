import TaskData from "../../data/tasks.json";

const initializeTaskList = () => {
  // id 0 = crit, which is pushed to the end of the array.
  // This will eventually be reformatted into a fuction to create a random list
  const reformattedTaskList = TaskData.filter((x) => x.id !== 0);
  reformattedTaskList.push(TaskData[0]);

  return reformattedTaskList;
};
export default initializeTaskList;
