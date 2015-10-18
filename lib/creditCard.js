"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isCreditCard;

var _regexps = require("regexps");

function _isCreditCard(obj) {
    return _regexps.creditCard.test(obj);
}

module.exports = exports["default"];