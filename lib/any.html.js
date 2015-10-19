// any version of html.js

"use strict";

exports.__esModule = true;
exports["default"] = isitAnyHtml;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _html = require("./html");

var _html2 = _interopRequireDefault(_html);

function isitAnyHtml() {
    return _interfaces.any(_html2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];