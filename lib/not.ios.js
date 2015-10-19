// not version of ios.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotIOS;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _ios = require("./ios");

var _ios2 = _interopRequireDefault(_ios);

function isitNotIOS() {
    return _interfaces.not(_ios2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];