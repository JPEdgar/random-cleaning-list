import React, { useState } from "react";

import { Modal, Button, Form, Row, Col } from "react-bootstrap";

import { useTaskDetails } from "../../hooks";

const AddTaskModal = ({ show, handleClose, setModalType }) => {
   const [formData, setFormData] = useState({
      taskName: "",
      details: "",
      taskDamage: 0,
      break: {
         takeBreakFlag: false,
         multiplier: 0,
         numerical: -1,
         modifier: 0,
      },
      completed: false,
      critFlag: false,
      priority: "low", // ["low", "med", "hi"]
      room: "",
      frequency: { multiplier: 0, numerical: 0, modifier: 0 },
   });
   const [error, setError] = useState([]);
   const { addTask: addTaskAction } = useTaskDetails();

   const handleChange = (e) => {
      const name = e.target.name;
      let value = e.target.value;
      if (name === "taskDamage") value = parseInt(e.target.value);
      setFormData((curr) => ({ ...curr, [name]: value }));
   };

   const handleBreak = (e) => {
      let value;
      if (e.target.type === "checkbox") value = e.target.checked;
      else if (typeof e.target.value === "string")
         value = parseInt(e.target.value);
      else value = e.target.value;

      setFormData((curr) => {
         const tempBreakData = curr.break;
         tempBreakData[e.target.name] = value;
         return { ...curr, break: { ...tempBreakData } };
      });
   };

   const addTask = () => {
      const errorList = [];
      if (!formData.taskName)
         errorList.push({ name: "taskName", message: "Task name required." });
      if (!formData.details)
         errorList.push({ name: "details", message: "Task details required." });
      if (formData.taskDamage <= 0)
         errorList.push({
            name: "taskDamage",
            message: "Task damage must be greater than 0.",
         });
      if (formData.break.takeBreakFlag && formData.break.multiplier <= 0)
         errorList.push({
            name: "breakMultiplier",
            message:
               "If you want to add a break, the number of dice must be greater than 0.",
         });

      setError(errorList);
      if (errorList.length <= 0) addTaskAction(formData);
   };

   const errorStyle = {
      border: "2px solid red",
      borderRadius: "10px",
   };

   return (
      <Modal
         show={show}
         onHide={handleClose}
         centered
         onSubmit={(e) => e.preventDefault()}
         backdrop="static"
         style={{ border: error.length > 0 ? "5px solid red" : "" }}
      >
         <Modal.Header>Add Task</Modal.Header>
         <Modal.Body>
            <Form>
               <Form.Group
                  style={
                     error.find((x) => x.name === "taskName") ? errorStyle : {}
                  }
               >
                  <Form.Control
                     name="taskName"
                     value={formData.taskName}
                     onChange={handleChange}
                     placeholder="Task Name..."
                  />
                  <Form.Label style={{ color: "red" }} className="ms-1">
                     {error.map((x) =>
                        x.name === "taskName" ? x.message : null
                     )}
                  </Form.Label>
               </Form.Group>

               <Form.Group
                  style={
                     error.find((x) => x.name === "details") ? errorStyle : {}
                  }
               >
                  <Form.Control
                     as="textarea"
                     rows={3}
                     name="details"
                     value={formData.details}
                     onChange={handleChange}
                     placeholder="Task Details..."
                  />
                  <Form.Label style={{ color: "red" }} className="ms-1">
                     {error.map((x) =>
                        x.name === "details" ? x.message : null
                     )}
                  </Form.Label>
               </Form.Group>

               <Form.Group
                  className="my-1 h-100 d-flex align-items-end"
                  style={
                     error.find((x) => x.name === "taskDamage")
                        ? errorStyle
                        : {}
                  }
               >
                  <Form.Label>Damage: </Form.Label>
                  <Form.Control
                     type="number"
                     name="taskDamage"
                     value={formData.taskDamage}
                     onChange={handleChange}
                     min={0}
                  />
                  <Form.Label style={{ color: "red" }} className="ms-1">
                     {error.map((x) =>
                        x.name === "taskDamage" ? x.message : null
                     )}
                  </Form.Label>
               </Form.Group>

               <Form.Group className="mt-2">
                  <Form.Check
                     type="checkbox"
                     label="Toggle break"
                     checked={formData.break?.takeBreakFlag}
                     name="takeBreakFlag"
                     onChange={handleBreak}
                  />

                  {formData.break?.takeBreakFlag && (
                     <>
                        <Row>
                           <Form.Group
                              as={Col}
                              xs={12}
                              lg={4}
                              className="mb-1"
                              style={
                                 error.find((x) => x.name === "breakMultiplier")
                                    ? errorStyle
                                    : {}
                              }
                           >
                              <Form.Label className="mb-0">
                                 Number of Dice:
                              </Form.Label>
                              <Form.Control
                                 type="number"
                                 name="multiplier"
                                 value={formData.break.multiplier}
                                 onChange={handleBreak}
                                 min={0}
                              />
                              <Form.Label
                                 style={{ color: "red" }}
                                 className="ms-1"
                              >
                                 {error.map((x) =>
                                    x.name === "breakMultiplier"
                                       ? x.message
                                       : null
                                 )}
                              </Form.Label>
                           </Form.Group>

                           <Form.Group as={Col} xs={12} lg={4} className="mb-1">
                              <Form.Label className="mb-0">
                                 Dice Sides:
                              </Form.Label>
                              <Form.Select
                                 name="numerical"
                                 onChange={handleBreak}
                                 value={formData.break.numerical}
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
                                 value={formData.break.modifier}
                                 onChange={handleBreak}
                              />
                           </Form.Group>
                        </Row>
                     </>
                  )}
               </Form.Group>
            </Form>
         </Modal.Body>
         <Modal.Footer>
            <Button onClick={() => addTask()}>Add Task</Button>
            <Button variant="success" onClick={() => setModalType("Tasklist")}>
               Go back
            </Button>
            <Button variant="secondary" onClick={handleClose}>
               Close
            </Button>
         </Modal.Footer>
      </Modal>
   );
};

export default AddTaskModal;
