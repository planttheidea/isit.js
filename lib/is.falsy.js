"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isFalsy;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _isTruthy = require("is.truthy");

var _isTruthy2 = _interopRequireDefault(_isTruthy);

function isFalsy(obj) {
    return (0, _helpers.not)((0, _isTruthy2["default"])(obj));
}

;
module.exports = exports["default"];