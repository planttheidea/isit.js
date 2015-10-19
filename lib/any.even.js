// any version of even.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAnyEven;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _even = require("./even");

var _even2 = _interopRequireDefault(_even);

function isitAnyEven() {
    return (0, _interfaces.any)(_even2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];