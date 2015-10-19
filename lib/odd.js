// is obj an odd number?

"use strict";

exports.__esModule = true;
exports["default"] = isitOdd;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _number = require("./number");

var _number2 = _interopRequireDefault(_number);

function isitOdd(obj) {
    return _number2["default"](obj) && obj % 2 !== 0;
}

module.exports = exports["default"];