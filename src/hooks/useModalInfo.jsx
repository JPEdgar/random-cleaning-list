import React from "react";

import useD20TasklistContext from "./contexts/useD20TasklistContext";
import { SITE_TYPES } from "../constants/types";

const useModalInfo = () => {
  const { state: d20State, dispatch: d20Dispatch } = useD20TasklistContext();

  const setModalType = (modalType) => {
    d20Dispatch({type: SITE_TYPES.SET_MODAL_TYPE, payload: modalType})
  }

  return { setModalType };
};

export default useModalInfo;
