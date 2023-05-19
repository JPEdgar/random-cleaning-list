import React, { useState, useEffect } from "react";

import { Row, Col, Alert, Button } from "react-bootstrap";

import Task from "./Task";
import TaskDetailsModal from "./TaskDetailsModal";
import EditTasklistModal from "./EditTasklistModal";
import AddTaskModal from "./AddTaskModal";
import { useTaskDetails, useMonsterDetails } from "../../hooks";

const Tasklist = ({ modalType, setModalType, setShow, show }) => {
   const { tasklist, critFlag, setEditFlag } = useTaskDetails();
   const { monsterDetails } = useMonsterDetails();
   const [focus, setFocus] = useState({});

   const [showAlert, setShowAlert] = useState(false);

   const handleClose = () => {
      setEditFlag(false);
      setShow(false);
   };

   const handleShow = () => {
      setShow(true);
   };

   const hideAlert = () => {
      setShowAlert(false);
   };

   useEffect(() => {
      if (monsterDetails.currentDamage >= monsterDetails.maxHP)
         setShowAlert(true);
   }, [monsterDetails]);

   return (
      <div style={{ border: critFlag ? "5px solid red" : "" }} className="p-1">
         {modalType === "Task" && (
            <TaskDetailsModal
               show={show}
               handleClose={() => handleClose()}
               focus={focus}
            />
         )}

         {modalType === "Tasklist" && (
            <EditTasklistModal
               show={show}
               handleClose={handleClose}
               setModalType={setModalType}
            />
         )}

         {modalType === "Add-Task" && (
            <AddTaskModal
               show={show}
               handleClose={handleClose}
               setModalType={setModalType}
            />
         )}
         {showAlert && (
            <Alert variant="warning">
               <Alert.Heading>You've killed the chore monster!</Alert.Heading>
               <p>
                  You're done for the day. Take it easy. Relax. You've earned
                  it.
               </p>
               <hr />
               <p className="mb-0">
                  <Button onClick={() => hideAlert()}>Continue</Button>
               </p>
            </Alert>
         )}

         {!showAlert && (
            <Row>
               <Col xs={{ span: 4, offset: 2 }}>
                  {tasklist?.tasklist?.map(
                     (task, index) =>
                        index < 10 && (
                           <Task
                              key={`task-${task.id}`}
                              data={task}
                              handleShow={handleShow}
                              setFocus={setFocus}
                              setModalType={setModalType}
                           />
                        )
                  )}
               </Col>
               <Col xs={{ span: 4, offset: -2 }}>
                  {tasklist?.tasklist?.map(
                     (task, index) =>
                        index >= 10 && (
                           <Task
                              key={`task-${task.id}`}
                              data={task}
                              handleShow={handleShow}
                              setFocus={setFocus}
                              setModalType={setModalType}
                           />
                        )
                  )}
               </Col>
            </Row>
         )}
      </div>
   );
};

export default Tasklist;
