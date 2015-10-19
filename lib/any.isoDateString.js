// any version of isoDateString.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAnyISODateString;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _isoDateString = require("./isoDateString");

var _isoDateString2 = _interopRequireDefault(_isoDateString);

function isitAnyISODateString() {
    return (0, _interfaces.any)(_isoDateString2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];