import React, { useState, useEffect } from "react";

import useD20TasklistContext from "./contexts/useD20TasklistContext";
import { SITE_TYPES } from "../constants/types";

const useModalInfo = () => {
  const { state: d20State, dispatch: d20Dispatch } = useD20TasklistContext();

  const setModalType = (modalType) => {
    d20Dispatch({ type: SITE_TYPES.SET_MODAL_TYPE, payload: modalType });
  };

  const setModalData = (modalData) => {
    d20Dispatch({ type: SITE_TYPES.SET_MODAL_DATA, payload: modalData });
  };

  const handleChange_MonsterModal = (e) => {
    d20Dispatch({ type: SITE_TYPES.EDIT_MODAL_FORM_DATA, payload: e.target });
  };

  const hideModal = () => {
    d20Dispatch({ type: SITE_TYPES.HIDE_MODAL });
  };

  const resetModalData = (id) => {
    d20Dispatch({type: SITE_TYPES.RESET_MODAL_FORM_DATA, payload: id})
  };

  const modalData = d20State.siteData?.modalData
    ? { ...d20State.siteData.modalData }
    : {};

  const isModalOpenFlag = d20State.siteData?.showModalFlag
    ? { ...d20State.siteData.showModalFlag }
    : false;

  return {
    setModalType,
    hideModal,
    isModalOpenFlag,
    setModalData,
    modalData,
    handleChange_MonsterModal,
    resetModalData,
  };
};

export default useModalInfo;
