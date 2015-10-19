// are obj and max numbers, and is obj less than max?

"use strict";

exports.__esModule = true;
exports["default"] = isitUnder;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _number = require("./number");

var _number2 = _interopRequireDefault(_number);

function isitUnder(obj, max) {
    return _interfaces.all(_number2["default"])(obj, max) && obj < max;
}

module.exports = exports["default"];