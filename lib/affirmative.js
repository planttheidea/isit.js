"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAffirmative;

var _regexps = require("./_regexps");

function isitAffirmative(obj) {
    return _regexps.affirmative.test(obj);
}

module.exports = exports["default"];