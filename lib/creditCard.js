// is obj a valid credit card number?

"use strict";

exports.__esModule = true;
exports["default"] = isitCreditCard;

var _regexps = require("./_regexps");

function isitCreditCard(obj) {
    return _regexps.creditCard.test(obj);
}

module.exports = exports["default"];