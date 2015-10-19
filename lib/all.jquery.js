// all version of jquery.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAllJquery;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _jquery = require("./jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function isitAllJquery() {
    return (0, _interfaces.all)(_jquery2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];