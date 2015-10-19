// not version of within.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotWithin;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _within = require("./within");

var _within2 = _interopRequireDefault(_within);

function isitNotWithin() {
    return _interfaces.not(_within2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];