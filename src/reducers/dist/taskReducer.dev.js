"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = require("../constants/types");

var taskReducer = function taskReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  console.log("taskReducer => ", {
    state: state,
    action: action
  });

  switch (action.type) {
    case _types.TASK_TYPES.SET_TASKLIST:
      return action.payload;

    case _types.TASK_TYPES.UPDATE_TASK:
      // return state.map((x) => {
      //   return x.id === action.payload.id ? action.payload : x;
      // });
      return state;

    default:
      return state;
  }
};

var _default = taskReducer;
exports["default"] = _default;