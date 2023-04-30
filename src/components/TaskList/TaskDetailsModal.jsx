import React from "react";

import { Button, Modal } from "react-bootstrap";

const TaskDetailsModal = ({ focus = {}, show, handleClose }) => {
  console.log("focus = ", focus);
  const breakFlag = focus?.break?.takeBreakFlag;
  const multiplier = breakFlag ? focus?.break.breakTimer.multiplier : 0;
  const numerical = breakFlag ? focus?.break.breakTimer.numerical : 0;
  const modifier =
    numerical > 0 ? `+${numerical}` : numerical < 0 ? `-${numerical}` : 0;

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{focus.taskName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{focus.details}1</Modal.Body>
        <Modal.Body>{focus.taskDamage} points of damage.</Modal.Body>
        {breakFlag && (
          <Modal.Body>
            When task is completed, take a break for {multiplier}d{numerical}
            {modifier !== 0 && modifier} minutes
          </Modal.Body>
        )}

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Complete Task
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TaskDetailsModal;
