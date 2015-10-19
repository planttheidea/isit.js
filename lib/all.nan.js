// all version of nan.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAllNaN;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _nanJs = require("./nan.js");

var _nanJs2 = _interopRequireDefault(_nanJs);

function isitAllNaN() {
    return _interfaces.all(_nanJs2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];