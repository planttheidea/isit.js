"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isEven;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isitNumber = require("isit.number");

var _isitNumber2 = _interopRequireDefault(_isitNumber);

function isEven(obj) {
    return (0, _isitNumber2["default"])(obj) && obj % 2 === 0;
}

module.exports = exports["default"];