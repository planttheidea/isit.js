// not version of tomorrow.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotTomorrow;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _tomorrow = require("./tomorrow");

var _tomorrow2 = _interopRequireDefault(_tomorrow);

function isitNotTomorrow() {
    return (0, _interfaces.not)(_tomorrow2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];