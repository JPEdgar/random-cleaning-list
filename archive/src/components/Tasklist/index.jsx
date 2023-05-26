import React from "react";

import Tasklist from "./Tasklist";

const index = ({ modalType, setModalType, show, setShow }) => {
   return (
      <>
         <Tasklist
            modalType={modalType}
            setModalType={setModalType}
            show={show}
            setShow={setShow}
         />
      </>
   );
};

export default index;
