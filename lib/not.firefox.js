// not version of firefox.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotFirefox;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _firefox = require("./firefox");

var _firefox2 = _interopRequireDefault(_firefox);

function isitNotFirefox() {
    return _interfaces.not(_firefox2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];