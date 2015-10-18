"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isTruthy;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _isExisty = require("is.existy");

var _isExisty2 = _interopRequireDefault(_isExisty);

var _isNan = require("is.nan");

var _isNan2 = _interopRequireDefault(_isNan);

function isTruthy(obj) {
    return (0, _isExisty2["default"])(obj) && obj !== false && (0, _helpers.not)((0, _isNan2["default"])(obj)) && value !== "" && value !== 0;
}

;
module.exports = exports["default"];