import React from "react";
import { Image } from "react-bootstrap";

import { useMonsterDetails } from "../../hooks";

const MonsterDetails = () => {
  const { monsterDetails } = useMonsterDetails();
  console.log(monsterDetails);
  return (
    <>
      <Image src={monsterDetails.image} alt={`image-${monsterDetails.name}`}/>
      <div>{monsterDetails.name}</div>
    </>
  );
};

export default MonsterDetails;
