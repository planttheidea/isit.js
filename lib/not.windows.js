// not version of windows.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotWindows;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _windows = require("./windows");

var _windows2 = _interopRequireDefault(_windows);

function isitNotWindows() {
    return _interfaces.not(_windows2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];