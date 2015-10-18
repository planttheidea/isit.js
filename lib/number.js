// is obj a number?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNumber;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _nanJs = require("./nan.js");

var _nanJs2 = _interopRequireDefault(_nanJs);

// it doesn't like just "nan"

function isitNumber(obj) {
    return (0, _interfaces.not)(_nanJs2["default"])(obj) && _utils.toString.call(obj) === "[object Number]";
}

module.exports = exports["default"];