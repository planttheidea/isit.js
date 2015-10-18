"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isTruthy;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _isitExisty = require("isit.existy");

var _isitExisty2 = _interopRequireDefault(_isitExisty);

var _isitNan = require("isit.nan");

var _isitNan2 = _interopRequireDefault(_isitNan);

function isTruthy(obj) {
    return (0, _isitExisty2["default"])(obj) && obj !== false && (0, _helpers.not)((0, _isitNan2["default"])(obj)) && value !== "" && value !== 0;
}

;
module.exports = exports["default"];