// is obj a valid social security number?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitSocialSecurityNumber;

var _regexps = require("./regexps");

function isitSocialSecurityNumber(obj) {
    return _regexps.socialSecurityNumber.test(obj);
}

module.exports = exports["default"];