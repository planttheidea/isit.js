// not version of alphaNumeric.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotAlphaNumeric;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _alphaNumeric = require("./alphaNumeric");

var _alphaNumeric2 = _interopRequireDefault(_alphaNumeric);

function isitNotAlphaNumeric() {
    return _interfaces.not(_alphaNumeric2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];