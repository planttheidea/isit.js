// are obj and max numbers, and is obj less than max?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitUnder;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("./helpers");

var _number = require("./number");

var _number2 = _interopRequireDefault(_number);

function isitUnder(obj, max) {
    return (0, _helpers.all)(_number2["default"])(obj, max) && obj < max;
}

module.exports = exports["default"];