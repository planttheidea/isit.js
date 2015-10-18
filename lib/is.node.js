"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isNode;

function isNode() {
    return typeof window === undefined;
}

module.exports = exports["default"];