"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isCreditCard;

var _regexps = require("regexps");

function isCreditCard(obj) {
    return _regexps.creditCard.test(obj);
}

module.exports = exports["default"];