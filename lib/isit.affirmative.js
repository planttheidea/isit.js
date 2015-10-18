"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isAffirmative;

var _regexps = require("regexps");

function isAffirmative(obj) {
    return _regexps.affirmative.test(obj);
}

module.exports = exports["default"];