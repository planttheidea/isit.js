// not version of offline.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotOffline;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _offline = require("./offline");

var _offline2 = _interopRequireDefault(_offline);

function isitNotOffline() {
    return _interfaces.not(_offline2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];