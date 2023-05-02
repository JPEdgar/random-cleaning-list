import TaskData from "../../data/tasks.json";

const initializeTaskList = () => {
  // const savedTaskList = localStorage.getItem("d20-task-list");
  // console.log("savedTaskList = ", savedTaskList);
  // if (savedTaskList) return JSON.parse(savedTaskList);

  // id 0 = crit, which is pushed to the end of the array.
  // This will eventually be reformatted into a fuction to create a random list
  const reformattedTaskList = TaskData.filter((x) => x.id !== 0);
  reformattedTaskList.push(TaskData[0]);

  // console.log("reformattedTaskList = ", reformattedTaskList);

  // localStorage.setItem("d20-task-list", JSON.stringify(reformattedTaskList));
  return reformattedTaskList;
};
export default initializeTaskList;
