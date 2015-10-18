"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNode;

function isitNode() {
    return typeof window === "undefined";
}

module.exports = exports["default"];