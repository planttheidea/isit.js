// is obj a number and is it even?

"use strict";

exports.__esModule = true;
exports["default"] = isitEven;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _number = require("./number");

var _number2 = _interopRequireDefault(_number);

function isitEven(obj) {
    return _number2["default"](obj) && obj % 2 === 0;
}

module.exports = exports["default"];