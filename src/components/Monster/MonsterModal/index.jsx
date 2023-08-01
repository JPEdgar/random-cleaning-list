import React from "react";

import EditModal from "./EditModal";
import AddModal from "./AddModal";

import { MODAL_TYPES } from "../../../constants/types";
import { useModalInfo } from "../../../hooks";

const MonsterModal = () => {
const {activeModal} = useModalInfo()


  return (
    <>
      {activeModal === MODAL_TYPES.EDIT_MONSTER_MODAL && <EditModal />}
      {activeModal === MODAL_TYPES.ADD_MONSTER_MODAL && <AddModal />}
    </>
  );
};

export default MonsterModal;
