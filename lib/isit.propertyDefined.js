"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isPropertyDefined;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isitObject = require("isit.object");

var _isitObject2 = _interopRequireDefault(_isitObject);

var _isitString = require("isit.string");

var _isitString2 = _interopRequireDefault(_isitString);

function isPropertyDefined(obj, prop) {
    return (0, _isitObject2["default"])(obj) && (0, _isitString2["default"])(prop) && prop in obj;
}

module.exports = exports["default"];