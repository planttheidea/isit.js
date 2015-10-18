"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isInclude;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isArray = require("is.array");

var _isArray2 = _interopRequireDefault(_isArray);

var _isString = require("is.string");

var _isString2 = _interopRequireDefault(_isString);

function isInclude(obj, substr) {
    return ((0, _isArray2["default"])(obj) || (0, _isString2["default"])(obj)) && obj.indexOf(substr) !== -1;
}

module.exports = exports["default"];