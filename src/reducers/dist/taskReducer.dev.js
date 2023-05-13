"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = require("../constants/types");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var taskReducer = function taskReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  // console.log("taskReducer => ", { state, action });
  switch (action.type) {
    case _types.TASK_TYPES.SET_TASKLIST:
      return action.payload;

    case _types.TASK_TYPES.UPDATE_TASK:
      var updatedTasklist = state.tasklist.map(function (x) {
        return x.id === action.payload.id ? action.payload : x;
      });
      return _objectSpread({}, state, {
        tasklist: updatedTasklist
      });

    case _types.TASK_TYPES.DELETE_TASK:
      return _objectSpread({}, state, {
        tasklist: action.payload
      });

    default:
      return state;
  }
};

var _default = taskReducer;
exports["default"] = _default;