import React, { useState } from "react";

import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const SkullIcon = ({ setFocus, handleShow, data }) => {
  const [modalShow, setModalShow] = useState(false);

  const breakFlag = data?.break?.takeBreakFlag;
  const multiplier = breakFlag ? data?.break.breakTimer.multiplier : 0;
  const numerical = breakFlag ? data?.break.breakTimer.numerical : 0;
  const modifier =
    numerical > 0 ? `+${numerical}` : numerical < 0 ? `-${numerical}` : 0;

  const handleClick = () => {
    setModalShow(true);
  };

  const handleClose = () => {
    setModalShow(false);
  };

  return (
    <>
      <FontAwesomeIcon
        style={{
          fontSize: "10px",
          height: "1.75em",
        }}
        icon={faEllipsis}
        className="me-2 p-1"
        onClick={() => handleClick()}
      />

      <Modal
        size="lg"
        centered
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>{data.taskName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{data.details}</Modal.Body>
        <Modal.Body>{data.taskDamage} points of damage.</Modal.Body>
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
            onClick={() => handleClick()}
            variant={data.completed ? "danger" : "primary"}
          >
            {data.completed
              ? "Task is already completed.  Undo?"
              : "Complete Task"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SkullIcon;
