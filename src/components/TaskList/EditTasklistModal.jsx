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
         <Modal.Header>...</Modal.Header>
         
      </Modal>
   );
};

export default EditTasklistModal;
