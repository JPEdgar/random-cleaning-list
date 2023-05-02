import React, { useState, useEffect } from "react";

import { Row, Col, Alert, Button } from "react-bootstrap";

import Task from "./Task";
import TaskDetailsModal from "./TaskDetailsModal";
import { useTaskDetails, useMonsterDetails } from "../../hooks";

const TaskList = () => {
  const { taskList, critFlag, setEditFlag } = useTaskDetails();
  const { monsterDetails } = useMonsterDetails();
  const [focus, setFocus] = useState({});
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleClose = () => {
    setEditFlag(false)
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const hideAlert = () => { setShowAlert(false); };

  useEffect(() => {
    if (monsterDetails.currentDamage >= monsterDetails.maxHP)
      setShowAlert(true);
  }, [monsterDetails]);

  return (
    <div style={{ border: critFlag ? "5px solid red" : "" }} className="p-1">
      <TaskDetailsModal show={show} handleClose={() => handleClose()} handleShow={() => handleShow()} focus={focus} />

      {showAlert && (
        <Alert variant="warning">
          <Alert.Heading>You've killed the chore monster!</Alert.Heading>
          <p>You're done for the day. Take it easy. Relax. You've earned it.</p>
          <hr />
          <p className="mb-0">
            <Button onClick={() => hideAlert()}>Continue</Button>
          </p>
        </Alert>
      )}

      {!showAlert && (
        <Row>
          <Col xs={{ span: 4, offset: 2 }}>
            {taskList.taskList.map( (task, index) => index < 10 && ( <Task key={`task-${task.id}`} data={task} handleShow={handleShow} setFocus={setFocus} /> ) )}
          </Col>
          <Col xs={{ span: 4, offset: -2 }}>
            {taskList.taskList.map( (task, index) => index >= 10 && ( <Task key={`task-${task.id}`} data={task} handleShow={handleShow} setFocus={setFocus} /> ) )}
          </Col>
        </Row>
      )}
    </div>
  );
};

export default TaskList;
