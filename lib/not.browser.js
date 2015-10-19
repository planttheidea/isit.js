// not version of browser.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotBrowser;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _browser = require("./browser");

var _browser2 = _interopRequireDefault(_browser);

function isitNotBrowser() {
    return _interfaces.not(_browser2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];