import React from "react";

const Title = ({setModalType, setShow}) => {
  const handleShow = () => {
    setModalType("Tasklist")
    setShow(true)
  }

   return (
      <div className="d-flex justify-content-between w-100">
         <h1 className="title text-center w-100">d20 Tasklist</h1>
         <button onClick={() => handleShow()}>Edit List</button>
      </div>
   );
};

export default Title;
