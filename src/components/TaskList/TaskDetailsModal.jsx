import React, { useState, useEffect } from "react";

import { Button, Modal, Form, Row, Col, InputGroup } from "react-bootstrap";

import CloseIcon from "../elements/CloseIcon";
import EditIcon from "../elements/EditIcon";
import { useTaskDetails } from "../../hooks";

const TaskDetailsModal = ({ focus = {}, show, handleClose }) => {
  const {
    editFlag,
    setEditFlag,
    activateCrit,
    toggleTaskCompletion,
    updateTask,
  } = useTaskDetails();

  const [editData, setEditData] = useState(focus);
  const [modalData, setModalData] = useState(focus);

  const handleClick = () => {
    if (focus.id === 20) activateCrit();
    else toggleTaskCompletion(modalData);
    handleClose();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "taskDamage") value = parseInt(e.target.value);
    setEditData((curr) => ({ ...curr, [name]: value }));
  };

  const handleBreak = (e) => {
    let value;
    if (e.target.type === "checkbox") value = e.target.checked;
    else if (typeof e.target.value === "string")
      value = parseInt(e.target.value);
    else value = e.target.value;

    setEditData((curr) => {
      const tempBreakData = curr.break;
      tempBreakData[e.target.name] = value;
      return { ...curr, break: { ...tempBreakData } };
    });
  };

  const handleDiscardChanges = () => {
    setEditData(modalData);
  };

  const saveEditData = () => {
    updateTask(editData);
    setModalData(editData);
    setEditFlag(false);
  };

  const getModifierValue = (value) => {
    return value > 0 ? `+${value}` : value < 0 ? value : 0;
  };

  useEffect(() => {
    setModalData(focus);
    setEditData(focus);
  }, [focus]);

  useEffect(() => {
    if (editFlag) setEditData(modalData);
  }, [editFlag]);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      onSubmit={(e) => e.preventDefault()}
    >
      <Modal.Header style={{ backgroundColor: editFlag ? "mistyrose" : "" }}>
        <Modal.Title className="d-flex justify-content-between w-100">
          {editFlag && (
            <Form>
              <Form.Control
                name="taskName"
                value={editData.taskName}
                onChange={handleChange}
              />
            </Form>
          )}

          {!editFlag && <div>{modalData.taskName}</div>}

          <div className="d-flex">
            {!modalData.completed && focus.id !== 20 && <EditIcon />}
            <CloseIcon handleClose={handleClose} />
          </div>
        </Modal.Title>
      </Modal.Header>
      <div style={{ backgroundColor: editFlag ? "mistyrose" : "" }}>
        {focus.id === 20 && (
          <Modal.Body>
            This modifier will critical hit the boss on the next task.
          </Modal.Body>
        )}
        {focus.id !== 20 && (
          <>
            {editFlag && (
              <Modal.Body>
                <Form>
                  <Form.Group>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="details"
                      value={editData.details}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="my-1 h-100 d-flex align-items-end">
                    <Form.Label> Damage: </Form.Label>
                    <Form.Control
                      type="number"
                      name="taskDamage"
                      value={editData.taskDamage}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mt-2">
                    <Form.Check
                      type="checkbox"
                      label="Toggle break"
                      checked={editData.break?.takeBreakFlag}
                      name="takeBreakFlag"
                      onChange={handleBreak}
                    />

                    {editData.break?.takeBreakFlag && (
                      <>
                        <Row>
                          <Form.Group as={Col} xs={12} lg={4} className="mb-1">
                            <Form.Label className="mb-0">
                              Number of Dice:
                            </Form.Label>
                            <Form.Control
                              type="number"
                              name="multiplier"
                              value={editData.break.multiplier}
                              onChange={handleBreak}
                            />
                          </Form.Group>

                          <Form.Group as={Col} xs={12} lg={4} className="mb-1">
                            <Form.Label className="mb-0">
                              Dice Sides:
                            </Form.Label>
                            <Form.Select
                              name="numerical"
                              onChange={handleBreak}
                              value={editData.break.numerical}
                            >
                              <option value="4">4</option>
                              <option value="6">6</option>
                              <option value="8">8</option>
                              <option value="10">10</option>
                              <option value="12">12</option>
                            </Form.Select>
                          </Form.Group>

                          <Form.Group as={Col} xs={12} lg={4} className="mb-1">
                            <Form.Label className="mb-0">Modifier</Form.Label>
                            <Form.Control
                              type="number"
                              name="modifier"
                              value={editData.break.modifier}
                              onChange={handleBreak}
                            />
                          </Form.Group>
                        </Row>
                      </>
                    )}
                  </Form.Group>
                </Form>
              </Modal.Body>
            )}

            {!editFlag && (
              <>
                <Modal.Body>{modalData.details}</Modal.Body>
                <Modal.Body>
                  {modalData.taskDamage} points of damage.
                </Modal.Body>

                {modalData.break?.takeBreakFlag && (
                  <Modal.Body>
                    When task is completed, take a break for
                    <span className="mx-1">
                      {modalData.break.multiplier}d{modalData.break.numerical}
                      {modalData.break.modifier !== 0 &&
                        getModifierValue(modalData.break.modifier)}
                    </span>
                    minutes
                  </Modal.Body>
                )}
              </>
            )}
          </>
        )}
      </div>
      <Modal.Footer style={{ backgroundColor: editFlag ? "mistyrose" : "" }}>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>

        {focus.id === 20 && (
          <Button onClick={() => handleClick()} variant="warning">
            Score a critical hit?
          </Button>
        )}
        {focus.id !== 20 &&
          (editFlag ? (
            <>
              <Button onClick={() => handleDiscardChanges()} variant="warning">
                Discard Changes
              </Button>
              <Button onClick={() => saveEditData()} variant="success">
                Save Changes
              </Button>
            </>
          ) : (
            <Button
              onClick={() => handleClick()}
              variant={modalData.completed ? "danger" : "primary"}
            >
              {modalData.completed
                ? "Task is already completed.  Undo?"
                : "Complete Task"}
            </Button>
          ))}
      </Modal.Footer>
    </Modal>
  );
};

export default TaskDetailsModal;
