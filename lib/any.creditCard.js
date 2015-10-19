// any version of creditcard.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitAnyCreditCard;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _interfaces = require("./_interfaces");

var _utils = require("./_utils");

var _creditCard = require("./creditCard");

var _creditCard2 = _interopRequireDefault(_creditCard);

function isitAnyCreditCard() {
    return (0, _interfaces.any)(_creditCard2["default"]).apply(null, _utils.arraySlice.call(arguments));
}

module.exports = exports["default"];