// all version of usZipCode.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAllUSZipCode;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _usZipCode = require("./usZipCode");

var _usZipCode2 = _interopRequireDefault(_usZipCode);

function isitAllUSZipCode() {
    return _interfaces.all(_usZipCode2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];