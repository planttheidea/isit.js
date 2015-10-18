"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isPropertyDefined;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isObject = require("is.object");

var _isObject2 = _interopRequireDefault(_isObject);

var _isString = require("is.string");

var _isString2 = _interopRequireDefault(_isString);

function isPropertyDefined(obj, prop) {
    return (0, _isObject2["default"])(obj) && (0, _isString2["default"])(prop) && prop in obj;
}

module.exports = exports["default"];