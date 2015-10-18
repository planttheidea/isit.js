"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isArguments;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _utils = require("utils");

var _isitNull = require("isit.null");

var _isitNull2 = _interopRequireDefault(_isitNull);

function isArguments(obj) {
    return (0, _helpers.not)((0, _isitNull2["default"])(obj)) && _utils.toString.call(obj) === "[object Arguments]" || typeof obj === "object" && "callee" in obj;
}

module.exports = exports["default"];