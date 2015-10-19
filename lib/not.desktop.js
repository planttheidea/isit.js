// not version of desktop.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotDesktop;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _desktop = require("./desktop");

var _desktop2 = _interopRequireDefault(_desktop);

function isitNotDesktop() {
    return _interfaces.not(_desktop2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];