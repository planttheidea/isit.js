// not version of char.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotChar;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _char = require("./char");

var _char2 = _interopRequireDefault(_char);

function isitNotChar() {
    return _interfaces.not(_char2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];