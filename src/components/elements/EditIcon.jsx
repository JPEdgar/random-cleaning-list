import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import { useModalInfo } from "../../hooks";

const EditIcon = ({modalType, data}) => {
  const [hoverFlag, setHoverFlag] = useState(false);
  const {setModalType, setModalData} = useModalInfo()

  const handleMouseEnter = () => {
    setHoverFlag(true);
  };

  const handleMouseExit = () => {
    setHoverFlag(false);
  };

  const handleClick = () => {
    setModalType(modalType)
    setModalData(data)

  };

  const style = {
    cursor: "pointer",
    fontSize: "1.5rem",
    color: hoverFlag ? "green" : "gray",
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
      style={style}
      className="mx-1"
    >
      <FontAwesomeIcon icon={faPenToSquare} />
    </div>
  );
};

export default EditIcon;
