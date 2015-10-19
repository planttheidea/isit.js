// all version of html.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAllHtml;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _html = require("./html");

var _html2 = _interopRequireDefault(_html);

function isitAllHtml() {
    return (0, _interfaces.all)(_html2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];