// are obj, min, and max all numbers and is obj greater than min and less than max?

"use strict";

exports.__esModule = true;
exports["default"] = isitWithin;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _number = require("./number");

var _number2 = _interopRequireDefault(_number);

function isitWithin(obj, min, max) {
    return _interfaces.all(_number2["default"])(obj, min, max) && obj > min && obj < max;
}

module.exports = exports["default"];