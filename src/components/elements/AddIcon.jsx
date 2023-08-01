import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { useMonsterList, useModalInfo } from "../../hooks";
import { MODAL_TYPES } from "../../constants/types";


const AddIcon = ({ monsterFlag = false }) => {
  const [hoverFlag, setHoverFlag] = useState(false);
  const { addMonster } = useMonsterList();
  const { setModalType, setModalData } = useModalInfo();

  const handleMouseEnter = () => {
    setHoverFlag(true);
  };

  const handleMouseExit = () => {
    setHoverFlag(false);
  };

  const handleClick = () => {
    if (monsterFlag) {
      setModalType(MODAL_TYPES.ADD_MONSTER_MODAL)
    } else {
      console.log("add - other");
    }
  };

  const style = {
    cursor: "pointer",
    fontSize: "1.5rem",
    color: hoverFlag ? "green" : "gray",
    border: "solid",
    padding: "0.1rem",
    borderRadius: "50%",
  };

  return (
    <div
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseExit()}
      style={style}
      className="d-flex align-items-center justify-content-center p-1"
    >
      <FontAwesomeIcon
        style={{ color: `${hoverFlag ? "green" : "gray"}`, fontSize: "1.1rem" }}
        icon={faPlus}
        onClick={() => handleClick()}
      />
    </div>
  );
};

export default AddIcon;
