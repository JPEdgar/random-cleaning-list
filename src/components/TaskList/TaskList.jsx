import React, { useState, useEffect } from "react";

import { Row, Col } from "react-bootstrap";

import Task from "./Task";
import TaskDetailsModal from "./TaskDetailsModal";
import { useTaskDetails } from "../../hooks";

const TaskList = () => {
  const { taskList } = useTaskDetails();
  const [focus, setFocus] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <TaskDetailsModal
        show={show}
        handleClose={() => handleClose()}
        handleShow={() => handleShow()}
        focus={focus}
      />
      <Row>
        <Col xs={{ span: 4, offset: 2 }}>
          {taskList.map(
            (task, index) =>
              index < 10 && (
                <Task
                  key={`task-${task.id}`}
                  data={task}
                  handleShow={handleShow}
                  setFocus={setFocus}
                />
              )
          )}
        </Col>
        <Col xs={{ span: 4, offset: -2 }}>
          {taskList.map(
            (task, index) =>
              index >= 10 && (
                <Task
                  key={`task-${task.id}`}
                  data={task}
                  handleShow={handleShow}
                  setFocus={setFocus}
                />
              )
          )}
        </Col>
      </Row>
    </>
  );
};

export default TaskList;
