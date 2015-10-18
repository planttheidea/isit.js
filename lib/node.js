// is the environment not a browser (meaning its likely server-side, or NodeJS)?

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isitNode;

function isitNode() {
    return typeof window === "undefined";
}

module.exports = exports["default"];