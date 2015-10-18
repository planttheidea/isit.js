// is obj a string and does it HTML tags?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitHtml;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _regexps = require("./_regexps");

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

function isitHtml(obj) {
    return (0, _string2["default"])(obj) && _regexps.html.test(obj);
}

module.exports = exports["default"];