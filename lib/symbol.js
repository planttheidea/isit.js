// is obj a symbol value?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitSymbol;

function isitSymbol(obj) {
    return typeof obj === "symbol";
}

module.exports = exports["default"];