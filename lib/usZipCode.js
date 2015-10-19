// is obj a valid US Zip Code?

"use strict";

exports.__esModule = true;
exports["default"] = isitUSZipCode;

var _regexps = require("./_regexps");

function isitUSZipCode(obj) {
    return _regexps.usZipCode.test(obj);
}

module.exports = exports["default"];