import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const CloseIcon = ({ handleClose }) => {
  const [hoverFlag, setHoverFlag] = useState(false);

  const handleMouseEnter = () => {
    setHoverFlag(true);
  };

  const handleMouseExit = () => {
    setHoverFlag(false);
  };

  const handleClick = () => {
    handleClose();
  };

  const style = {
    cursor: "pointer",
    fontSize: "1.5rem",
    color: hoverFlag ? "red" : "gray",
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
      onClick={() => handleClick()}
      style={style}
      className="mx-1"
    >
      <FontAwesomeIcon icon={faXmark} />
    </div>
  );
};

export default CloseIcon;
