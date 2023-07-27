import React from "react";

import { Card, Row, Col } from "react-bootstrap";

import { useBreakpoints } from "../../hooks";

const Task = ({ taskData, index }) => {
  const { getBreakpoint } = useBreakpoints();
  //   console.log(taskData);

  return (
    <>
      <Row onClick={() => console.log(getBreakpoint())} className="testRow">
        <Col xs={12} md={6}>
          <div style={{ width: "20px" }}>{index}.</div>
          {taskData.taskName}
        </Col>

        {index !== 20 && (
          <Col xs={12} md={5}>
            {taskData.taskDamage} damage
          </Col>
        )}
      </Row>
    </>
  );
};

export default Task;
