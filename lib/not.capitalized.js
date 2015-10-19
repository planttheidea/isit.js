// not version of capitalized.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotCapitalized;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _capitalized = require("./capitalized");

var _capitalized2 = _interopRequireDefault(_capitalized);

function isitNotCapitalized() {
    return (0, _interfaces.not)(_capitalized2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];