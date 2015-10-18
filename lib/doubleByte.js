// is obj a string and does it contain two-byte (or non-Latin) characters?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitDoubleByte;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _regexps = require("./_regexps");

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

function isitDoubleByte(obj) {
    return (0, _string2["default"])(obj) && _regexps.doubleByte.test(obj);
}

module.exports = exports["default"];