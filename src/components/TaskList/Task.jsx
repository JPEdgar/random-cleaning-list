import React, { useState, useEffect } from "react";

const Task = ({ data, handleShow }) => {
  const [taskData, setTaskData] = useState(null);
  const [hoverFlag, setHoverFlag] = useState(false);

  const style = {
    backgroundColor: hoverFlag ? "lightblue" : "white",
    cursor: "pointer",
  };

  const handleMouseEnter = () => {
    setHoverFlag(true);
  };

  const handleMouseExit = () => {
    setHoverFlag(false);
  };

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
    <div
      onClick={handleShow}
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
      <span>{taskData?.taskName}</span>
    </div>
  );
};

export default Task;
