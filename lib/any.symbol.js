// any version of symbol.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAnySymbol;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _symbol = require("./symbol");

var _symbol2 = _interopRequireDefault(_symbol);

function isitAnySymbol() {
    return _interfaces.any(_symbol2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];