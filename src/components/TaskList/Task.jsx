import React, { useState, useEffect } from "react";

import { Row, Col, Stack } from "react-bootstrap";

const Task = ({ data, handleShow, setFocus }) => {
  const [taskData, setTaskData] = useState(null);
  const [hoverFlag, setHoverFlag] = useState(false);

  const style = {
    backgroundColor: hoverFlag ? "lightblue" : "white",
    cursor: "pointer",
    lineHeight: "0.9rem",
    borderRadius: "5px",
    height: "2.25rem",
  };

  const strikeThroughStyle = {
    textDecoration: taskData?.completed ? "line-through" : "",
  };

  const handleMouseEnter = () => { setHoverFlag(true); };

  const handleMouseExit = () => { setHoverFlag(false); };

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
    <Stack direction="horizontal" className="my-1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} onClick={() => handleClick(taskData)} style={style} >
      <div className="d-inline-block text-end pe-2" style={{ width: "2.5rem" }}>
        {taskData?.break.takeBreakFlag && <span>*</span>}
        {taskData?.id}.
      </div>

      <Row className="w-100 " style={strikeThroughStyle}>
        <Col xs={12} lg={7}>
          <div>{taskData?.taskName}</div>
        </Col>
        <Col xs={0} md={12} lg={5} className="d-none d-md-flex">
          <div style={{ fontSize: "0.75rem" }}>
            ({taskData?.taskDamage}
            <span className="ms-1">damage</span>)
          </div>
        </Col>
      </Row>
    </Stack>
  );
};

export default Task;
