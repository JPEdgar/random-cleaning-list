import React, { useState, useEffect } from "react";

import { Row, Col } from "react-bootstrap";

import Task from "./Task";

import TasksList from "../../data/tasks.json";

const TaskList = () => {
  // id 0 = crit, which is pushed to the end of the array.
  // This will eventually be reformatted into a fuction to create a random list
  const reformattedTaskList = TasksList.filter((x) => x.id !== 0);
  reformattedTaskList.push(TasksList[0]);

  return (
    <>
      <Row>
        <Col xs={{ span: 4, offset: 2 }}>
          {reformattedTaskList &&
            reformattedTaskList.map(
              (task, index) =>
                index < 10 && (
                  <Task key={`task-${task.id}`} data={task} index={index} />
                )
            )}
        </Col>
        <Col xs={{ span: 4, offset: -2 }}>
          {reformattedTaskList &&
            reformattedTaskList.map(
              (task, index) =>
                index >= 10 && (
                  <Task key={`task-${task.id}`} data={task} index={index} />
                )
            )}
        </Col>
      </Row>
    </>
  );
};

export default TaskList;
