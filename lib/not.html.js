// not version of html.js

"use strict";

exports.__esModule = true;
exports["default"] = isitNotHtml;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _html = require("./html");

var _html2 = _interopRequireDefault(_html);

function isitNotHtml() {
    return _interfaces.not(_html2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];