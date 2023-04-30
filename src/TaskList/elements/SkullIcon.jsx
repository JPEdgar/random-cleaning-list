import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkull } from "@fortawesome/free-solid-svg-icons";

const SkullIcon = () => {
  return (
    <div
      style={{
        border: "solid",
        padding: "0.3rem",
        borderRadius: "50%",
        color: "red",
      }}
    >
      <FontAwesomeIcon
        style={{ color: "red", fontSize: "2.5rem" }}
        icon={faSkull}
      />
    </div>
  );
};

export default SkullIcon;
