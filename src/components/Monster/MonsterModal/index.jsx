import React, { useState, useEffect } from "react";

import { Modal, Form } from "react-bootstrap";

import { useModalInfo } from "../../../hooks";

const MonsterModal = () => {
  const { hideModal, isModalOpenFlag, modalData, handleChange_MonsterModal } = useModalInfo();

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    handleChange_MonsterModal(e)
  }

  return (
    <Modal
      show={isModalOpenFlag}
      onHide={() => hideModal()}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit monster</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3">
            <Form.Label>Monster Name:</Form.Label>
            <Form.Control name="name" placeholder="Monster name" value={modalData?.name} onChange={handleChange} />
          </Form.Group>


        </Form>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
        {/* <button onClick={() => console.log("modalData = ", modalData)}>Log modal data</button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default MonsterModal;

/*
    id: String,
    name: String,
    maxHP: Int,
    image: String,
*/
