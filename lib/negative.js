// is obj a negative number?

"use strict";

exports.__esModule = true;
exports["default"] = isitNegative;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _number = require("./number");

var _number2 = _interopRequireDefault(_number);

function isitNegative(obj) {
    return _number2["default"](obj) && obj < 0;
}

module.exports = exports["default"];