// is obj a decimal value?

"use strict";

exports.__esModule = true;
exports["default"] = isitDecimal;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _number = require("./number");

var _number2 = _interopRequireDefault(_number);

function isitDecimal(obj) {
    return _number2["default"](obj) && obj % 1 !== 0;
}

module.exports = exports["default"];