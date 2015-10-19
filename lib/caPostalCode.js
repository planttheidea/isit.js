// is obj a valid Canada Postal Code?

"use strict";

exports.__esModule = true;
exports["default"] = isitCAPostalCode;

var _regexps = require("./_regexps");

function isitCAPostalCode(obj) {
    return _regexps.caPostalCode.test(obj);
}

module.exports = exports["default"];