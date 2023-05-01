import React, {useState} from "react";

import { Button, Modal } from "react-bootstrap";

import EditIcon from "../elements/EditIcon";
import CloseIcon from "../elements/CloseIcon";
import useTaskDetails from "../../hooks/useTaskDetails";

const TaskDetailsModal = ({ focus = {}, show, handleClose }) => {
 
  const { toggleTaskCompletion, activateCrit ,editFlag, setEditFlag} = useTaskDetails();

  const focusID = focus.id;
  const completedFlag = focus.completed;
  const breakFlag = focus?.break?.takeBreakFlag;
  const multiplier = breakFlag ? focus?.break.breakTimer.multiplier : 0;
  const numerical = breakFlag ? focus?.break.breakTimer.numerical : 0;
  const modifier = numerical > 0 ? `+${numerical}` : numerical < 0 ? `-${numerical}` : 0;

  const handleClick = () => {
    if (focusID === 20) activateCrit();
    else toggleTaskCompletion(focus);
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered >
        <Modal.Header style={{ backgroundColor: editFlag ? "mistyrose" : "" }}>
          <Modal.Title className="d-flex justify-content-between w-100">
            <div>{focus.taskName}</div>
            <div className="d-flex">
              {!completedFlag && <EditIcon/>}
              <CloseIcon handleClose={handleClose} />
            </div>
          </Modal.Title>
        </Modal.Header>
        <div style={{ backgroundColor: editFlag ? "mistyrose" : "" }} >
        {focusID === 20 && ( <Modal.Body> This modifier will critical hit the boss on the next task. </Modal.Body> )}
        {focusID !== 20 && (
          <>
            <Modal.Body>{focus.details}</Modal.Body>
            <Modal.Body>{focus.taskDamage} points of damage.</Modal.Body>
            {breakFlag && (
              <Modal.Body>
                When task is completed, take a break for {multiplier}d
                {numerical} {modifier !== 0 && modifier} minutes
              </Modal.Body>
            )}
          </>
        )}
        </div>
        <Modal.Footer style={{ backgroundColor: editFlag ? "mistyrose" : "" }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {focusID === 20 && (
            <Button onClick={() => handleClick()} variant="warning">
              Score a critical hit?
            </Button>
          )}
          {focusID !== 20 && (
            <Button
              onClick={() => handleClick()}
              variant={completedFlag ? "danger" : "primary"}
            >
              {completedFlag
                ? "Task is already completed.  Undo?"
                : "Complete Task"}
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TaskDetailsModal;
