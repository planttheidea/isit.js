"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitInclude;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _array = require("array");

var _array2 = _interopRequireDefault(_array);

var _string = require("string");

var _string2 = _interopRequireDefault(_string);

function isitInclude(obj, substr) {
    return ((0, _array2["default"])(obj) || (0, _string2["default"])(obj)) && obj.indexOf(substr) !== -1;
}

module.exports = exports["default"];