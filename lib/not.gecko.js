// not version of gecko.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotGecko;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _gecko = require("./gecko");

var _gecko2 = _interopRequireDefault(_gecko);

function isitNotGecko() {
    return _interfaces.not(_gecko2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];