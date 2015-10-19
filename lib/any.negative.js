// any version of negative.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAnyNegative;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _negative = require("./negative");

var _negative2 = _interopRequireDefault(_negative);

function isitAnyNegative() {
    return (0, _interfaces.any)(_negative2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];