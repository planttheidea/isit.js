// not version of datestring.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotDateString;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _dateString = require("./dateString");

var _dateString2 = _interopRequireDefault(_dateString);

function isitNotDateString() {
    return (0, _interfaces.not)(_dateString2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];