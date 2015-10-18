"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isEndWith;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _string = require("string");

var _string2 = _interopRequireDefault(_string);

function _isEndWith(obj, endStr) {
    return (0, _string2["default"])(obj) && obj.indexOf(endStr) === obj.length - endStr.length;
}

module.exports = exports["default"];