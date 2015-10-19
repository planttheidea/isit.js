// any version of number.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAnyNumber;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _number = require("./number");

var _number2 = _interopRequireDefault(_number);

function isitAnyNumber() {
    return _interfaces.any(_number2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];