import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const SkullIcon = () => {
  const handleClick = () => {
    //
  };

  return (
    <FontAwesomeIcon
      style={{
        fontSize: "10px",
        height: "1.75em",
      }}
      icon={faEllipsis}
      className="me-2 p-1"
      onClick={() => handleClick()}
    />
  );
};

export default SkullIcon;
