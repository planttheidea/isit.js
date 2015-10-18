// is obj a string and all lowercase?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitLowercase;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

function isitLowercase(obj) {
    return (0, _string2["default"])(obj) && obj === obj.toLowerCase();
}

module.exports = exports["default"];