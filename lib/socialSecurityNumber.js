// is obj a valid social security number?

"use strict";

exports.__esModule = true;
exports["default"] = isitSocialSecurityNumber;

var _regexps = require("./_regexps");

function isitSocialSecurityNumber(obj) {
    return _regexps.socialSecurityNumber.test(obj);
}

module.exports = exports["default"];