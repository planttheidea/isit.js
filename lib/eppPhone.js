"use strict";

exports.__esModule = true;
exports["default"] = isitEppPhone;

var _regexps = require("./_regexps");

function isitEppPhone(obj) {
    return _regexps.eppPhone.test(obj);
}

module.exports = exports["default"];