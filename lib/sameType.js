"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitSameType;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utils = require("utils");

var _nan = require("nan");

var _nan2 = _interopRequireDefault(_nan);

function isitSameType(obj1, obj2) {
    if ((0, _nan2["default"])(obj1) || (0, _nan2["default"])(obj2)) {
        return (0, _nan2["default"])(obj1) === (0, _nan2["default"])(obj2);
    }

    return _utils.toString.call(obj1) === _utils.toString.call(obj2);
}

module.exports = exports["default"];