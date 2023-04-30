import React, { useState, useEffect } from "react";

import { Row, Col } from "react-bootstrap";

import Task from "./Task";
import TaskDetailsModal from "./TaskDetailsModal";

import TaskData from "../../constants/initializations/initializeTaskList";

const TaskList = () => {
  const [taskList, setTaskList] = useState([]);
  const [focus, setFocus] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // id 0 = crit, which is pushed to the end of the array.
    // This will eventually be reformatted into a fuction to create a random list
    const reformattedTaskList = TaskData.filter((x) => x.id !== 0);
    reformattedTaskList.push(TaskData[0]);

    setTaskList(reformattedTaskList);
  }, []);

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
