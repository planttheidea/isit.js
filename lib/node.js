"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = _isNode;

function _isNode() {
    return typeof window === "undefined";
}

module.exports = exports["default"];