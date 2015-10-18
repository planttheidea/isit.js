"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isFalsy;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _isitTruthy = require("isit.truthy");

var _isitTruthy2 = _interopRequireDefault(_isitTruthy);

function isFalsy(obj) {
    return (0, _helpers.not)((0, _isitTruthy2["default"])(obj));
}

;
module.exports = exports["default"];