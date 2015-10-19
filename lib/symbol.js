// is obj a symbol value?

"use strict";

exports.__esModule = true;
exports["default"] = isitSymbol;

function isitSymbol(obj) {
    return typeof obj === "symbol";
}

module.exports = exports["default"];