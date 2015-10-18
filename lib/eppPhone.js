"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitEppPhone;

var _regexps = require("./regexps");

function isitEppPhone(obj) {
    return _regexps.eppPhone.test(obj);
}

module.exports = exports["default"];