// all version of capitalized.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAllCapitalized;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _capitalized = require("./capitalized");

var _capitalized2 = _interopRequireDefault(_capitalized);

function isitAllCapitalized() {
    return _interfaces.all(_capitalized2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];