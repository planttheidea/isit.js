// not version of windowsPhone.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotWindowsPhone;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _windowsPhone = require("./windowsPhone");

var _windowsPhone2 = _interopRequireDefault(_windowsPhone);

function isitNotWindowsPhone() {
    return (0, _interfaces.not)(_windowsPhone2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];