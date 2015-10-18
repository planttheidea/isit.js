// are obj, min, and max all numbers and is obj greater than min and less than max?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitWithin;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("./helpers");

var _number = require("./number");

var _number2 = _interopRequireDefault(_number);

function isitWithin(obj, min, max) {
    return (0, _helpers.all)(_number2["default"])(obj, min, max) && obj > min && obj < max;
}

module.exports = exports["default"];