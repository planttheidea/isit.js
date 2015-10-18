"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isInfinite;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _isFinite = require("is.finite");

var _isFinite2 = _interopRequireDefault(_isFinite);

function isInfinite(obj) {
    return (0, _helpers.not)((0, _isFinite2["default"])(obj));
}

module.exports = exports["default"];