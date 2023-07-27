import React from "react";

import { Row, Col } from "react-bootstrap";

import { useAssignMonster, useTasklist } from "../../hooks";
import Task from "./Task";

const Tasklist = () => {
  const { isAssignedFlag } = useAssignMonster();
  const { tasklist } = useTasklist();

  return (
    <>
      <Row>
        <Col>
          {isAssignedFlag && (
            <>
              {tasklist.map((taskData, index) =>
                index > 0 && index <= 10 ? (
                  <Task
                    key={`task-${taskData.id}`}
                    taskData={taskData}
                    index={index}
                  />
                ) : null
              )}
            </>
          )}
        </Col>
        <Col>
          {isAssignedFlag && (
            <>
              {tasklist.map((taskData, index) =>
                index > 10 ? (
                  <Task
                    key={`task-${taskData.id}`}
                    taskData={taskData}
                    index={index}
                  />
                ) : null
              )}
              <Task taskData={tasklist[0]} index={20} />
            </>
          )}
        </Col>
      </Row>
    </>
  );
};

export default Tasklist;
