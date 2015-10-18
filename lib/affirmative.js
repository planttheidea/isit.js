"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isAffirmative;

var _regexps = require("regexps");

function _isAffirmative(obj) {
    return _regexps.affirmative.test(obj);
}

module.exports = exports["default"];