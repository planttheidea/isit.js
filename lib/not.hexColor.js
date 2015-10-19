// not version of hexColor.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotHexColor;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _hexColor = require("./hexColor");

var _hexColor2 = _interopRequireDefault(_hexColor);

function isitNotHexColor() {
    return _interfaces.not(_hexColor2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];