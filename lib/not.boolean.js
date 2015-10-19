// not version of boolean.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotBoolean;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _boolean = require("./boolean");

var _boolean2 = _interopRequireDefault(_boolean);

function isitNotBoolean() {
    return (0, _interfaces.not)(_boolean2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];