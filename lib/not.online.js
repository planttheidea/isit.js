// not version of online.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotOnline;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _online = require("./online");

var _online2 = _interopRequireDefault(_online);

function isitNotOnline() {
    return _interfaces.not(_online2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];