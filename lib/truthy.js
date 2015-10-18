// is obj a truthy value?
// NOTE: matches the language, so valid values are objects, functions,
// arrays, strings with length, and integers greater than 0

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitTruthy;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _existy = require("./existy");

var _existy2 = _interopRequireDefault(_existy);

var _nanJs = require("./nan.js");

var _nanJs2 = _interopRequireDefault(_nanJs);

function isitTruthy(obj) {
    return (0, _existy2["default"])(obj) && obj !== false && (0, _interfaces.not)(_nanJs2["default"])(obj) && obj !== "" && obj !== 0;
}

;
module.exports = exports["default"];