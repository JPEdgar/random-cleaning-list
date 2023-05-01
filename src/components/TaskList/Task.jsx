import React, { useState, useEffect } from "react";

import EllipsisIcon from "../elements/EllipsisIcon";

const Task = ({ data, handleShow, setFocus }) => {
  const [taskData, setTaskData] = useState(null);
  const [hoverFlag, setHoverFlag] = useState(false);

  const style = {
    backgroundColor: hoverFlag ? "lightblue" : "white",
    cursor: "pointer",
    textDecoration: taskData?.completed ? "line-through" : "",
    borderRadius: "5px",
    height: "2rem",
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
      style={style}
      className="my-1 align-items-center d-flex"
    >
      <div
        className="d-inline-block text-end pe-2"
        style={{ width: "2.5rem" }}
        onClick={() => handleClick(taskData)}
      >
        {taskData?.break.takeBreakFlag && <span className="ps-0">*</span>}
        {taskData?.id}.
      </div>
      <div
        className="w-100 d-flex align-items-center justify-content-between"
        onClick={() => handleClick(taskData)}
      >
        <span>
          {taskData?.taskName}
          <span className="ms-1" style={{ fontSize: "0.75rem" }}>
            ({taskData?.taskDamage} damage)
          </span>
        </span>
      </div>
      <EllipsisIcon data={data}/>
    </div>
  );
};

export default Task;
