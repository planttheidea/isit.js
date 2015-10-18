"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitFinite;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _helpers = require("helpers");

var _nan = require("nan");

var _nan2 = _interopRequireDefault(_nan);

function isitFinite(obj) {
    return obj !== Infinity && obj !== -Infinity && (0, _helpers.not)((0, _nan2["default"])(obj));
}

;;
module.exports = exports["default"];