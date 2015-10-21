// not version of symbol.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotSymbol;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _symbol = require("./symbol");

var _symbol2 = _interopRequireDefault(_symbol);

function isitNotSymbol() {
    return _interfaces.not(_symbol2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];