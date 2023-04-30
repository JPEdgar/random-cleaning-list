import React, { useState, useEffect } from "react";

const Task = ({ data, handleShow, setFocus }) => {
  const [taskData, setTaskData] = useState(null);
  const [hoverFlag, setHoverFlag] = useState(false);

  const style = {
    backgroundColor: hoverFlag ? "lightblue" : "white",
    cursor: "pointer",
    textDecoration: taskData?.completed ? "line-through" : "",
  };

  const handleMouseEnter = () => {
    setHoverFlag(true);
  };

  const handleMouseExit = () => {
    setHoverFlag(false);
  };

  const handleClick = (taskData) => {
    setFocus(taskData);
    handleShow();
  };

  useEffect(() => {
    if (data.id === 0) {
      let tempData = data;
      tempData.id = 20;
      setTaskData(tempData);
    } else {
      setTaskData(data);
    }
  }, [data]);

  return (
    <div
      onClick={() => handleClick(taskData)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
      style={style}
    >
      <span
        className="d-inline-block text-end pe-2"
        style={{ width: "2.5rem" }}
      >
        {taskData?.break.takeBreakFlag && <span className="ps-0">*</span>}
        {taskData?.id}.
      </span>
      <span>
        {taskData?.taskName}
        <span  className="ms-1" style={{ fontSize: "0.75rem" }}>
          ({taskData?.taskDamage} damage)
        </span>
      </span>
    </div>
  );
};

export default Task;
