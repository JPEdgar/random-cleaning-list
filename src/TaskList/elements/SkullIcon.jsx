import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkull } from "@fortawesome/free-solid-svg-icons";

import MouseoverInfo from "./MouseoverInfo";

import { useBookshelf } from "../../hooks";

const WishListIcon = ({ bookData }) => {
  const { isOnWishList, toggleWishList, isLoadingFlag } = useBookshelf();

  const handleClick = async () => {
    toggleWishList(bookData);
  };

  return (
    <MouseoverInfo>
      <FontAwesomeIcon
        style={{
          color: "red",
        }}
        icon={faSkull}
      />
    </MouseoverInfo>
  );
};

export default WishListIcon;
