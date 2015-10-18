// is obj a valid credit card number?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitCreditCard;

var _regexps = require("./_regexps");

function isitCreditCard(obj) {
    return _regexps.creditCard.test(obj);
}

module.exports = exports["default"];