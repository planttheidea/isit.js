// not version of kebabCase.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotKebabCase;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _kebabCase = require("./kebabCase");

var _kebabCase2 = _interopRequireDefault(_kebabCase);

function isitNotKebabCase() {
    return (0, _interfaces.not)(_kebabCase2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];