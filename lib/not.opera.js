// not version of opera.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotOpera;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _opera = require("./opera");

var _opera2 = _interopRequireDefault(_opera);

function isitNotOpera() {
    return _interfaces.not(_opera2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];