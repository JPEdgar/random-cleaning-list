import React, { useState } from "react";

import { Alert, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const TrashIcon = ({ task, deleteCommand, closeCommand }) => {
   const [showAlert, setShowAlert] = useState(false);
   const [hoverFlag, setHoverFlag] = useState(false);

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

   const deleteTask = () => {
      deleteCommand(task.id);
      handleClose()
   };

   const handleClose = () => {
      hideAlert();
      closeCommand();
   };

   const style = {
      cursor: "pointer",
      fontSize: "1.5rem",
      color: hoverFlag ? "red" : "gray",
   };

   return (
      <div
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseExit}
         onClick={() => handleClick()}
         style={style}
         className="mx-1"
      >
         <FontAwesomeIcon icon={faTrashCan} />

         {showAlert && (
            <Alert variant="warning">
               <Alert.Heading>
                  Confirm you want to delete this task
               </Alert.Heading>
               <p>Do you really want to delete {task.taskName}?</p>
               <hr />
               <p className="mb-0">
                  <Button variant="danger" onClick={() => deleteTask()}>
                     Confirm
                  </Button>
                  <Button onClick={() => hideAlert()}>Exit</Button>
               </p>
            </Alert>
         )}
      </div>
   );
};

export default TrashIcon;
