"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isArguments;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _utils = require("utils");

var _null = require("null");

var _null2 = _interopRequireDefault(_null);

function _isArguments(obj) {
    return (0, _helpers.not)((0, _null2["default"])(obj)) && _utils.toString.call(obj) === "[object Arguments]" || typeof obj === "object" && "callee" in obj;
}

module.exports = exports["default"];