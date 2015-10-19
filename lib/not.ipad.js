// not version of ipad.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotIpad;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _ipad = require("./ipad");

var _ipad2 = _interopRequireDefault(_ipad);

function isitNotIpad() {
    return _interfaces.not(_ipad2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];