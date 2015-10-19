// all version of even.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAllEven;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _even = require("./even");

var _even2 = _interopRequireDefault(_even);

function isitAllEven() {
    return (0, _interfaces.all)(_even2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];