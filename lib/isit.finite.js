"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _isitNan = require("isit.nan");

var _isitNan2 = _interopRequireDefault(_isitNan);

exports["default"] = isFinite || function isFinite(obj) {
    return obj !== Infinity && obj !== -Infinity && (0, _helpers.not)((0, _isitNan2["default"])(obj));
};

module.exports = exports["default"];