import React from "react";

import breakpointList from "../constants/breakpointList";

const useBreakpoints = () => {
  const getBreakpoint = () => {
    const screenSize = window.innerWidth;
    const breakpoint = breakpointList.find(
      (data) =>
      screenSize >= data.lowBreakpoint && screenSize <= data.highBreakpoint
    );
    return breakpoint?.classIndex;
  };

  return { getBreakpoint };
};

export default useBreakpoints;
