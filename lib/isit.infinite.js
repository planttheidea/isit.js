"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isInfinite;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _isitFinite = require("isit.finite");

var _isitFinite2 = _interopRequireDefault(_isitFinite);

function isInfinite(obj) {
    return (0, _helpers.not)((0, _isitFinite2["default"])(obj));
}

module.exports = exports["default"];