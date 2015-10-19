// not version of jquery.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotJquery;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _jquery = require("./jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function isitNotJquery() {
    return _interfaces.not(_jquery2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];