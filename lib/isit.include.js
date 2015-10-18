"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isInclude;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isitArray = require("isit.array");

var _isitArray2 = _interopRequireDefault(_isitArray);

var _isitString = require("isit.string");

var _isitString2 = _interopRequireDefault(_isitString);

function isInclude(obj, substr) {
    return ((0, _isitArray2["default"])(obj) || (0, _isitString2["default"])(obj)) && obj.indexOf(substr) !== -1;
}

module.exports = exports["default"];