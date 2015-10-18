// is obj a char value?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitChar;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _string = require("string");

var _string2 = _interopRequireDefault(_string);

function isitChar(obj) {
    return (0, _string2["default"])(obj) && obj.length === 1;
}

module.exports = exports["default"];