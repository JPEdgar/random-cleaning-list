import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddIcon = () => {
  const [hoverFlag, setHoverFlag] = useState(false);

  const handleMouseEnter = () => {
    setHoverFlag(true);
  };

  const handleMouseExit = () => {
    setHoverFlag(false);
  };

  const handleClick = () => {
    //
    console.log("add")
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
