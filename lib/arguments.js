// is obj a set of function arguments?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitArguments;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _utils = require("utils");

var _null = require("null");

var _null2 = _interopRequireDefault(_null);

function isitArguments(obj) {
    return (0, _helpers.not)(_null2["default"])(obj) && _utils.toString.call(obj) === "[object Arguments]" || typeof obj === "object" && "callee" in obj;
}

module.exports = exports["default"];