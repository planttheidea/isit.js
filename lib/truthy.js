"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitTruthy;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _existy = require("existy");

var _existy2 = _interopRequireDefault(_existy);

var _nan = require("nan");

var _nan2 = _interopRequireDefault(_nan);

function isitTruthy(obj) {
    return (0, _existy2["default"])(obj) && obj !== false && (0, _helpers.not)((0, _nan2["default"])(obj)) && obj !== "" && obj !== 0;
}

;
module.exports = exports["default"];