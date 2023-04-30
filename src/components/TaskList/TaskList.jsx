import React, { useState, useEffect } from "react";

import { Row, Col } from "react-bootstrap";

import Task from "./Task";
import TaskDetailsModal from "./TaskDetailsModal";

import TasksList from "../../data/tasks.json";

const TaskList = () => {
  // id 0 = crit, which is pushed to the end of the array.
  // This will eventually be reformatted into a fuction to create a random list
  const reformattedTaskList = TasksList.filter((x) => x.id !== 0);
  reformattedTaskList.push(TasksList[0]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <TaskDetailsModal
        show={show}
        handleClose={() => handleClose()}
        handleShow={() => handleShow()}
      />
      <Row>
        <Col xs={{ span: 4, offset: 2 }}>
          {reformattedTaskList &&
            reformattedTaskList.map(
              (task, index) =>
                index < 10 && (
                  <Task key={`task-${task.id}`} data={task} index={index} handleShow={() => handleShow()}/>
                )
            )}
        </Col>
        <Col xs={{ span: 4, offset: -2 }}>
          {reformattedTaskList &&
            reformattedTaskList.map(
              (task, index) =>
                index >= 10 && (
                  <Task key={`task-${task.id}`} data={task} index={index} handleShow={() => handleShow()}/>
                )
            )}
        </Col>
      </Row>
    </>
  );
};

export default TaskList;
