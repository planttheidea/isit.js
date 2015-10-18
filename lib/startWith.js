"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isStartWith;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _string = require("string");

var _string2 = _interopRequireDefault(_string);

function _isStartWith(obj, startStr) {
    return (0, _string2["default"])(obj) && obj.indexOf(startStr) === 0;
}

module.exports = exports["default"];