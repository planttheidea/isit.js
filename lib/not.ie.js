// not version of ie.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotIe;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _ie = require("./ie");

var _ie2 = _interopRequireDefault(_ie);

function isitNotIe() {
    return _interfaces.not(_ie2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];