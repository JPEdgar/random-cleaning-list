import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useTaskDetails } from "../../hooks";

const EditIcon = () => {
  const [hoverFlag, setHoverFlag] = useState(false);
  const { setEditFlag } = useTaskDetails();

  const handleMouseEnter = () => {
    setHoverFlag(true);
  };

  const handleMouseExit = () => {
    setHoverFlag(false);
  };

  const handleClick = () => {
    setEditFlag((curr) => !curr);
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
