import React, { useState, useEffect } from "react";

import { Button, Modal, Form, Row, Col, InputGroup} from "react-bootstrap";

import EditIcon from "../elements/EditIcon";
import CloseIcon from "../elements/CloseIcon";
import useTaskDetails from "../../hooks/useTaskDetails";

const TaskDetailsModal = ({ focus = {}, show, handleClose }) => {
  const { toggleTaskCompletion, activateCrit, editFlag } = useTaskDetails();
  const [data, setData] = useState({});

  const focusID = focus.id;
  const completedFlag = focus.completed;
  const breakFlag = focus?.break?.takeBreakFlag;
  const multiplier = breakFlag ? focus?.break.multiplier : 0;
  const numerical = breakFlag ? focus?.break.numerical : 0;
  const modifier = numerical > 0 ? `+${numerical}` : numerical < 0 ? `-${numerical}` : 0;

  const handleClick = () => {
    if (focusID === 20) activateCrit();
    else toggleTaskCompletion(focus);
    handleClose();
  };

  const handleChange = (e) => { setData((curr) => ({ ...curr, [e.target.name]: e.target.value })); };

  const handleBreak = (e) => {
    let value;
    if (e.target.type === "checkbox") value = e.target.checked;
    else if (typeof e.target.value === "string")
      value = parseInt(e.target.value);
    else value = e.target.value;

    setData((curr) => {
      const tempBreakData = curr.break;
      tempBreakData[e.target.name] = value;
      return { ...curr, break: { ...tempBreakData } };
    });
  };

  const handleDiscardChanges = () => {
    setData({
      taskName: focus.taskName,
      details: focus.details,
      taskDamage: focus.taskDamage,
      break: {
        takeBreakFlag: focus.break.takeBreakFlag,
        multiplier: focus.break.multiplier,
        numerical: focus.break.numerical,
        modifier: focus.break.modifier,
      },
      completed: focus.completed,
      critFlag: focus.critFlag,
    });
  }

  const saveEditData = () => {
    //
  };

  const resetData = () => {
    setData({
      taskName: "",
      details: "",
      taskDamage: 0,
      break: {
        takeBreakFlag: false,
        multiplier: 0,
        numerical: 0,
        modifier: 0,
      },
      completed: false,
      critFlag: false,
    });
  };

  useEffect(() => { if (show) resetData(); }, [show]);

  useEffect(() => {
    if (!editFlag) resetData();
    else {
      setData({
        taskName: focus.taskName,
        details: focus.details,
        taskDamage: focus.taskDamage,
        break: {
          takeBreakFlag: focus.break.takeBreakFlag,
          multiplier: focus.break.multiplier,
          numerical: focus.break.numerical,
          modifier: focus.break.modifier,
        },
        completed: focus.completed,
        critFlag: focus.critFlag,
      });
    }
  }, [editFlag]);

  useEffect(() => { console.log(data); }, [data]);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered onSubmit={(e) => e.preventDefault()} >
        <Modal.Header style={{ backgroundColor: editFlag ? "mistyrose" : "" }}>
          <Modal.Title className="d-flex justify-content-between w-100">

            {editFlag && (
              <Form>
                <Form.Control name="taskName" value={data.taskName} onChange={handleChange} />
              </Form>
            )}

            {!editFlag && <div>{focus.taskName}</div>}

            <div className="d-flex">
              {!completedFlag && focusID !== 20 && <EditIcon />}
              <CloseIcon handleClose={handleClose} />
            </div>
          </Modal.Title>
        </Modal.Header>
        <div style={{ backgroundColor: editFlag ? "mistyrose" : "" }}>

          {focusID === 20 && ( <Modal.Body> This modifier will critical hit the boss on the next task. </Modal.Body> )}
          {focusID !== 20 && (
            <>

              {editFlag && (
                <Modal.Body>
                  <Form>
                    <Form.Group>
                      <Form.Control as="textarea" rows={3} name="details" value={data.details} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="my-1 h-100 d-flex align-items-end">
                      <Form.Label > Damage: </Form.Label>
                      <Form.Control type="number" name="taskDamage" value={data.taskDamage} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mt-2">
                      <Form.Check type="checkbox" label="Toggle break" checked={data.break.takeBreakFlag} name="takeBreakFlag" onChange={handleBreak} />
                    
                      {data.break.takeBreakFlag && (
                        <>
                          <Row>
                            
                            <Form.Group as={Col} xs={12} lg={4} className="mb-1" >
                              <Form.Label className="mb-0"> Number of Dice: </Form.Label>
                              <Form.Control type="number" name="multiplier" value={data.break.multiplier} onChange={handleBreak} />
                            </Form.Group>

                            <Form.Group as={Col} xs={12} lg={4} className="mb-1" >
                              <Form.Label className="mb-0"> Dice Sides: </Form.Label>
                              <Form.Select name="numerical" onChange={handleBreak} value={data.break.numerical} >
                                <option value="4">4</option>
                                <option value="6">6</option>
                                <option value="8">8</option>
                                <option value="10">10</option>
                                <option value="12">12</option>
                              </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} xs={12} lg={4} className="mb-1" >
                              <Form.Label className="mb-0">Modifier</Form.Label>
                              <Form.Control type="number" name="modifier" value={data.break.modifier} onChange={handleBreak} />
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
                  <Modal.Body>{focus.details}</Modal.Body>
                  <Modal.Body>{focus.taskDamage} points of damage.</Modal.Body>

                  {breakFlag && (
                    <Modal.Body> When task is completed, take a break for {multiplier}d{numerical}{modifier !== 0 && modifier} minutes </Modal.Body>
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

          {focusID === 20 && ( <Button onClick={() => handleClick()} variant="warning"> Score a critical hit? </Button> )}
          {focusID !== 20 &&

            (editFlag ? (<>
              <Button onClick={() => handleDiscardChanges()} variant="warning">Discard Changes</Button>
              <Button onClick={() => saveEditData()} variant="success"> Save Changes </Button>
            </>
            ) : (
              <Button onClick={() => handleClick()} variant={completedFlag ? "danger" : "primary"} >

                {completedFlag ? "Task is already completed.  Undo?" : "Complete Task"}

              </Button>
            ))}

        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TaskDetailsModal;
