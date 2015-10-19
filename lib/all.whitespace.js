// all version of whitespace.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAllWhitespace;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _whitespace = require("./whitespace");

var _whitespace2 = _interopRequireDefault(_whitespace);

function isitAllWhitespace() {
    return _interfaces.all(_whitespace2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];