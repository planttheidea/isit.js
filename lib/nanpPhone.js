"use strict";

exports.__esModule = true;
exports["default"] = isitNanpPhone;

var _regexps = require("./_regexps");

function isitNanpPhone(obj) {
    return _regexps.nanpPhone.test(obj);
}

module.exports = exports["default"];