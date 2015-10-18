"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isBrowser;

function _isBrowser() {
    return typeof window !== "undefined";
}

module.exports = exports["default"];