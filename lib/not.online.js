// not version of online.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotOnline;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _online = require("./online");

var _online2 = _interopRequireDefault(_online);

function isitNotOnline() {
    return (0, _interfaces.not)(_online2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];