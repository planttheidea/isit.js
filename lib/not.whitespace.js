// not version of whitespace.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNotWhitespace;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _whitespace = require("./whitespace");

var _whitespace2 = _interopRequireDefault(_whitespace);

function isitNotWhitespace() {
    return (0, _interfaces.not)(_whitespace2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];