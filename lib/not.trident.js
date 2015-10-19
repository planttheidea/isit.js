// not version of trident.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotTrident;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _trident = require("./trident");

var _trident2 = _interopRequireDefault(_trident);

function isitNotTrident() {
    return _interfaces.not(_trident2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];