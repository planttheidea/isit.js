"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitTruthy;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _existy = require("existy");

var _existy2 = _interopRequireDefault(_existy);

var _nanJs = require("nan.js");

var _nanJs2 = _interopRequireDefault(_nanJs);

function isitTruthy(obj) {
    return (0, _existy2["default"])(obj) && obj !== false && (0, _helpers.not)(_nanJs2["default"])(obj) && obj !== "" && obj !== 0;
}

;
module.exports = exports["default"];