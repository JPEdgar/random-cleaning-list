import React from "react";

import { Modal, Button } from "react-bootstrap";

const EditTasklistModal = ({ show, handleClose }) => {
   return (
      <Modal
         show={show}
         onHide={handleClose}
         centered
         onSubmit={(e) => e.preventDefault()}
      >
         <Modal.Header>Edit Tasklist</Modal.Header>
         <Modal.Body>Add a new task</Modal.Body>
         <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
               Close
            </Button>
         </Modal.Footer>
      </Modal>
   );
};

export default EditTasklistModal;
