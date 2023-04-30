import React, { useState, useEffect } from "react";

const Task = ({ data, index }) => {
  const [taskData, setTaskData] = useState(null);

  useEffect(() => {
    if (data.id === 0) {
      let tempData = data;
      tempData.id = 20;
      setTaskData(tempData);
    } else {
      setTaskData(data);
    }
  }, []);

  return (
    <>
      <p>
        <span
          className="d-inline-block text-end pe-2"
          style={{ width: "2.5rem" }}
        >
          {taskData?.break.takeBreakFlag && <span className="ps-0">*</span>}
          {taskData?.id}.
        </span>
        <span>{taskData?.taskName}</span>
      </p>
    </>
  );
};

export default Task;
