// all version of caPostalCode.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAllCAPostalCode;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _caPostalCode = require("./caPostalCode");

var _caPostalCode2 = _interopRequireDefault(_caPostalCode);

function isitAllCAPostalCode() {
    return (0, _interfaces.all)(_caPostalCode2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];