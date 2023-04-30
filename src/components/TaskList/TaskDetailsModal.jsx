import React from "react";

import { Button, Modal } from "react-bootstrap";

import useTaskDetails from "../../hooks/useTaskDetails";

const TaskDetailsModal = ({ focus = {}, show, handleClose }) => {
  const { toggleTaskCompletion } = useTaskDetails();

  const breakFlag = focus?.break?.takeBreakFlag;
  const multiplier = breakFlag ? focus?.break.breakTimer.multiplier : 0;
  const numerical = breakFlag ? focus?.break.breakTimer.numerical : 0;
  const modifier =
    numerical > 0 ? `+${numerical}` : numerical < 0 ? `-${numerical}` : 0;

  const handleClick = () => {
    toggleTaskCompletion(focus);
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{focus.taskName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{focus.details}</Modal.Body>
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
          <Button
            onClick={handleClick}
            variant={focus.completed ? "danger" : "primary"}
          >
            {focus.completed
              ? "Task is already completed.  Undo?"
              : "Complete Task"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TaskDetailsModal;
