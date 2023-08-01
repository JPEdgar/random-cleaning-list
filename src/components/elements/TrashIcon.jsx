import React, { useState } from "react";

import { Alert, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const TrashIcon = ({
  data,
  deleteCommand,
  closeCommand,
  monsterFlag = false,
  taskFlag = false,
}) => {
  const [showAlert, setShowAlert] = useState(false);
  const [hoverFlag, setHoverFlag] = useState(false);

  const temp = () => {
    //
  };

  const handleMouseEnter = () => {
    setHoverFlag(true);
  };

  const handleMouseExit = () => {
    setHoverFlag(false);
    setShowAlert(false);
  };

  const handleClick = () => {
    // handleClose();
    setShowAlert(true);
  };

  const hideAlert = () => {
    setShowAlert(false);
  };

  const handleDelete = () => {
    // deleteCommand(task.id);
    handleClose();
  };

  const handleClose = () => {
    hideAlert();
    //  closeCommand();
  };

  const style = {
    cursor: "pointer",
    fontSize: "1.5rem",
    color: hoverFlag ? "red" : "gray",
  };

  return (
    <div
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseExit()}
      style={style}
      className="mx-1"
    >
      <FontAwesomeIcon icon={faTrashCan} onClick={() => handleClick()} />

      {/* {showAlert && taskFlag && (
        <Alert variant="warning">
          <Alert.Heading>Confirm you want to delete this task</Alert.Heading>
          <p>Do you really want to delete {data.name}?</p>
          <hr />
          <p className="mb-0">
            <Button variant="danger" onClick={() => handleDelete()}>
              Confirm
            </Button>
            <Button onClick={() => hideAlert()}>Exit</Button>
          </p>
        </Alert>
      )} */}

      {showAlert && monsterFlag && (
        <Alert variant="warning">
          <Alert.Heading>Confirm you want to delete this monster</Alert.Heading>
          <p>Do you really want to delete {data?.name}?</p>
          <hr />
          <p className="mb-0">
            <Button variant="danger" onClick={() => handleDelete()}>
              Confirm
            </Button>
            <Button onClick={() => handleClose()}>Exit</Button>
          </p>
        </Alert>
      )}
    </div>
  );
};

export default TrashIcon;
