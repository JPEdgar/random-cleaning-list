import React, { useState, useEffect } from "react";

import { Modal, Form, Button, ButtonGroup } from "react-bootstrap";

import { useModalInfo } from "../../../hooks";

const MonsterModal = () => {
  const {
    hideModal,
    isModalOpenFlag,
    modalData,
    handleChange_MonsterModal,
    resetModalData,
    updateMonsterData,
    saveAndClose,
  } = useModalInfo();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    handleChange_MonsterModal(e);
  };

  const handleReset = (id) => {
    resetModalData(id);
  };

  const handleSave = (modalData) => {
    updateMonsterData(modalData);
  };

  const handleClose = () => {
    hideModal();
  };

  const handleSaveAndClose = (modalData) => {
    saveAndClose(modalData);
  };

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
            <Form.Control
              name="name"
              placeholder="Monster name"
              value={modalData?.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Monster Max Health:</Form.Label>
            <Form.Control
              name="maxHP"
              type="number"
              placeholder="Monster name"
              value={modalData?.maxHP}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Monster Online Image Link:</Form.Label>
            <Form.Control
              name="image"
              placeholder="Monster image url"
              value={modalData?.image}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
        {/* <button onClick={() => console.log("modalData = ", modalData)}>Log modal data</button> */}
        <div className="d-flex justify-content-between w-100">
          <Button
            size="sm"
            variant="warning"
            style={{ width: "100px" }}
            onClick={() => handleReset(modalData.id)}
          >
            Reset
          </Button>
          <div>
            <ButtonGroup className="mx-2">
              <Button
                variant="primary"
                size="sm"
                style={{ width: "80px" }}
                onClick={() => handleSave(modalData)}
              >
                Save
              </Button>
              <Button
                variant="info"
                size="sm"
                style={{ width: "120px" }}
                onClick={() => handleSaveAndClose(modalData)}
              >
                Save and Close
              </Button>
            </ButtonGroup>

            <Button
              size="sm"
              variant="secondary"
              style={{ width: "100px" }}
              onClick={() => handleClose()}
            >
              Close
            </Button>
          </div>
        </div>
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
