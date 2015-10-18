"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = setRegexp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _utils = require("utils");

var _regexps = require("regexps");

var _regexps2 = _interopRequireDefault(_regexps);

function setRegexp(regexp, regexpName) {
    for (var r in _regexps2["default"]) {
        if (_utils.hasOwnProperty.call(_regexps2["default"], r) && regexpName === r) {
            this["_is" + regexpName.charAt(0).toUpperCase() + regexpName.slice(1)] = regexp;
        }
    }
}

module.exports = exports["default"];